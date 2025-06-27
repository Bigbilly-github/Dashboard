import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Legend, Line } from "recharts";
import {  motion } from "framer-motion";
const Salestrendcharts = () => {

       const monthlySalesData = [
            { month: "Jan", sales: 4000 },
            { month: "Feb", sales: 3000 },
            { month: "Mar", sales: 5000 },
            { month: "Apr", sales: 4500 },
            { month: "May", sales: 6000 },
            { month: "Jun", sales: 5500 },
            { month: "Jul", sales: 7000 },
];
  return (
 <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      >
        <h1 className="text-xl font-semibold text-gray-100 mb-8">
            Sales Overview
        </h1>
        <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlySalesData}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="month"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotoneX" dataKey="sales" stroke="#8884d8"  strokeWidth={4} dot={{fill:"#636gF1", strokeWidth:2, r:6}} activeDot={{r:8,strokeWidth:2}} />
                </LineChart>
                </ResponsiveContainer>

        </div>

    </motion.div>
  )
}

export default Salestrendcharts