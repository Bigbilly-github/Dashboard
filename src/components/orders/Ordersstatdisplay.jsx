import React from 'react'
import {  CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import Stats from "../global/stats";
import {motion} from 'framer-motion'
import DailyOrders from './Dailyorders';
import OrderDistribution from './Orderdistribution';
import OrdersTable from './Orderstable';

const Ordersstatdisplay = () => {
    const orderStats = {
	totalOrders: "1,234",
	pendingOrders: "56",
	completedOrders: "1,178",
	totalRevenue: "$98,765",
};

  return (
      <section className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                >

                     <Stats name='Total Orders' Icon={ShoppingBag} value={orderStats.totalOrders} color='#6366F1' />
                     <Stats name='Pending Orders' Icon={Clock} value={orderStats.pendingOrders} color='#F59E0B' />
                     <Stats name='Completed Orders'
						Icon={CheckCircle}
						value={orderStats.completedOrders}
						color='#10B981' />
                     <Stats name='Total Revenue' Icon={DollarSign} value={orderStats.totalRevenue} color='#EF4444' />

                  



            </motion.div>
                   
               <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                <DailyOrders/>
                <OrderDistribution />
                      
                     

                    </div>
                    <OrdersTable/>
                    

        </section>
  )
}

export default Ordersstatdisplay