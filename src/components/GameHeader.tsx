
export const GameHeader = (props:{
  setToggleMenu: (value: boolean) => void
}) => {
  return (
    <div 
    className="
     w-[100vw] 
    flex 
    justify-between 
    pr-6 pl-6 pt-6 
    md:pr-[40px] md:pl-[40px] md:pt-[40px]
    lg:pr-[166px] lg:pl-[166px] lg:pt-[68px]
    ">
        <h1 
        className=" 
        font-bold 
        text-[24px]
        md:text-[40px]
        text-[#152938]"
        >memory</h1>
        
        <button 
        className=" w-[78px] h-[40px] 
         cursor-pointer
         bg-[#FDA214] text-[16px] 
         fonr-bold text-[#FCFCFC]
         rounded-full
         flex justify-center items-center md:hidden"
         onClick={()=>props.setToggleMenu(true)}
         >Menu</button>

         <div className="hidden md:flex gap-[40px]">
            <button 
            className="
              w-[128px] h-[52px]
              bg-[#FDA214] rounded-full
              text-[20px] text-[#FCFCFC] font-bold
             flex items-center justify-center">Restart</button>
             
             <button 
            className="
              w-[150px] h-[52px]
              bg-[#DFE7EC] rounded-full
              text-[20px] text-[#304859] font-bold
             flex items-center justify-center">New Game</button>
         </div>
    </div>
  )
}
