import { useState } from "react"
import { PlayerObject, playerFour, playerOne, playerThree, playerTwo } from "../gameLogic/playerObject";


export const usePlayersArray = () =>{
    const [inGamePlayers, setInGamePlayers] = useState<PlayerObject[]>([])

    const setPlayersArray = (playerQuantity: number) =>{
        let playerArray: PlayerObject[] = []
       
        if(playerQuantity === 1){
            playerArray = [playerOne]
        }
        if(playerQuantity === 2){
            playerArray = [playerOne, playerTwo]
        }
        if(playerQuantity === 3){
            playerArray = [playerOne, playerTwo, playerThree]
        }
        if(playerQuantity === 4){
            playerArray = [playerOne, playerTwo, playerThree, playerFour]
        }

        setInGamePlayers(playerArray)
    }

    return{
        inGamePlayers,
        setInGamePlayers,
        setPlayersArray
    }
}