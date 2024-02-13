import { HomePage } from "./pages/HomePage"
import { GamePage } from "./pages/GamePage"
import { useState } from "react"
import { fourBoard } from "./gameLogic/numbersArray"
import { numbers } from "./gameLogic/helpers"

function App() {
  const [playersQuantity, setPlayersQuantity] = useState(1)
  const [gridSize, setGridSize] = useState(fourBoard)
  const [gameTheme, setGameTheme] = useState(numbers)
  const [gamePageSelected, setGamePageSelected] = useState(false)

  return (
    <div className=" bg-[#152938] w-[100vw] h-[100vh]
     flex items-center justify-center">
      {
        gamePageSelected ? 
        <GamePage 
        gridSize={gridSize}
        gameTheme={gameTheme}
        playersQuantity={playersQuantity}/> 
        :  
        <HomePage 
        setGamePageSelected={setGamePageSelected}
        setTheme={setGameTheme} 
        setGridSize={setGridSize}
        setPlayersQuantity={setPlayersQuantity}/>
      }
     
      
    </div>
  )
}

export default App
