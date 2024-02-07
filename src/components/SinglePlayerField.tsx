
import { useMemo, useState } from 'react'
import { PlayerObject } from '../gameLogic/playerObject'

export const SinglePlayerField = (props:{
    player: PlayerObject
}) => {
  const [timer, setTimer] = useState("")

  useMemo(()=>{
    const startTime: number = new Date().getTime()
    
    const updateTimer = () =>{
      const currentTime: number = new Date().getTime()

      const timeElapsed = currentTime - startTime

      const seconds: number = Math.floor(timeElapsed / 1000);
      const minutes: number = Math.floor(seconds / 60);


      const formattedTime: string = `${minutes % 60}:${seconds % 60}`;
      setTimer(formattedTime)
    }

    const timerInterval = setInterval(updateTimer, 1000)

    setTimeout(() => {
      clearInterval(timerInterval);
      console.log("Timer stopped.");
    }, 2000000);
  },[])
  

  return (
    <div className=' flex gap-6' key={props.player.id}>
        <div className=' w-[150px] h-[70px] lg:w-[250px] lg:h-[72px]
         bg-[#DFE7EC] rounded-lg mb-6 
         flex lg:flex-row lg:gap-[110px] flex-col items-center justify-center'>
          <p className=' text-[#7191A5] font-bold'>Time</p>
          <h2 className=' text-[#304859] 
          text-[24px] font-bold'>{timer}</h2>
        </div>

        <div className=' w-[150px] h-[70px] lg:w-[250px] lg:h-[72px]
         bg-[#DFE7EC] rounded-lg mb-6 
         flex lg:flex-row lg:gap-[110px] flex-col items-center justify-center'>
          <p className=' text-[#7191A5] font-bold'>Moves</p>
          <h2 className=' text-[#304859] 
          text-[24px] font-bold'>{props.player.score}</h2>
        </div>
    </div>
  )
}
