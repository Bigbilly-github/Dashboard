

import Usertable from "../users/Usertable";
import Analyticscard from "./Analyticscard";

const Analyticsdisplay = () => {
  return (
    <section className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
      <Analyticscard />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Usertable/>
         
      </div>
    </section>
  );
};

export default Analyticsdisplay;
