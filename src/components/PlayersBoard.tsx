import { Players } from "../atoms/Players"

export const PlayersBoard = () => {
  return (
    <div className=" flex gap-[24px]">
        <Players/>
        <Players/>
        <Players/>
        <Players/>
    </div>
  )
}
