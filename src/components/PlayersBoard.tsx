import { Players } from "../atoms/Players"
import { playersArray } from "../gameLogic/helpers"
export const PlayersBoard = (props:{
  playersQuantity: number
}) => {
  const inGamePlayers = playersArray(props.playersQuantity)
  
  return (
    <div className=" flex gap-[24px]">
        {
          inGamePlayers.map((player)=> <Players key={`${player.id}p`} playerNumber={player.id}/>)
        }
    </div>
  )
}
