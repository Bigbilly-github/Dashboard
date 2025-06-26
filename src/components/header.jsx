


function Header ({title}){

    return(
        <>
         <header className="bg-gray-800 z-12 flex-1  border-b border-slate-500  relative  h-[80px] w-full flex items-center justify-center">
            <h1 className="w-[90%] text-[18px] font-semibold text-white">
               {title}
            </h1>

         </header>
        </>
    )

}
export default Header