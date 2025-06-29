

import Usertable from "../users/Usertable";
import Analyticscard from "./Analyticscard";
import ChannelPerformance from "./Channelperfomance";
import ProductPerformance from "./Productperfomance";
import RevenueChart from "./Revenuechart";
import UserRetention from "./Userretention";

const Analyticsdisplay = () => {
  return (
    <section className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
      <Analyticscard />
        <RevenueChart/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <ChannelPerformance/>
        <ProductPerformance/>
        <UserRetention/>
       
         
      </div>
    </section>
  );
};

export default Analyticsdisplay;
