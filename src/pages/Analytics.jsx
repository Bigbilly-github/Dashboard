import React from 'react'
import Sidebar from "../components/global/sidebar";
import Header from "../components/global/header";
import Analyticsdisplay from '../components/analytics/Analyticsdisplay';

const Analytics = () => {
  return (
     <div className='flex-1 flex items-start overflow-auto relative z-10'>
             <Sidebar/>
            <div className="w-full">
                <Header title="Analytics"/>
                <main>
                  <Analyticsdisplay/>
                   
                </main>
        
            </div>
        

      </div>
  )
}

export default Analytics