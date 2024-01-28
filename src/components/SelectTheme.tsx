
import clsx from "clsx"
import { useState } from "react"

export const SelectTheme = () => {
  const [active, setActive] = useState('numbers')

    const handleClick = (boardSize: string) =>{
        setActive(boardSize)
    }
  return (
    <div>
        <h2 className=" pb-[11px] md:pb-4 
        font-bold text-[#7191A5] text-[15px] md:text-[20px]">Select Theme</h2>
        <div className="flex gap-[10px]">
            <div className={clsx( 
            "cursor-pointer w-[134px] md:w-[256px] h-[40px] md:h-[52px]",
            {
              "bg-[#304859]" : active === 'numbers',
              "bg-[#BCCED9] hover:bg-[#6395B8] " : active === 'icons',
            },
            "rounded-full",
           " items-center flex justify-center",
            "text-[16px] md:text-[26px] text-[#FCFCFC] font-bold")}
            onClick={()=>handleClick('numbers')}
            >Numbers</div>
            <div className={clsx( 
              "cursor-pointer w-[134px] md:w-[256px] h-[40px] md:h-[52px]",
              {
                "bg-[#BCCED9] hover:bg-[#6395B8] ": active === 'numbers',
                "bg-[#304859]" : active === 'icons'
              },
              "rounded-full",
              "items-center flex justify-center",
              "text-[16px] md:text-[26px] text-[#FCFCFC] font-bold")}
              onClick={()=>handleClick('icons')}
              >Icons</div>
        </div>
    </div>
  )
}
