import { useMemo } from "react"
import { PlayerObject } from "../gameLogic/playerObject"
import clsx from "clsx"

export const Modal = (props:{
  inGamePlayers: PlayerObject[]
  time?: string
}) => {
  const newArray = props.inGamePlayers.slice()
  useMemo(()=>{
    const winnerPlayer = newArray.reduce((maxPlayer, currentPlayer)=>{
      return currentPlayer.score > maxPlayer.score ? currentPlayer : maxPlayer
    },newArray[0])
    newArray[winnerPlayer.id].condition = 'winner'
  },[])

  console.log(props.time)
  const winner = newArray.filter((player)=>player.condition === 'winner')
  
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
            key={player.id}
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
                    >Player {player.id + 200} winner!</h3>
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
              key={player.id}
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
              key={player.id}
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
          <div className=" flex sm:flex-col md:flex-row gap-[14px]">
            <button 
            className="
              w-[264px] h-[52px]
              bg-[#FDA214] rounded-full
              text-[20px] text-[#FCFCFC] font-bold
             flex items-center justify-center">Restart</button>
             
             <button 
            className="
              w-[264px] h-[52px]
              bg-[#DFE7EC] rounded-full
              text-[20px] text-[#304859] font-bold
             flex items-center justify-center">New Game</button>
          </div>
        </div>
     </div>
  )
}
