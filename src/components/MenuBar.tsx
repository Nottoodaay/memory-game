import { numbers, shuffleArray, shuffleIconsArray } from "../gameLogic/helpers"
import { IconObject, iconsArrayFor4x4, iconsArrayFor6x6 } from "../gameLogic/iconsArray"
import { NumbersObject, fourBoard, numbersArrayFor4x4, numbersArrayFor6x6 } from "../gameLogic/numbersArray"
import { PlayerObject } from "../gameLogic/playerObject"

export const MenuBar = (props:{
  gridSize: string
  gameTheme: string
  setToggleMenu: (value: boolean) => void
  setGamePageSelected: (value: boolean) => void
  setTimer: (value: string) => void
  setStartTime: (value: string) => void
  setShuffledNumbers: (value: NumbersObject[] | null) => void
  setShuffledIcons: (value: IconObject[] | null ) => void
  inGamePlayers: PlayerObject[]
  setInGamePlayers: (value: PlayerObject[]) => void
  setPlayersQuantity: (value: number)=> void
  setGridSize: (value: string) => void
  setTheme: (value: string) => void
}) => {
  const newGame = () =>{
    props.setGamePageSelected(false)
    props.setPlayersQuantity(1)
    props.setTheme(numbers)
    props.setGridSize(fourBoard)

    if(props.gameTheme === "numbers"){
      const numbers: NumbersObject[] =
       props.gridSize === fourBoard ? numbersArrayFor4x4 :  numbersArrayFor6x6
      const restNumbers = numbers.slice()
      restNumbers.every((number)=> number.condition = 'hidden')
      props.setShuffledNumbers(shuffleArray(restNumbers)) 
    }else if(props.gameTheme === 'icons'){
      const icons: IconObject[] = 
        props.gridSize === fourBoard ? iconsArrayFor4x4 : iconsArrayFor6x6
      const resetIcons = icons.slice()
      resetIcons.every((icon)=>icon.condition = 'hidden')
      props.setShuffledIcons(shuffleIconsArray(resetIcons))
    }

    const newPlayers = props.inGamePlayers.slice()
     newPlayers.every((player)=> player.score = 0)

    if(newPlayers.length > 1){
      if(newPlayers[0].condition !== 'active'){
        const activePlayer = newPlayers.findIndex((player)=>player.condition === 'active')
        newPlayers[activePlayer].condition = 'inactive'
      }
    
      newPlayers[0].condition = 'active'
    }
   }
  
  const reset = () =>{
    props.setStartTime(String(new Date().getTime()))
    props.setTimer("00.00")
    props.setToggleMenu(false)

    if(props.gameTheme === "numbers"){
     const numbers: NumbersObject[] =
      props.gridSize === fourBoard ? numbersArrayFor4x4 :  numbersArrayFor6x6
     const restNumbers = numbers.slice()
     restNumbers.every((number)=> number.condition = 'hidden')
     props.setShuffledNumbers(shuffleArray(restNumbers)) 
   }else if(props.gameTheme === 'icons'){
     const icons: IconObject[] = 
       props.gridSize === fourBoard ? iconsArrayFor4x4 : iconsArrayFor6x6
     const resetIcons = icons.slice()
     resetIcons.every((icon)=>icon.condition = 'hidden')
     props.setShuffledIcons(shuffleIconsArray(resetIcons))
   }

    const newPlayers = props.inGamePlayers.slice()
    newPlayers.every((player)=> player.score = 0)
    
    if(newPlayers.length > 1){
      if(newPlayers[0].condition !== 'active'){
        const activePlayer = newPlayers.findIndex((player)=>player.condition === 'active')
        newPlayers[activePlayer].condition = 'inactive'
      }
    
      newPlayers[0].condition = 'active'
    }
  }

  return (
    <div
     className=" fixed left-0 z-50 
     w-[100vw] h-[100vh] 
     flex items-center justify-center bg-black bg-opacity-50">

      <div 
      className=" w-[328px] h-[224px] bg-[#F2F2F2] 
      rounded-md flex flex-col gap-4 items-center justify-center">
          <button
          className=" w-[280px] h-[48px]
           bg-[#FDA214] rounded-full cursor-pointer
           flex items-center justify-center"
           onClick={reset}
           >Restart</button>
          <button 
          className=" w-[280px] h-[48px] 
           bg-[#DFE7EC] rounded-full cursor-pointer
           flex items-center justify-center"
           onClick={newGame}
           >New Game</button>
          <button 
          className=" w-[280px] h-[48px]
           bg-[#DFE7EC] rounded-full cursor-pointer
           flex items-center justify-center"
           onClick={()=>props.setToggleMenu(false)}
           >Resume Game</button>
      </div>
    </div>
  )
}
