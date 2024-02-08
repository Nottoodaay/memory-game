import clsx from "clsx"
import { NumbersObject, fourBoard, sixBoard } from "../gameLogic/numbersArray"


export const Circle = (props:
  {
    item: NumbersObject
    gridSize: string
  }
  ) => {
    
  return (
    <div
    className={clsx(
    {
      "w-[72px] md:w-[118px] h-[72px] md:h-[118px]" : props.gridSize === fourBoard,
      "w-[46px] md:w-[82px] h-[46px] md:h-[82px]" : props.gridSize === sixBoard
    },
    "cursor-pointer",
    {
      "bg-[#304859]": props.item.condition === 'hidden',
      'bg-[#FDA214]': props.item.condition === 'pending',
      'bg-[#BCCED9]': props.item.condition === 'active',
    },
    "rounded-full"
    )}
     >{props.item.number}</div>
  )
}
