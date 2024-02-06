import { HomePage } from "./pages/HomePage"
import { GamePage } from "./pages/GamePage"
import { useState } from "react"

function App() {
  const [playersQuantity, setPlayersQuantity] = useState(1)
  // todo add grid size 
  const [gamePageSelected, setGamePageSelected] = useState(false)

  console.log(playersQuantity)
  return (
    <div className=" bg-[#152938] w-[100vw] h-[100vh]
     flex items-center justify-center">
      {
        gamePageSelected ? <GamePage playersQuantity={playersQuantity}/> 
        :  
        <HomePage 
        setGamePageSelected={setGamePageSelected} 
        setPlayersQuantity={setPlayersQuantity}/>
      }
     
      
    </div>
  )
}

export default App
