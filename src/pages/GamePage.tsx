import { useEffect, useState } from "react"
import { GameField } from "../components/GameField"
import { GameHeader } from "../components/GameHeader"
import { PlayersBoard } from "../components/PlayersBoard"
import { usePlayersArray } from "../hooks/usePlayersArray"
import { MenuBar } from "../components/MenuBar"
import { Modal } from "../components/Modal"
import { numbers } from "../gameLogic/helpers"
import { IconsGameField } from "../components/IconsGameField"

export const GamePage = (props:{
  playersQuantity: number
  gridSize: string
  gameTheme: string
  setGamePageSelected: (value: boolean) => void
}) => {
  const {inGamePlayers, setPlayersArray, setInGamePlayers} = usePlayersArray()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isGameEnd, setIsGameEnd] = useState(false)

  useEffect(()=>{
    setPlayersArray(props.playersQuantity)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [timer, setTimer] = useState("")
  
  return (
    <div 
    className=" 
     w-[100vw] h-[100vh] overflow-x-hidden
     bg-white 
     flex flex-col 
     gap-[80px] md:gap-[85px]
     items-center">
          <GameHeader setToggleMenu={setToggleMenu}/>
          
          {
            props.gameTheme === numbers ? 
            <GameField
             gridSize={props.gridSize}
             inGamePlayers={inGamePlayers} 
             setIngamePlayers={setInGamePlayers} 
             setIsGameEnd={setIsGameEnd}
            />
            :
            <IconsGameField 
            gridSize={props.gridSize}
            inGamePlayers={inGamePlayers}
            setIngamePlayers={setInGamePlayers}
            setIsGameEnd={setIsGameEnd}
            />

          }
          
          <PlayersBoard 
          isGameEnd={isGameEnd} 
          timer={timer} 
          setTimer={setTimer} 
          inGamePlayers={inGamePlayers}/>

          {toggleMenu ? 
          <MenuBar 
          setToggleMenu={setToggleMenu} 
          setGamePageSelected={props.setGamePageSelected}/> 
          : null }

          {
            isGameEnd && inGamePlayers.length > 1 ? <Modal inGamePlayers={inGamePlayers}/> : 
            isGameEnd && inGamePlayers.length === 1 ? <Modal inGamePlayers={inGamePlayers} time={timer} /> 
            : null
          }
        
    </div>
  )
}
