import { NumbersObject } from "./numbersArray";
import { PlayerObject, playerFour, playerOne, playerThree, playerTwo } from "./playerObject";

export const shuffleArray = (array: NumbersObject[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export let inGamePlayers: PlayerObject[] = []

export const playersArray = (playerQuantity: number) =>{
    if(playerQuantity === 1){
        inGamePlayers = [playerOne]
    }
    if(playerQuantity === 2){
        inGamePlayers = [playerOne, playerTwo]
    }
    if(playerQuantity === 3){
        inGamePlayers = [playerOne, playerTwo, playerThree]
    }
    if(playerQuantity === 4){
        inGamePlayers = [playerOne, playerTwo, playerThree, playerFour]
    }
    return inGamePlayers
}