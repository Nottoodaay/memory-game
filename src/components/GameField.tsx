import { useMemo, useState } from "react";
import { Circle } from "../atoms/Circle";
import { NumbersObject, numbersArrayFor4x4 } from "../gameLogic/numbersArray";
import { shuffleArray } from "../gameLogic/helpers";

export const GameField = () => {

  const [firstNumber, setFirstNumber] = useState<NumbersObject | null >(null)
  const [shuffledNumbers, setShuffledNumbers] = useState<NumbersObject[] | []>([])

//when page loagds this code shuffles numbers 
useMemo(()=>{
  const numbers: NumbersObject[] = numbersArrayFor4x4
  setShuffledNumbers(shuffleArray([...numbers])) 
}, [])
  
const handleClick = (chosenNumber: NumbersObject) =>{
  const newArray = shuffledNumbers.slice()
  if(firstNumber){
    console.log(firstNumber, 'first')
    const firstValue = newArray.findIndex((item)=>item.id === firstNumber.id) 
    newArray[firstValue].condition = 'pending' 
    const secondValue = newArray.findIndex((item)=>item.id === chosenNumber.id) 
    newArray[secondValue].condition = 'pending' 
    console.log(newArray)
    setShuffledNumbers(newArray)
    if(firstNumber.number === chosenNumber.number){
      setTimeout(()=>{
        const firstValue = newArray.findIndex((item)=>item.id === firstNumber.id) 
        newArray[firstValue].condition = 'active' 
        const secondValue = newArray.findIndex((item)=>item.id === chosenNumber.id) 
        newArray[secondValue].condition = 'active' 
        setShuffledNumbers(newArray)
        setFirstNumber(null)
      },1000)
      
    }else{
      setTimeout(()=>{
        const firstValue = newArray.findIndex((item)=>item.id === firstNumber.id) 
        newArray[firstValue].condition = 'hidden' 
        const secondValue = newArray.findIndex((item)=>item.id === chosenNumber.id) 
        newArray[secondValue].condition = 'hidden' 
        setShuffledNumbers(newArray)
        setFirstNumber(null)
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
