import { useMemo, useState } from "react";
import { Circle } from "../atoms/Circle";
import { NumbersObject, fourBoard, numbersArrayFor4x4, numbersArrayFor6x6, sixBoard } from "../gameLogic/numbersArray";
import { numbers as gameTypenNumber, shuffleArray } from "../gameLogic/helpers";
import { PlayerObject } from "../gameLogic/playerObject";
import clsx from "clsx";
import { IconObject, iconsArrayFor4x4 } from "../gameLogic/iconsArray";

import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const GameField = (props:{
  inGamePlayers: PlayerObject[],
  setIngamePlayers: (value: PlayerObject[])=> void
  gridSize: string
  gameTheme: string
}) => {
  console.log(faHeart)
  const [firstNumber, setFirstNumber] = useState<NumbersObject | null >(null)
  const [shuffledNumbers, setShuffledNumbers] = useState<NumbersObject[] | IconObject[] | null>(null)
  const [isGameEnd, setIsGameEnd] = useState(false)

//when page loagds this code shuffles numbers 
useMemo(()=>{
  const gameTheme = props.gameTheme
  const numbers: NumbersObject[] | IconObject[] =
   props.gridSize === fourBoard && gameTheme === gameTypenNumber ? numbersArrayFor4x4 
   : 
   props.gridSize === sixBoard && gameTheme === gameTypenNumber ? numbersArrayFor6x6
   :
  iconsArrayFor4x4

  setShuffledNumbers(shuffleArray([...numbers])) 
}, [])

useMemo(() => {
  const isAllActive = shuffledNumbers?.every((item) => item.condition === 'active');
  setIsGameEnd(isAllActive || false);
}, [shuffledNumbers]);

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
  
  const newArray = shuffledNumbers ? shuffledNumbers.slice() : []
 
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

    const isAllActive = newArray.every((item)=> item.condition === 'active')
    if(isAllActive){
      setIsGameEnd(true)
    }
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
        {shuffledNumbers?.map((item)=> 
        <div key={item.id} onClick={()=>handleClick(item)}>
          <Circle
          gridSize={props.gridSize}
          gameTheme={props.gameTheme}
          item={item}
          />
        </div> )}
    </div>
  )
}
