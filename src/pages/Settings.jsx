import Header from "../components/global/header";
import Sidebar from "../components/global/sidebar";
import DangerZone from "../components/settings/Dangerzone";

import Notifications from "../components/settings/Notifcations";
import Profile from "../components/settings/profile";
import Security from "../components/settings/security";
const Settings = () => {
	return (
     <div className='flex-1 flex items-start overflow-auto relative z-10'>
             <Sidebar/>
            <div className="w-full">
                <Header title="Settings"/>
                 <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
                   <Profile />
                   <Notifications/>
                   <Security/>
                   <DangerZone/>
                  
                   
                </main>

            </div>
        

      </div>

	);
};
export default Settings