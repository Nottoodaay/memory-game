import { useMemo, useState } from "react";
import { Circle } from "../atoms/Circle";
import { NumbersObject, fourBoard, sixBoard } from "../gameLogic/numbersArray";
import { PlayerObject } from "../gameLogic/playerObject";
import clsx from "clsx";

export const GameField = (props:{
  inGamePlayers: PlayerObject[],
  setIngamePlayers: (value: PlayerObject[])=> void
  setIsGameEnd: (value: boolean) => void
  gridSize: string
  shuffledNumbers: NumbersObject[] | null
  setShuffledNumbers: (value: NumbersObject[] | null) => void
}) => {
  
  const [firstNumber, setFirstNumber] = useState<NumbersObject | null >(null)

//when page loagds this code shuffles numbers 

useMemo(() => {
  setTimeout(()=>{
    const isAllActive = props.shuffledNumbers ?
     props.shuffledNumbers.every((item) => item.condition === 'active')
    : false
    props.setIsGameEnd(isAllActive);
  },1000)
  
}, [props.shuffledNumbers]);

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
}
  
const handleClick = (chosenNumber: NumbersObject) =>{
  //for avoid double click
  if(chosenNumber.condition === 'active' || chosenNumber.condition === 'pending') return
 
  const pendingCount = props.shuffledNumbers?.filter(
    (item) => item.condition === 'pending'
  ).length;

  if (pendingCount) {
    if(pendingCount >= 2)
    return;
  }
  
  const newArray = props.shuffledNumbers ? props.shuffledNumbers.slice() : []
 
  if(firstNumber){
    const firstValue = newArray.findIndex((item)=>item.id === firstNumber.id) 
    newArray[firstValue].condition = 'pending' 
    const secondValue = newArray.findIndex((item)=>item.id === chosenNumber.id) 
    newArray[secondValue].condition = 'pending' 
    props.setShuffledNumbers(newArray)
    
    if(firstNumber.number === chosenNumber.number){
      setTimeout(()=>{
        const firstValue = newArray.findIndex((item)=>item.id === firstNumber.id) 
        newArray[firstValue].condition = 'active' 
        const secondValue = newArray.findIndex((item)=>item.id === chosenNumber.id) 
        newArray[secondValue].condition = 'active' 
        props.setShuffledNumbers(newArray)
        setFirstNumber(null)
        correctAnswer()
      },1000)
      
    }else{
      setTimeout(()=>{
        const firstValue = newArray.findIndex((item)=>item.id === firstNumber.id) 
        newArray[firstValue].condition = 'hidden' 
        const secondValue = newArray.findIndex((item)=>item.id === chosenNumber.id) 
        newArray[secondValue].condition = 'hidden' 
        props.setShuffledNumbers(newArray)
        setFirstNumber(null)
        playerTurnHandler()
        if(props.inGamePlayers.length === 1) correctAnswer()
      },1000)
    }
  }else{
    setFirstNumber(chosenNumber)
    const secondValue = newArray.findIndex((item)=>item.id === chosenNumber.id) 
    newArray[secondValue].condition = 'pending'

    // const isAllActive = newArray.every((item)=> item.condition === 'active')
    // if(isAllActive){
    //   setIsGameEnd(true)
    // }
  }
}
  

  return (
    <div 
    className={clsx(
    "grid grid-flow-col",
    {
      "grid-cols-4 grid-rows-4" : props.gridSize === fourBoard,
      "gird-cols-6 grid-rows-6" : props.gridSize === sixBoard
    },
    "gap-[12px] md:gap-[20px]")}>
        {props.shuffledNumbers?.map((item)=> 
        <div key={item.id} onClick={()=>handleClick(item)}>
            <Circle
            gridSize={props.gridSize}
            numberObject={item}
            />         
        </div> )}
    </div>
  )
}
