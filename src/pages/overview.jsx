

import { Link } from "react-router-dom";
import Sidebar from "../components/global/sidebar";
import Header from "../components/global/header";
import Stats from "../components/global/stats";
import { Zap } from "lucide-react";
import StatsDisplay from "../components/statsdisplay";

function Overview() {
  return (
      <>
       <div className='flex-1 flex items-start overflow-auto relative z-10'>
             <Sidebar/>
            <div className="w-full">
                <Header title="Overview"/>
                <main>
                    <StatsDisplay/>
                   
                </main>

            </div>
        

      </div>

      </>
  );
}
export default Overview;