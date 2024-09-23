import Sidebar from "@/components/Sidemenu";
import TopBar from "@/components/Topbar";

const Home = () => {
  return (
    <div className="flex bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <TopBar />
        </div>
    </div>
  );
}

export default Home;