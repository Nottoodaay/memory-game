import { useMemo, useState } from "react"
import { IconObject, iconsArrayFor4x4, iconsArrayFor6x6 } from "../gameLogic/iconsArray"
import { shuffleIconsArray } from "../gameLogic/helpers"
import { PlayerObject } from "../gameLogic/playerObject"
import clsx from "clsx"
import { fourBoard, sixBoard } from "../gameLogic/numbersArray"
import { Circle } from "../atoms/Circle"

export const IconsGameField = (props:{
    inGamePlayers: PlayerObject[]
    gridSize: string
    setIsGameEnd: (value: boolean) => void
    setIngamePlayers: (value: PlayerObject[])=> void
}) => {
    const [firstIcon, setFirstIcon] = useState<IconObject | null>(null)
    const [shuffledIcons, setShuffledIcons] = useState<IconObject[] | null>(null)

    useMemo(()=>{
        const icons: IconObject[] = props.gridSize === fourBoard ? iconsArrayFor4x4 : iconsArrayFor6x6
        setShuffledIcons(shuffleIconsArray([...icons]))
    },[])

    useMemo(()=>{
        setTimeout(()=>{
            const isAllActive = shuffledIcons ? shuffledIcons.every((item) => item.condition === 'active') : false
            props.setIsGameEnd(isAllActive)
        }, 1000)
    },[shuffledIcons])

    const playerTurnHandler = () =>{
        if(props.inGamePlayers.length === 1) return
        const newPlayers = props.inGamePlayers.slice()
        const activePlayerIndex = newPlayers.findIndex((player)=> player.condition === 'active')
        
        newPlayers[activePlayerIndex].condition = 'inactive'
       
        if(newPlayers[activePlayerIndex].id === 3){
            newPlayers[0].condition = 'active'
          }else{
             newPlayers[activePlayerIndex + 1].condition = 'active'
          }
        props.setIngamePlayers(newPlayers)
    }

    const correctAnswer = () =>{
        const newPlayers = props.inGamePlayers.slice()
        const activePlayerIndex = newPlayers.findIndex((player)=> player.condition === 'active')
      
        newPlayers[activePlayerIndex].score += 1
        props.setIngamePlayers(newPlayers)
    }

    const handleClick = (chosenIcon: IconObject) =>{
        //for avoid double click
        if(chosenIcon.condition === 'active' || chosenIcon.condition === 'pending') return
        
        const newArray = shuffledIcons ? shuffledIcons.slice() : []

        if(firstIcon){
            const firstValue = newArray.findIndex((item)=>item.id === firstIcon.id) 
            newArray[firstValue].condition = 'pending' 
            const secondValue = newArray.findIndex((item)=>item.id === chosenIcon.id) 
            newArray[secondValue].condition = 'pending' 
            setShuffledIcons(newArray)
    
            if(firstIcon.number === chosenIcon.number){
                setTimeout(()=>{
                    const firstValue = newArray.findIndex((item)=>item.id === firstIcon.id) 
                    newArray[firstValue].condition = 'active' 
                    const secondValue = newArray.findIndex((item)=>item.id === chosenIcon.id) 
                    newArray[secondValue].condition = 'active' 
                    setShuffledIcons(newArray)
                    setFirstIcon(null)
                    correctAnswer()
                },1000)
            }else{
                setTimeout(()=>{
                    const firstValue = newArray.findIndex((item)=>item.id === firstIcon.id) 
                    newArray[firstValue].condition = 'hidden' 
                    const secondValue = newArray.findIndex((item)=>item.id === chosenIcon.id) 
                    newArray[secondValue].condition = 'hidden' 
                    shuffleIconsArray(newArray)
                    setFirstIcon(null)
                    playerTurnHandler()
                    if(props.inGamePlayers.length === 1) correctAnswer()
                  },1000)
            }
        }else{
            setFirstIcon(chosenIcon)
            const secondValue = newArray.findIndex((item)=>item.id === chosenIcon.id) 
            newArray[secondValue].condition = 'pending'
        }
    }

  return (
    <div 
    className={clsx(
    "grid grid-flow-col",
    {
      "grid-cols-4 grid-rows-4" : props.gridSize === fourBoard,
      "gird-cols-6 grid-rows-6" : props.gridSize === sixBoard
    },
    "gap-[12px] md:gap-[20px]")}>
        {shuffledIcons?.map((item)=> 
        <div key={item.id} onClick={()=>handleClick(item)}>
            <Circle
            gridSize={props.gridSize}
            iconObject={item}
            />         
        </div> )}
    </div>
  )
}
