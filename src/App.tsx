import { HomePage } from "./pages/HomePage"
import { GamePage } from "./pages/GamePage"
import { useState } from "react"
import { fourBoard } from "./gameLogic/numbersArray"

function App() {
  const [playersQuantity, setPlayersQuantity] = useState(1)
  const [gridSize, setGridSize] = useState(fourBoard)
  const [gamePageSelected, setGamePageSelected] = useState(false)

  return (
    <div className=" bg-[#152938] w-[100vw] h-[100vh]
     flex items-center justify-center">
      {
        gamePageSelected ? 
        <GamePage 
        gridSize={gridSize}
        playersQuantity={playersQuantity}/> 
        :  
        <HomePage 
        setGamePageSelected={setGamePageSelected} 
        setGridSize={setGridSize}
        setPlayersQuantity={setPlayersQuantity}/>
      }
     
      
    </div>
  )
}

export default App
