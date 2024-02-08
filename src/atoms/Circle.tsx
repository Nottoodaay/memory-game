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
    'flex items-center justify-center',
    {
      "bg-[#304859]": props.item.condition === 'hidden',
      'bg-[#FDA214]': props.item.condition === 'pending',
      'bg-[#BCCED9]': props.item.condition === 'active',
    },
    "rounded-full"
    )}>
      <div className={clsx(
        "text-[40px] text-[#FCFCFC] font-bold",
        {
          "hidden": props.item.condition === 'hidden',
          'text-[#FCFCFC]': props.item.condition === 'active',
          'text-[40px]': props.gridSize === fourBoard,
          'text-[28px]': props.gridSize === sixBoard
        }
        )}>{props.item.number}</div>
     </div>
  )
}
