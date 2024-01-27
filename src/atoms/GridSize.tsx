import clsx from "clsx"
import { useState } from "react"

export const GridSize = () => {
    const [active, setActive] = useState('4x4')

    const handleClick = (boardSize: string) =>{
        setActive(boardSize)
    }

  return (
    <div>
        <h2 className="  pb-[11px] md:pb-4 
        font-bold text-[#7191A5] text-[15px] md:text-[20px]">Grid Size</h2>
        <div className="flex gap-[10px]">
            <div className={clsx(
            'cursor-pointer w-[134px] md:w-[256px] h-[40px] md:h-[52px]',
            {
             'bg-[#304859]': active === '4x4',
             'bg-[#BCCED9]': active === '6x6',
            },
            'rounded-full',  
            'items-center flex justify-center',  
            ' text-[16px] md:text-[26px] text-[#FCFCFC] font-bold')}
            onClick={()=>handleClick('4x4')}
            >4x4</div>

            <div className={clsx(
            'cursor-pointer w-[134px] md:w-[256px] h-[40px] md:h-[52px]',
            {
             'bg-[#BCCED9]': active === '4x4',
             'bg-[#304859]': active === '6x6',
            },
            'rounded-full',  
            'items-center flex justify-center',  
            'text-[16px] md:text-[26px] text-[#FCFCFC] font-bold')}
            onClick={()=>handleClick('6x6')}
            >6x6</div>
        </div>
    </div>
  )
}
