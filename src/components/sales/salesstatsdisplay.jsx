import React from 'react'
import Stats from "../global/stats";
import {motion} from 'framer-motion'
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import Salesoverviewchart from './Salesoverviewchart';
import Categorydistributionchart from '../overview/categorydistributionchart';
import Dailysalestrend from './Dailysalestrend';

const Salesstatsdisplay = () => {
    const salesStats = {
	totalRevenue: "$1,234,567",
	averageOrderValue: "$78.90",
	conversionRate: "3.45%",
	salesGrowth: "12.3%",
};

  return (
      <section className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                >

                     
                <Stats name='Total Revenue' Icon={DollarSign} value={salesStats.totalRevenue} color='#6366F1' />
					<Stats
						name='Avg. Order Value'
						Icon={ShoppingCart}
						value={salesStats.averageOrderValue}
						color='#10B981'
					/>
					<Stats
						name='Conversion Rate'
						Icon={TrendingUp}
						value={salesStats.conversionRate}
						color='#F59E0B'
					/>
					<Stats name='Sales Growth' Icon={CreditCard} value={salesStats.salesGrowth} color='#EF4444' />
			
                  



            </motion.div>
            <Salesoverviewchart/>
                 
               <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <Categorydistributionchart/>
                <Dailysalestrend/>
                      
                     

                    </div>
                    

        </section>
  )
}

export default Salesstatsdisplay