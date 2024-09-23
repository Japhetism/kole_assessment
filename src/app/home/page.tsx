import Layout from "@/components/Layout";
import Dashboard from "@/components/Dashboard";
import Activity from "@/components/Dashboard/activity";
import Integration from "@/components/Dashboard/integration";

const Home = () => {
  return (
   <Layout>
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
   </Layout>
  );
}

export default Home;