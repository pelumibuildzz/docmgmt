import { Bell, UserCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const Dashboard = () => {
  return (
    <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
      <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300">
        <h2 className="font-semibold text-[28px]">Dashboard</h2>
        <span className="flex space-x-3 items-center">
          <Link
            href="/notifications"
            className=""
          >
            <Bell width={22} height={22} />
          </Link>
          <span className="flex space-x-3 items-center font-medium">
            <UserCircleIcon width={32} height={32} />
            <span className="text-[14px]">Username</span>
          </span>
        </span>
      </header>
      <main className="w-full p-10 flex flex-col space-y-11">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-[20px]">Welcome Username,</h3>
          <Link href="/upload-doc" className="text-[16px] font-semibold px-[35px] py-3 rounded-xl text-center bg-primary text-white">Upload Document</Link>
        </div>
        <section>
          <div className="bg-primary-lighter px-8 py-4 flex items-center justify-between rounded-2xl w-fulltext-[16px] border-[.5px]">
            <div className="flex space-x-3">
              <button className="px-6 py-2 font-semibold hover:bg-primary-light hover:text-primary rounded-md">All</button>
              <button className="px-6 py-2 font-semibold hover:bg-primary-light hover:text-primary rounded-md">Today</button>
              <button className="px-6 py-2 font-semibold hover:bg-primary-light hover:text-primary rounded-md">Yesterday</button>
            </div>
            <div className="flex space-x-4 text-gray">
              <div>
                <span className="p-2">From:</span>
                <input type="date" className="p-2 rounded-xl border border-gray" />
              </div>
              <div>
                <span className="p-2">To:</span>
                <input type="date" className="p-2 rounded-xl border border-gray" />
              </div>
            </div>
          </div>
          <div></div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
