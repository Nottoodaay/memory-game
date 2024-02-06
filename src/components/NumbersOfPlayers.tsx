import { useEffect, useState } from "react"

import clsx from "clsx"

export const NumbersOfPlayers = (props:{
    setPlayersQuantity: (value: number)=> void
}) => {
    const [numberOfPayers, setNumberOfPlayers] = useState(1) 

    const handleClick = (number: number) =>{
        setNumberOfPlayers(number)
    }

    useEffect(()=>{
        props.setPlayersQuantity(numberOfPayers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[numberOfPayers])

  return (
    <div>
        <h2 className=" pb-[11px] md:pb-4  
        font-bold text-[#7191A5] text-[15px] md:text-[20px]">Numbers of Players</h2>
        <div className=" flex gap-[10px]">
            <div className={clsx(
            "cursor-pointer w-[64px] md:w-[120px] h-[40px] md:h-[52px]", 
            {
                "bg-[#304859]": numberOfPayers === 1,
                'bg-[#BCCED9] hover:bg-[#6395B8]': numberOfPayers !== 1
            },
            "rounded-full items-center flex justify-center ",
            "text-[16px] md:text-[26px] text-[#FCFCFC] font-bold")}
            onClick={()=> handleClick(1)}
            >1</div>
            <div className={clsx(
            "cursor-pointer w-[64px] md:w-[120px] h-[40px] md:h-[52px]",
            {
                "bg-[#304859]": numberOfPayers === 2,
                'bg-[#BCCED9] hover:bg-[#6395B8]': numberOfPayers !== 2
            },
            "rounded-full items-center flex justify-center ",
            "text-[16px] md:text-[26px] text-[#FCFCFC] font-bold")}
            onClick={()=>handleClick(2)}
            >2</div>
            <div className={clsx(
            "cursor-pointer w-[64px] md:w-[120px] h-[40px] md:h-[52px]",
            {
                "bg-[#304859]": numberOfPayers === 3,
                'bg-[#BCCED9] hover:bg-[#6395B8]': numberOfPayers !== 3
            },
            "rounded-full items-center flex justify-center ",
            "text-[16px] md:text-[26px] text-[#FCFCFC] font-bold")}
            onClick={()=>handleClick(3)}
            >3</div>
            <div className={clsx(
           "cursor-pointer w-[64px] md:w-[120px] h-[40px] md:h-[52px]",
            {
                "bg-[#304859]": numberOfPayers === 4,
                'bg-[#BCCED9] hover:bg-[#6395B8]': numberOfPayers !== 4
            },
            "rounded-full items-center flex justify-center ",
            "text-[16px] md:text-[26px] text-[#FCFCFC] font-bold")}
            onClick={()=>handleClick(4)}
            >4</div>
        </div>
  </div>
  )
}
