import { shuffleArray } from "../gameLogic/helpers"
import { NumbersObject, fourBoard, numbersArrayFor4x4, numbersArrayFor6x6 } from "../gameLogic/numbersArray"
import { PlayerObject } from "../gameLogic/playerObject"

export const GameHeader = (props:{
  gridSize: string
  gameTheme: string
  setToggleMenu: (value: boolean) => void
  setGamePageSelected: (value: boolean) => void
  setTimer: (value: string) => void
  setShuffledNumbers: (value: NumbersObject[] | null) => void
  inGamePlayers: PlayerObject[]
  setInGamePlayers: (value: PlayerObject[]) => void
}) => {
  const newGame = () =>{
    props.setGamePageSelected(false)
   }
   
   const reset = () =>{
     props.setTimer('')
     props.setToggleMenu(false)
 
     const numbers: NumbersObject[] =
     props.gridSize === fourBoard ? numbersArrayFor4x4 :  numbersArrayFor6x6
     const restNumbers = numbers.slice()
     restNumbers.every((number)=> number.condition = 'hidden')
     props.setShuffledNumbers(shuffleArray([...restNumbers])) 
 
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
    className="
     w-[100vw] 
    flex 
    justify-between 
    pr-6 pl-6 pt-6 
    md:pr-[40px] md:pl-[40px] md:pt-[40px]
    lg:pr-[166px] lg:pl-[166px] lg:pt-[68px]
    ">
        <h1 
        className=" 
        font-bold 
        text-[24px]
        md:text-[40px]
        text-[#152938]"
        >memory</h1>
        
        <button 
        className=" w-[78px] h-[40px] 
         cursor-pointer
         bg-[#FDA214] text-[16px] 
         fonr-bold text-[#FCFCFC]
         rounded-full
         flex justify-center items-center md:hidden"
         onClick={()=>props.setToggleMenu(true)}
         >Menu</button>

         <div className="hidden md:flex gap-[40px]">
            <button 
            className="
              w-[128px] h-[52px]
              bg-[#FDA214] rounded-full
              text-[20px] text-[#FCFCFC] font-bold
             flex items-center justify-center"
             onClick={reset}
             >Restart</button>
             
             <button 
            className="
              w-[150px] h-[52px]
              bg-[#DFE7EC] rounded-full
              text-[20px] text-[#304859] font-bold
             flex items-center justify-center"
             onClick={newGame}
             >New Game</button>
         </div>
    </div>
  )
}
