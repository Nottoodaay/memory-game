import { useMemo, useState } from "react";
import { Circle } from "../atoms/Circle";
import { NumbersObject, numbersArrayFor4x4 } from "../gameLogic/numbersArray";

export const GameField = () => {

  const [firstNumber, setFirstNumber] = useState<NumbersObject>({id:0, number:0, condition:''})
  const [secondNumber, setSecondNumber] = useState<NumbersObject>({id:0, number:0, condition:''})
  const [shuffledNumbers, setShuffledNumbers] = useState<NumbersObject[] | []>([])

useMemo(()=>{
  const shuffleArray = (array: NumbersObject[]) => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    
  const numbers: NumbersObject[] = numbersArrayFor4x4
  setShuffledNumbers(shuffleArray([...numbers])) 
}, [])



useMemo(()=>{
  const newArray = (id: number, itemToAdd: NumbersObject) =>{  
        setShuffledNumbers((prevShuffledNumbers)=>{
          const newShuffledNumbers = prevShuffledNumbers.map((item)=> item.id !== id ? item : itemToAdd)
          return [...newShuffledNumbers]
        })
      }
  if(firstNumber.condition === 'active'){
    newArray(firstNumber.id, firstNumber)
    setFirstNumber({id:0, number:0, condition:''})
  }if(secondNumber.condition === 'active'){
     newArray(secondNumber.id, secondNumber)
     setSecondNumber({id:0, number:0, condition:''})
  }
}, [firstNumber.condition, secondNumber.condition])


useMemo(() => {
    const checkNumbers = (x: number, y: number) => {
      if (x === y) {
        setFirstNumber((prev) => ({ ...prev, condition: 'active' }))
        setSecondNumber((prev) => ({ ...prev, condition: 'active' }))
      } else {
        setFirstNumber((prev) => ({ ...prev, condition: 'hidden' }))
        setSecondNumber((prev) => ({ ...prev, condition: 'hidden' }))
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
