
export const MenuBar = (props:{
  setToggleMenu: (value: boolean) => void
}) => {
  return (
    <div
     className=" fixed left-0 z-50 
     w-[100vw] h-[100vh] 
     flex items-center justify-center bg-black bg-opacity-50">

      <div 
      className=" w-[328px] h-[224px] bg-[#F2F2F2] 
      rounded-md flex flex-col gap-4 items-center justify-center">
          <button
          className=" w-[280px] h-[48px]
           bg-[#FDA214] rounded-full cursor-pointer
           flex items-center justify-center"
           >Restart</button>
          <button 
          className=" w-[280px] h-[48px] 
           bg-[#DFE7EC] rounded-full cursor-pointer
           flex items-center justify-center"
           >New Game</button>
          <button 
          className=" w-[280px] h-[48px]
           bg-[#DFE7EC] rounded-full cursor-pointer
           flex items-center justify-center"
           onClick={()=>props.setToggleMenu(false)}
           >Resume Game</button>
      </div>

    </div>
  )
}
