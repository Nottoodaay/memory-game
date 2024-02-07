import { PlayerObject } from "../gameLogic/playerObject"
import { clsx } from "clsx"

export const Players = (props:{player: PlayerObject}) => {
  
  return (
    <div 
    className={clsx(
    "w-[64px] md:w-[164px] lg:w-[255px]",
   " h-[70px] md:h-[80px] lg:h-[72px]",
     "md:p-4", 
    "mb-[24px] md:mb-[38px] lg:mb-[74px]",
     {
      "bg-[#DFE7EC]": props.player.condition === 'inactive',
      "bg-[#FDA214]": props.player.condition === 'active'
     }, 
     "rounded-lg ",
     "flex flex-col lg:flex-row",
     "justify-center md:justify-start lg:justify-between",
     "md:items-start items-center")}
    >
      <p className={clsx( 
       "text-[15px]",
       {
        "text-[#7191A5]": props.player.condition === 'inactive',
        'text-[#DFE7EC]': props.player.condition === 'active'
      },
       "font-bold")}
       >{`P${props.player.id}`}</p>
      <h2 className={clsx(
      "text-[24px]" ,
      {
        "text-[#304859]": props.player.condition === 'inactive',
        'text-[#DFE7EC]': props.player.condition === 'active'
      }, 
      "font-bold"
      )}
      >{props.player.score}</h2>
    </div>
  )
}
