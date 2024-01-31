import { useMemo, useState } from "react";
import { Circle } from "../atoms/Circle";
import { NumbersObject, numbersArrayFor4x4 } from "../gameLogic/numbersArray";
import { shuffleArray } from "../gameLogic/helpers";

export const GameField = () => {

  const [firstNumber, setFirstNumber] = useState<NumbersObject>({id:0, number:0, condition:''})
  const [secondNumber, setSecondNumber] = useState<NumbersObject>({id:0, number:0, condition:''})
  const [shuffledNumbers, setShuffledNumbers] = useState<NumbersObject[] | []>([])

//when page loagds this code shuffles numbers 
useMemo(()=>{
  const numbers: NumbersObject[] = numbersArrayFor4x4
  setShuffledNumbers(shuffleArray([...numbers])) 
}, [])


// this useMemo hook updates old shuffle array items only when number condition is active
useMemo(()=>{
  const updatedArray = (id: number, itemToAdd: NumbersObject) =>{  
      setShuffledNumbers((prevShuffledNumbers)=>{
        const newShuffledNumbers = prevShuffledNumbers.map((item)=> item.id !== id ? item : itemToAdd)
        return [...newShuffledNumbers]
    })
  }

  if(firstNumber.condition === 'active'){
    updatedArray(firstNumber.id, firstNumber)
    setFirstNumber({id:0, number:0, condition:''})
    
  }if(secondNumber.condition === 'active'){
     updatedArray(secondNumber.id, secondNumber)
     setSecondNumber({id:0, number:0, condition:''})
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [firstNumber.condition, secondNumber.condition])


// this hook checks if x and y number is same if it is their condition become active 
useMemo(() => {
    const checkNumbers = (x: number, y: number) => {
      if (x === y) {
        setFirstNumber((prev) => ({ ...prev, condition: 'active' }))
        setSecondNumber((prev) => ({ ...prev, condition: 'active' }))
      } else {
        setFirstNumber({id:0, number:0, condition:''})
        setSecondNumber({id:0, number:0, condition:''})
      }
    }

    if (firstNumber.id !== 0 && secondNumber.id !== 0) {
      checkNumbers(firstNumber.number, secondNumber.number)
    }
  }, [firstNumber.id, secondNumber.id, 
    firstNumber.number, secondNumber.number]);

  

  return (
    <div 
    className="
    grid grid-flow-col grid-cols-4 grid-rows-4
    gap-[12px] md:gap-[20px]">
        {shuffledNumbers.map((item)=> 
        <div key={item.id}>
          <Circle 
          item={item}
          firstNumber={firstNumber}
          setFirstNumber={setFirstNumber}
          setSecondNumber={setSecondNumber}
          />
        </div> )}
    </div>
  )
}
