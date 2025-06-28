import React from 'react'
import { UserCheck, UserPlus,  UsersIcon, UserX } from "lucide-react";
import Stats from "../global/stats";
import {  motion } from "framer-motion";
import Usertable from './Usertable';




const Usersdisplay = () => {
    const userStats = {
	totalUsers: 152845,
	newUsersToday: 243,
	activeUsers: 98520,
	churnRate: "2.4%",
};

  return (
    <>
           <section className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                >

                   <Stats
						name='Total Users'
						Icon={UsersIcon}
						value={userStats.totalUsers.toLocaleString()}
						color='#6366F1'
					/>
					<Stats name='New Users Today' Icon={UserPlus} value={userStats.newUsersToday} color='#10B981' />
					<Stats
						name='Active Users'
						Icon={UserCheck}
						value={userStats.activeUsers.toLocaleString()}
						color='#F59E0B'
					/>
					<Stats name='Churn Rate' Icon={UserX} value={userStats.churnRate} color='#EF4444' />

                  



            </motion.div>
            <Usertable/>
                   
               <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                      
                     

                    </div>
                    

        </section>
    </>
   
  )
}

export default Usersdisplay