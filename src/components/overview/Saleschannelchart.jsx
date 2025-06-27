import React from 'react'
import {  motion } from "framer-motion";
import { BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer } from "recharts";
  const dailySalesData = [
	{ name: "Mon", sales: 1000 },
	{ name: "Tue", sales: 1200 },
	{ name: "Wed", sales: 900 },
	{ name: "Thu", sales: 1100 },
	{ name: "Fri", sales: 1300 },
	{ name: "Sat", sales: 1600 },
	{ name: "Sun", sales: 1400 },
];
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

const Saleschannelchart = () => {
  return (
    <>
       <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay:0.4 }}
      >
        <h1 className="text-xl font-semibold text-gray-100 mb-8">
          Sales by Channel
        </h1>
        <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dailySalesData}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }} />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8"  >
                    {dailySalesData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                    </Bar>
                </BarChart>
                
                </ResponsiveContainer>

        </div>

    </motion.div>
    </>
  )
}

export default Saleschannelchart