import clsx from "clsx"
import { NumbersObject } from "../gameLogic/numbersArray"


export const Circle = (props:
  {
    item: NumbersObject

  }
  ) => {
    
  return (
    <div
    className={clsx(
    "w-[72px] md:w-[118px] h-[72px] md:h-[118px]",
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
