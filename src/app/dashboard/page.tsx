import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const Dashboard = () => {
  return (
    <main className="w-screen h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className={`${poppins.className} text-4xl font-semibold text-black mb-4`}>
          Welcome to Dashboard
        </h1>
        <p className={`${poppins.className} text-lg text-gray-600`}>
          Dashboard content will be built here.
        </p>
      </div>
    </main>
  );
};

export default Dashboard;
