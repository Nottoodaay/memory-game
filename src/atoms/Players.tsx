
export const Players = (props:{playerNumber: number}) => {
  const number = props.playerNumber
  return (
    <div 
    className=" 
    w-[64px] md:w-[164px] lg:w-[255px]
    h-[70px] md:h-[80px] lg:h-[72px]
     md:p-4 
     mb-[24px] md:mb-[38px] lg:mb-[74px]
     bg-[#DFE7EC] 
     rounded-lg 
     flex flex-col lg:flex-row
     justify-center md:justify-start lg:justify-between
     md:items-start items-center"
    >
      <p className=" 
       text-[15px]
       text-[#7191A5] 
       font-bold">{
        `P${number + 1}`
       }</p>
      <h2 className=" text-[24px] text-[#304859] font-bold">0</h2>
    </div>
  )
}
