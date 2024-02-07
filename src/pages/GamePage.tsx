import { useEffect } from "react"
import { GameField } from "../components/GameField"
import { GameHeader } from "../components/GameHeader"
import { PlayersBoard } from "../components/PlayersBoard"
import { usePlayersArray } from "../hooks/usePlayersArray"

export const GamePage = (props:{
  playersQuantity: number
}) => {
  const {inGamePlayers, setPlayersArray, setInGamePlayers} = usePlayersArray()
  
  useEffect(()=>{
    setPlayersArray(props.playersQuantity)
  }, [])
  
  return (
    <div 
    className=" 
     w-[100vw] h-[100vh] overflow-x-hidden
     bg-white 
     flex flex-col 
     gap-[80px] md:gap-[116px] lg:gap-[85px]
     items-center">
        <GameHeader/>
        <GameField inGamePlayers={inGamePlayers} setIngamePlayers={setInGamePlayers} />
        <PlayersBoard inGamePlayers={inGamePlayers}/>
    </div>
  )
}
