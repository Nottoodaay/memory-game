import { useMemo } from "react"
import { PlayerObject } from "../gameLogic/playerObject"
import clsx from "clsx"
import { NumbersObject, fourBoard, numbersArrayFor4x4, numbersArrayFor6x6 } from "../gameLogic/numbersArray"
import { IconObject, iconsArrayFor4x4, iconsArrayFor6x6 } from "../gameLogic/iconsArray"
import { numbers, shuffleArray, shuffleIconsArray } from "../gameLogic/helpers"

export const Modal = (props:{
  inGamePlayers: PlayerObject[]
  time?: string
  gridSize: string
  gameTheme: string
  setToggleMenu: (value: boolean) => void
  setGamePageSelected: (value: boolean) => void
  setTimer: (value: string) => void
  setStartTime: (value: string) => void
  setShuffledNumbers: (value: NumbersObject[] | null) => void
  setShuffledIcons: (value: IconObject[] | null ) => void
  setPlayersQuantity: (value: number)=> void
  setGridSize: (value: string) => void
  setTheme: (value: string) => void
  
}) => {
  const newArray = props.inGamePlayers.slice()
  useMemo(()=>{
    const winnerPlayer = newArray.reduce((maxPlayer, currentPlayer)=>{
      return currentPlayer.score > maxPlayer.score ? currentPlayer : maxPlayer
    },newArray[0])
    newArray[winnerPlayer.id].condition = 'winner'
  },[])

  const winner = newArray.filter((player)=>player.condition === 'winner')

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
    flex items-center justify-center
  bg-black bg-opacity-50 rounded-md"
     >
        <div 
        className=" w-[328px] md:w-[654px] h-[448px] md:h-[702px]
         bg-[#F2F2F2] 
         flex flex-col 
         gap-4 md:gap-[40px] items-center justify-center rounded-md"
        >
          <div className=" flex flex-col items-center">
            <h1 className=" text-[24px] md:text-[48px] text-[#152938] font-bold"
            >Player {winner.map((player)=>player.id + 1)} Wins!</h1>
            <p className=" text-sm text-[#7191A5] font-bold">Game over! Here are the results…</p>
          </div>
          <div className=" flex flex-col gap-2">
            { newArray.length > 1 ? 
            newArray.map((player)=> 
            <div 
            key={player.id + 100}
            className={clsx(
              " w-[290px] md:w-[542px] h-[48px] md:h-[72px]",
              {
                "bg-[#DFE7EC]": player.condition !== 'winner',
                "bg-[#152938]": player.condition === 'winner'
              },
              "rounded-md flex items-center justify-between p-4")}>
                {player.condition === 'winner'? 
                  <>
                    <h3 className=" text-[#FCFCFC] font-bold"
                    >Player {player.id} winner!</h3>
                    <h2 className=" text-[#FCFCFC] text-[20px] font-bold"
                    >{player.score} Score</h2>
                  </>
                : 
                <>
                  <h3 className=" text-[#7191A5] font-bold"
                  >Player {player.id + 1}</h3>
                  <h2 className=" text-[#304859] text-[20px] font-bold"
                  >{player.score} Score</h2>
                </>
              }
              </div>)
              : 
              newArray.map((player)=> 
              <>
              <div 
              key={player.id + 2000}
              className="
              w-[290px] md:w-[542px] h-[48px] md:h-[72px]
              bg-[#DFE7EC] rounded-md 
              flex gap-4 items-center justify-between p-4">
                  <>
                    <h3 className=" text-[#7191A5] font-bold"
                    >Time Elapsed</h3>
                    <h2 className=" text-[#304859] text-[20px] font-bold"
                    >{props.time}</h2>
                  </>
              </div>

              <div 
              key={player.id + 200}
              className="
              w-[290px] md:w-[542px] h-[48px] md:h-[72px]
              bg-[#DFE7EC] rounded-md 
              flex gap-4 items-center justify-between p-4">
                  <>
                    <h3 className=" text-[#7191A5] font-bold"
                    >Moves Taken</h3>
                    <h2 className=" text-[#304859] text-[20px] font-bold"
                    >{player.score} Moves</h2>
                  </>
              </div>
            </>
            )}
          </div>
          <div className=" flex flex-col md:flex-row gap-[14px]">
            <button 
            className="
              w-[264px] h-[52px]
              bg-[#FDA214] rounded-full
              text-[20px] text-[#FCFCFC] font-bold
             flex items-center justify-center" 
             onClick={reset}
             >Restart</button>
             
             <button 
            className="
              w-[264px] h-[52px]
              bg-[#DFE7EC] rounded-full
              text-[20px] text-[#304859] font-bold
             flex items-center justify-center"
             onClick={newGame}
             >New Game</button>
          </div>
        </div>
     </div>
  )
}
