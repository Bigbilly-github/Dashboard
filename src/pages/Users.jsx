import React from 'react'

import Sidebar from "../components/global/sidebar";
import Header from "../components/global/header";
import Usersdisplay from '../components/users/usersdisplay';

const Users = () => {
  return (
    <>
         <div className='flex-1 flex items-start overflow-auto relative z-10'>
             <Sidebar/>
            <div className="w-full">
                <Header title="Users"/>
                <main>
                 <Usersdisplay/>
                   
                </main>

            </div>
        

      </div>
    </>
  )
}

export default Users