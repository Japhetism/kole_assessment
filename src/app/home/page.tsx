import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidemenu";
import TopBar from "@/components/Topbar";

const Home = () => {
  return (
    <div className="flex bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <TopBar />
            <div className="p-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <Dashboard />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;