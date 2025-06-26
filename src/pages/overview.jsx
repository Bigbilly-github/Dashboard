

import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

function Overview() {
  return (
      <>
       <div className='flex-1 flex items-start overflow-auto relative z-10'>
      <Sidebar/>
     
         <Header title="overview"/>

      </div>

      </>
  );
}
export default Overview;