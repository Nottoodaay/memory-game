import { useMemo, useState } from "react";
import { Circle } from "../atoms/Circle";
import { NumbersObject, numbersArrayFor4x4 } from "../gameLogic/numbersArray";
import { shuffleArray } from "../gameLogic/helpers";
import { PlayerObject } from "../gameLogic/playerObject";

export const GameField = (props:{
  inGamePlayers: PlayerObject[],
  setIngamePlayers: (value: PlayerObject[])=> void
}) => {

  const [firstNumber, setFirstNumber] = useState<NumbersObject | null >(null)
  const [shuffledNumbers, setShuffledNumbers] = useState<NumbersObject[] | []>([])

//when page loagds this code shuffles numbers 
useMemo(()=>{
  const numbers: NumbersObject[] = numbersArrayFor4x4
  setShuffledNumbers(shuffleArray([...numbers])) 
}, [])

const playerTurnHandler = () =>{
  if(props.inGamePlayers.length === 1) return
  const newPlayers = props.inGamePlayers.slice()
  const activePlayerIndex = newPlayers.findIndex((player)=> player.condition === 'active')
 
  newPlayers[activePlayerIndex].condition = 'inactive'
  if(newPlayers[activePlayerIndex].id === 3){
    newPlayers[0].condition = 'active'
  }else{
     newPlayers[activePlayerIndex + 1].condition = 'active'
  }
  props.setIngamePlayers(newPlayers)
}

const correctAnswer = () =>{
  const newPlayers = props.inGamePlayers.slice()
  const activePlayerIndex = newPlayers.findIndex((player)=> player.condition === 'active')

  newPlayers[activePlayerIndex].score += 1
  props.setIngamePlayers(newPlayers)
  console.log(props.inGamePlayers)
}
  
const handleClick = (chosenNumber: NumbersObject) =>{
  const newArray = shuffledNumbers.slice()
  if(firstNumber){
    const firstValue = newArray.findIndex((item)=>item.id === firstNumber.id) 
    newArray[firstValue].condition = 'pending' 
    const secondValue = newArray.findIndex((item)=>item.id === chosenNumber.id) 
    newArray[secondValue].condition = 'pending' 
    setShuffledNumbers(newArray)
    if(firstNumber.number === chosenNumber.number){
      setTimeout(()=>{
        const firstValue = newArray.findIndex((item)=>item.id === firstNumber.id) 
        newArray[firstValue].condition = 'active' 
        const secondValue = newArray.findIndex((item)=>item.id === chosenNumber.id) 
        newArray[secondValue].condition = 'active' 
        setShuffledNumbers(newArray)
        setFirstNumber(null)
        correctAnswer()
      },1000)
      
    }else{
      setTimeout(()=>{
        const firstValue = newArray.findIndex((item)=>item.id === firstNumber.id) 
        newArray[firstValue].condition = 'hidden' 
        const secondValue = newArray.findIndex((item)=>item.id === chosenNumber.id) 
        newArray[secondValue].condition = 'hidden' 
        setShuffledNumbers(newArray)
        setFirstNumber(null)
        playerTurnHandler()
        if(props.inGamePlayers.length === 1) correctAnswer()
      },1000)
      
    }
  }else{
    setFirstNumber(chosenNumber)
    const secondValue = newArray.findIndex((item)=>item.id === chosenNumber.id) 
    newArray[secondValue].condition = 'pending'
  }
}
  

  return (
    <div 
    className="
    grid grid-flow-col grid-cols-4 grid-rows-4
    gap-[12px] md:gap-[20px]">
        {shuffledNumbers.map((item)=> 
        <div key={item.id} onClick={()=>handleClick(item)}>
          <Circle 
          item={item}
          />
        </div> )}
    </div>
  )
}
