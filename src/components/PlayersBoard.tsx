import { Players } from "../atoms/Players"
import { PlayerObject } from "../gameLogic/playerObject"
import { SinglePlayerField } from "./SinglePlayerField"

export const PlayersBoard = (props:{
  inGamePlayers: PlayerObject[]
}) => {
  
  return (
    <div className=" flex gap-[24px]">
        {props.inGamePlayers.length > 1 ?
          props.inGamePlayers.map((player)=> <Players key={`${player.id}p`} player={player}/>)
          :
          props.inGamePlayers.map((player)=> <SinglePlayerField key={`${player.id}`} player={player}/>)
        }
    </div>
  )
}
