import { useMemo, useState } from "react"
import { GameField } from "../components/GameField"
import { GameHeader } from "../components/GameHeader"
import { PlayersBoard } from "../components/PlayersBoard"
import { usePlayersArray } from "../hooks/usePlayersArray"
import { MenuBar } from "../components/MenuBar"
import { Modal } from "../components/Modal"
import { icons, numbers, shuffleArray } from "../gameLogic/helpers"
import { IconsGameField } from "../components/IconsGameField"
import { NumbersObject, fourBoard, numbersArrayFor4x4, numbersArrayFor6x6 } from "../gameLogic/numbersArray"

export const GamePage = (props:{
  playersQuantity: number
  gridSize: string
  gameTheme: string
  setGamePageSelected: (value: boolean) => void
}) => {
  const {inGamePlayers, setPlayersArray, setInGamePlayers} = usePlayersArray()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isGameEnd, setIsGameEnd] = useState(false)

  const [timer, setTimer] = useState("")
  const [shuffledNumbers, setShuffledNumbers] = useState<NumbersObject[] | null>(null)

  useMemo(()=>{
    setPlayersArray(props.playersQuantity)

    const numbers: NumbersObject[] =
     props.gridSize === fourBoard ? numbersArrayFor4x4 :  numbersArrayFor6x6
    setShuffledNumbers(shuffleArray([...numbers])) 
  }, [])

  return (
    <div 
    className=" 
     w-[100vw] h-[100vh] overflow-x-hidden
     bg-white 
     flex flex-col 
     gap-[80px] md:gap-[85px]
     items-center">
          <GameHeader 
          gameTheme={props.gameTheme}
          setTimer={setTimer}
          gridSize={props.gridSize}
          setShuffledNumbers={setShuffledNumbers}
          setToggleMenu={setToggleMenu} 
          setGamePageSelected={props.setGamePageSelected}
          inGamePlayers={inGamePlayers}
          setInGamePlayers={setInGamePlayers}/>
          
          {
            props.gameTheme === numbers ? 
            <GameField
             gridSize={props.gridSize}
             inGamePlayers={inGamePlayers} 
             setIngamePlayers={setInGamePlayers} 
             setIsGameEnd={setIsGameEnd}
             shuffledNumbers={shuffledNumbers}
             setShuffledNumbers={setShuffledNumbers}
            />
            :
            props.gameTheme === icons ?
            <IconsGameField 
            gridSize={props.gridSize}
            inGamePlayers={inGamePlayers}
            setIngamePlayers={setInGamePlayers}
            setIsGameEnd={setIsGameEnd}
            />
            :
            null

          }
          
          <PlayersBoard 
          isGameEnd={isGameEnd} 
          timer={timer} 
          setTimer={setTimer} 
          inGamePlayers={inGamePlayers}/>

          {toggleMenu ? 
          <MenuBar 
          gameTheme={props.gameTheme}
          setTimer={setTimer}
          gridSize={props.gridSize}
          setShuffledNumbers={setShuffledNumbers}
          setToggleMenu={setToggleMenu} 
          setGamePageSelected={props.setGamePageSelected}
          inGamePlayers={inGamePlayers}
          setInGamePlayers={setInGamePlayers}
          /> 
          : null }

          {
            isGameEnd && inGamePlayers.length > 1 ? <Modal inGamePlayers={inGamePlayers}/> : 
            isGameEnd && inGamePlayers.length === 1 ? <Modal inGamePlayers={inGamePlayers} time={timer} /> 
            : null
          }
        
    </div>
  )
}
