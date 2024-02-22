
import { useEffect, useState } from 'react'
import { PlayerObject } from '../gameLogic/playerObject'

export const SinglePlayerField = (props:{
    player: PlayerObject
    timer: string
    setTimer: (value: string) => void
    isGameEnd: boolean
    setStartTime: (value: string) => void
    startTime: string
}) => {
  const [timerInterval, setTimerInterval] = useState<number | null>(null)

  useEffect(() => {
    if (props.isGameEnd && timerInterval !== null) {
      clearInterval(timerInterval); 
      setTimerInterval(null);
      props.setTimer('');
    } else {
      const updateTimer = () => {
        const currentTime: number = new Date().getTime();
        const timeElapsed: number = currentTime - Number(props.startTime);
        const seconds: number = Math.floor(timeElapsed / 1000);
        const minutes: number = Math.floor(seconds / 60);
        const formattedTime: string =`${minutes % 60}:${seconds % 60}`;
        props.setTimer(formattedTime);
      };


      if (timerInterval !== null) {
        clearInterval(timerInterval);
      }
      props.setStartTime(String(new Date().getTime()));
      updateTimer();

      const intervalId = setInterval(updateTimer, 1000);
      setTimerInterval(intervalId);

      return () => clearInterval(intervalId);
    }
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
