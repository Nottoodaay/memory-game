import clsx from "clsx"
import { NumbersObject, fourBoard, sixBoard } from "../gameLogic/numbersArray"
import { IconObject } from "../gameLogic/iconsArray"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const Circle = (props:
  {
    numberObject?: NumbersObject
    iconObject?: IconObject
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
      "bg-[#304859]": props.numberObject?.condition === 'hidden' || props.iconObject?.condition === 'hidden',
      'bg-[#FDA214]': props.numberObject?.condition === 'pending' || props.iconObject?.condition === 'pending',
      'bg-[#BCCED9]': props.numberObject?.condition === 'active' || props.iconObject?.condition === 'active ',
    },
    "rounded-full"
    )}>
      <div>{props.numberObject?.number}</div>
      <div className={clsx(
        "text-[40px] text-[#FCFCFC] font-bold",
        {
          "hidden": props.numberObject?.condition === 'hidden' || props.iconObject?.condition === 'hidden',
          'text-[#FCFCFC]': props.numberObject?.condition === 'active' || props.iconObject?.condition === 'active ',
          'text-[40px]': props.gridSize === fourBoard,
          'text-[28px]': props.gridSize === sixBoard
        }
        )}>{
        props.iconObject ? <FontAwesomeIcon icon={props.iconObject?.icon} /> : props.numberObject?.number
        }</div>
     </div>
  )
}
