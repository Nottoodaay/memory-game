import { GridSize } from "../atoms/GridSize"
import { NumbersOfPlayers } from "../atoms/NumbersOfPlayers"
import { SelectTheme } from "../atoms/SelectTheme"

export const DisplayPropertiesMenu = () => {
  
  return (
    <div className=" flex flex-col items-center gap-[45px]">
        <h1 className=" text-3xl text-[#FCFCFC] font-bold 
          md:text-[40px]
        ">memory</h1>
        <div className="w-[328px] h-[386px] rounded-lg md:w-[654px] md:h-[560px]
         bg-[#FCFCFC] flex flex-col gap-6 md:gap-8 items-center p-6">
            <SelectTheme/>
            <NumbersOfPlayers/>
            <GridSize/>
            <button className=" w-[290px] md:w-[540px] h-[48px] md:h-[70px]
            text-[18px] md:text-[32px] text-[#FCFCFC] font-bold 
            rounded-full bg-[#FDA214] flex items-center justify-center">
              Start Game
            </button>
        </div>
    </div>
  )
}
