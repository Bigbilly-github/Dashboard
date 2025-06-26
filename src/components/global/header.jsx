


function Header ({title}){

    return(
        <>
         <header className="bg-gray-800 z-12 flex-1 bg-opacity-50 backdrop-blur-md shadow-lg  border-b border-slate-700  relative  h-[80px] w-full flex items-center justify-center">
            <h1 className="w-[90%] text-[24px] font-semibold text-white">
               {title}
            </h1>

         </header>
        </>
    )

}
export default Header