import React from 'react'
import Sidebar from "../components/global/sidebar";
import Header from "../components/global/header";
import Ordersstatdisplay from '../components/orders/Ordersstatdisplay';

const Orders = () => {
  return (
       <div className='flex-1 flex items-start overflow-auto relative z-10'>
             <Sidebar/>
            <div className="w-full">
                <Header title="Orders"/>
                <main>
                  <Ordersstatdisplay/>
                   
                </main>
        
            </div>
        

      </div>
  )
}

export default Orders