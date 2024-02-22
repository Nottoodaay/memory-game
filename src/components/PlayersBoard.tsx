import { Players } from "../atoms/Players"
import { PlayerObject } from "../gameLogic/playerObject"
import { SinglePlayerField } from "./SinglePlayerField"

export const PlayersBoard = (props:{
  inGamePlayers: PlayerObject[]
  timer: string
  setTimer: (value: string) => void
  isGameEnd: boolean
  setStartTime: (value: string) => void
  startTime: string
}) => {
  
  return (
    <div className=" flex gap-[24px]">
        {
        props.inGamePlayers.length > 1 ?
          props.inGamePlayers.map((player)=> <Players key={`${player.id}p`} player={player}/>)
          :
          props.inGamePlayers.map((player)=>
           <SinglePlayerField 
            setStartTime={props.setStartTime}
            startTime={props.startTime}
            isGameEnd={props.isGameEnd} 
            timer={props.timer} 
            setTimer={props.setTimer} 
            key={`${player.id}`}
             player={player}/>)
        }
    </div>
  )
}
