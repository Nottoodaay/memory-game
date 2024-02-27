import { useEffect, useMemo, useState } from "react"
import { GameField } from "../components/GameField"
import { GameHeader } from "../components/GameHeader"
import { PlayersBoard } from "../components/PlayersBoard"
import { usePlayersArray } from "../hooks/usePlayersArray"
import { MenuBar } from "../components/MenuBar"
import { Modal } from "../components/Modal"
import { icons, shuffleArray, shuffleIconsArray } from "../gameLogic/helpers"
import { IconsGameField } from "../components/IconsGameField"
import { NumbersObject, fourBoard, numbersArrayFor4x4, numbersArrayFor6x6 } from "../gameLogic/numbersArray"
import { IconObject, iconsArrayFor4x4, iconsArrayFor6x6 } from "../gameLogic/iconsArray"

export const GamePage = (props:{
  playersQuantity: number
  gridSize: string
  gameTheme: string
  setPlayersQuantity: (value: number)=> void
  setGamePageSelected: (value: boolean) => void
  setGridSize: (value: string) => void
  setTheme: (value: string) => void
}) => {
  const {inGamePlayers, setPlayersArray, setInGamePlayers} = usePlayersArray()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isGameEnd, setIsGameEnd] = useState(false)

  const [timer, setTimer] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState('')

  const [shuffledNumbers, setShuffledNumbers] = useState<NumbersObject[] | null>(null)
  const [shuffledIcons, setShuffledIcons] = useState<IconObject[] | null>(null)

  useMemo(()=>{
    setPlayersArray(props.playersQuantity)

    if(props.gameTheme === 'numbers'){
      const numbers: NumbersObject[] =
      props.gridSize === fourBoard ? numbersArrayFor4x4 :  numbersArrayFor6x6
      setShuffledNumbers(shuffleArray(numbers)) 
    }else if(props.gameTheme === "icons"){
       const icons: IconObject[] = props.gridSize === fourBoard ? iconsArrayFor4x4 : iconsArrayFor6x6
       setShuffledIcons(shuffleIconsArray(icons))
    }
    
  }, [])

useEffect(()=>{
  setEndTime(timer)
},[isGameEnd])

  return (
    <div 
    className=" 
     w-[100vw] h-[100vh] overflow-x-hidden
     bg-white 
     flex flex-col 
     gap-[80px] md:gap-[85px]
     items-center">
          <GameHeader 
          setStartTime={setStartTime}
          gameTheme={props.gameTheme}
          setTimer={setTimer}
          gridSize={props.gridSize}
          setShuffledNumbers={setShuffledNumbers}
          setToggleMenu={setToggleMenu} 
          setGamePageSelected={props.setGamePageSelected}
          inGamePlayers={inGamePlayers}
          setInGamePlayers={setInGamePlayers}
          setShuffledIcons={setShuffledIcons}
          setGridSize={props.setGridSize}
          setPlayersQuantity={props.setPlayersQuantity}
          setTheme={props.setTheme}
          />
          
          {
            props.gameTheme === "numbers" ? 
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
            shuffledNumbers={shuffledIcons}
            setIngamePlayers={setInGamePlayers}
            setIsGameEnd={setIsGameEnd}
            setShuffledNumbers={setShuffledIcons}
            />
            :
            null

          }
          
          <PlayersBoard 
          startTime={startTime}
          setStartTime={setStartTime}
          isGameEnd={isGameEnd} 
          timer={timer} 
          setTimer={setTimer} 
          inGamePlayers={inGamePlayers}/>

          {toggleMenu ? 
          <MenuBar 
          setStartTime={setTimer}
          gameTheme={props.gameTheme}
          setTimer={setTimer}
          gridSize={props.gridSize}
          setShuffledNumbers={setShuffledNumbers}
          setShuffledIcons={setShuffledIcons}
          setToggleMenu={setToggleMenu} 
          setGamePageSelected={props.setGamePageSelected}
          inGamePlayers={inGamePlayers}
          setInGamePlayers={setInGamePlayers}
          setGridSize={props.setGridSize}
          setPlayersQuantity={props.setPlayersQuantity}
          setTheme={props.setTheme}
          /> 
          : null }

          {
            isGameEnd && inGamePlayers.length > 1 ? 
            <Modal 
            setGamePageSelected={props.setGamePageSelected} 
            inGamePlayers={inGamePlayers} 
            setShuffledIcons={setShuffledIcons}
            setShuffledNumbers={setShuffledNumbers}
            setStartTime={setStartTime}
            setTimer={setTimer}
            setToggleMenu={setToggleMenu}
            gridSize={props.gridSize}
            gameTheme={props.gameTheme}
            setGridSize={props.setGridSize}
            setPlayersQuantity={props.setPlayersQuantity}
            setTheme={props.setTheme}
            /> : 
            isGameEnd && inGamePlayers.length === 1 ? 
              <Modal 
              setGamePageSelected={props.setGamePageSelected} 
              inGamePlayers={inGamePlayers} 
              setShuffledIcons={setShuffledIcons}
              setShuffledNumbers={setShuffledNumbers}
              setStartTime={setStartTime}
              setTimer={setTimer}
              setToggleMenu={setToggleMenu}
              gridSize={props.gridSize}
              gameTheme={props.gameTheme}
              time={endTime}
              setGridSize={props.setGridSize}
              setPlayersQuantity={props.setPlayersQuantity}
              setTheme={props.setTheme}/> 
            : null
          }
        
    </div>
  )
}
