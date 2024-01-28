import { FourCircle } from "../atoms/FourCircle"


export const CircleBoard = () => {
  return (
    <div className=" flex flex-col 
    gap-[12px] md:gap-[20px]">
        <FourCircle/>
        <FourCircle/>
        <FourCircle/>
        <FourCircle/>
    </div>
  )
}
