import Dashboard from "@/components/Dashboard";
import Activity from "@/components/Dashboard/activity";
import Integration from "@/components/Dashboard/integration";
import Sidebar from "@/components/Sidemenu";
import TopBar from "@/components/Topbar";

const Home = () => {
  return (
    <div className="flex bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <TopBar />
            <div className="p-1 grid grid-cols-1 lg:grid-cols-3 gap-2 px-4">
                <div className="lg:col-span-2">
                    <Dashboard />
                </div>
                <div className="p-6 bg-gray-50 flex-1">
                    <div>
                        <Activity />
                    </div>
                    <div className="mt-10">
                        <Integration />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;