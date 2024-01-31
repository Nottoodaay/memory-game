import { GameField } from "../components/GameField"
import { GameHeader } from "../components/GameHeader"
import { PlayersBoard } from "../components/PlayersBoard"

export const GamePage = () => {
  return (
    <div 
    className=" 
     w-[100vw] h-[100vh] overflow-x-hidden
     bg-white 
     flex flex-col 
     gap-[80px] md:gap-[116px] lg:[85px]
     items-center">
        <GameHeader/>
        <GameField/>
        <PlayersBoard/>
    </div>
  )
}
