
import { useEffect } from 'react'
import { PlayerObject } from '../gameLogic/playerObject'

export const SinglePlayerField = (props:{
    player: PlayerObject
    timer: string
    setTimer: (value: string) => void
    isGameEnd: boolean
}) => {

  useEffect(() => {
    let timerInterval: number | null = null;
    const startTime = new Date().getTime();
  
    const updateTimer = () => {
      const currentTime = new Date().getTime();
      const timeElapsed = currentTime - startTime;
      const seconds = Math.floor(timeElapsed / 1000);
      const minutes = Math.floor(seconds / 60);
      const formattedTime = `${minutes % 60}:${seconds % 60}`;
  
      if (props.isGameEnd) {
        clearInterval(timerInterval || 0); 
      } else {
        props.setTimer(formattedTime);
      }
    };
  
    updateTimer();
  
    timerInterval = setInterval(updateTimer, 1000);
  
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [props.isGameEnd]);
  

  return (
    <div className=' flex gap-6' key={props.player.id + 5000}>
        <div className=' w-[150px] h-[70px] lg:w-[250px] lg:h-[72px]
         bg-[#DFE7EC] rounded-lg mb-6 
         flex lg:flex-row lg:gap-[110px] flex-col items-center justify-center'>
          <p className=' text-[#7191A5] font-bold'>Time</p>
          <h2 className=' text-[#304859] 
          text-[24px] font-bold'>{props.timer}</h2>
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
