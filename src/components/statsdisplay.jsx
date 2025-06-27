

import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import Stats from "./global/stats";
import {  motion } from "framer-motion";
import Salesoverviewchart from "./salesoverviewchart";
import Categorydistributionchart from "./categorydistributionchart";
import Saleschannelchart from "./Saleschannelchart";
function StatsDisplay (){

    return(
        <>
         <section className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                >

                     <Stats name="Total Sales" Icon={Zap} value="$14,345" color='#6366F1' />
                     <Stats name="New Users" Icon={Users} value="1,235" color="#8B5CF6" />
                     <Stats name="Total Products" Icon={ShoppingBag} value="567" color="#EC4899" />
                     <Stats name="Conversion Rate" Icon={BarChart2} value="12.5%" color="#108981" />

                  



            </motion.div>
               <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        <Salesoverviewchart/>
                      <Categorydistributionchart/>
                      <Saleschannelchart/>

                    </div>

        </section>
        </>
    )

}
export default StatsDisplay;