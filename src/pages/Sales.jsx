import React from 'react'

import Sidebar from "../components/global/sidebar";
import Header from "../components/global/header";
import Salesstatsdisplay from '../components/sales/salesstatsdisplay'

const Sales = () => {
  return (
     <div className='flex-1 flex items-start overflow-auto relative z-10'>
             <Sidebar/>
            <div className="w-full">
                <Header title="Sales"/>
                <main>
                   <Salesstatsdisplay/>
                   
                </main>
        
            </div>
        

      </div>
  )
}

export default Sales