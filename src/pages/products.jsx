




import Sidebar from "../components/global/sidebar";
import Header from "../components/global/header";

import StatsDisplay from "../components/statsdisplay";
import Productstatsdisplay from "../components/products/Productstatsdisplay";


function ProductPage() {
  return (
    <>
     <div className='flex-1 flex items-start overflow-auto relative z-10'>
             <Sidebar/>
            <div className="w-full">
                <Header title="Products"/>
                <main>
                   <Productstatsdisplay/>
                   
                </main>

            </div>
        

      </div>
   
    </>
  );
}
export default ProductPage;