import clsx from "clsx"
import { NumbersObject } from "../gameLogic/numbersArray"


export const Circle = (props:
  {
    item: NumbersObject
    firstNumber: NumbersObject
    setFirstNumber: (value: NumbersObject) => void
    setSecondNumber: (value: NumbersObject) => void
  }
  ) => {
    const handleClick = () =>{
      if(props.firstNumber.id === props.item.id){
        return
      }
      
      if(props.firstNumber.id !== 0){
        props.setSecondNumber(props.item)
      }else{
        props.setFirstNumber(props.item)
      }
    }
    
  return (
    <div
    className={clsx(
    "w-[72px] md:w-[118px] h-[72px] md:h-[118px]",
    "cursor-pointer",
    {
      "bg-[#304859]": props.item.condition === 'hidden',
      'bg-[#BCCED9]': props.item.condition === 'active',
    },
    "rounded-full"
    )}
     onClick={handleClick}
     >{props.item.number}</div>
  )
}
