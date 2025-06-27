import { BarChart2, Bus, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, Train, TrendingUp, Users } from "lucide-react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";




function Sidebar (){
    const [sidebaropen,setSidebarOpen] = useState(true);
    const SidebarItems = [
        {
		name: "Overview",
		icon: BarChart2,
		color: "#6366f1",
		href: "/",
	},
	{ name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
	{ name: "Users", icon: Users, color: "#EC4899", href: "/users" },
	{ name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
	{ name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
	{ name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },

    ]
   
    return(
        <>
        <motion.section className={`left-0 relative  transition-all duration-300 ease-in-out pt-[10px]  pl-[10px] top-0  h-screen bg-gray-800 text-white  flex flex-col ${sidebaropen ? "w-[200px]" : "w-[64px]"}`} >
            <div className="flex flex-col border-r border-gray-700 h-full   ">
                   <motion.button  className="text-white  rounded-[50%] p-2  mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}  onClick={() => setSidebarOpen(!sidebaropen)}>
                             <Menu size="24"/>
                   </motion.button>

                   <nav className="flex-grow mt-8 flex flex-col items-center ">
                                       {
                            SidebarItems.map((links,index)=>(
                   <Link to={links.href}>  <motion.div key={index} whileHover={{scale: 1.1}} className={`flex  cursor-pointer items-center gap-[10px] p-4 justify-center transition-colors rounded-lg hover:bg-slate-900`}>
                              <links.icon size={24}  style={{color:links.color, minWidth:"20px"}} />
                                    <AnimatePresence>
                                        {sidebaropen && (
                                            <motion.p key={index} className={`font-medium text-[18px] text-white`}
                                            initial={{ opacity: 0, width: 0 }}
                                                animate={{ opacity: 1, width: "auto" }}
                                                exit={{ opacity: 0, width: 0 }}
                                                transition={{ duration: 0.2, delay: 0.1 }}>
                                                {links.name}
                                            </motion.p>
                                    )}
                                    </AnimatePresence>
                                 
                                

                                </motion.div></Link>  
                             
                            
                 

                    ))
                    
                   }

                   </nav>


            </div>
        
           
               
           
           


        </motion.section>
       
        </>
    )

}
export default  Sidebar