import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const Dashboard = () => {
  return (
    <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
      <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300 bg-primary-lighter">
        <h2 className="font-semibold text-[28px]">Dashboard</h2>
        <UserInfo/>
      </header>
      <main className="w-full p-10 flex flex-col space-y-11">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-[20px]">Welcome Username,</h3>
          <Link href="/upload-doc" className="text-[16px] font-semibold px-[35px] py-3 rounded-xl text-center bg-primary text-white">Upload Document</Link>
        </div>
        <section className="flex flex-col space-y-[38px] w-full">
          {/* Filters */}
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
          {/* Dashboard View */}
          <div className="p-8 border-[.5px] border-gray w-full grid grid-cols-4 gap-x-7 gap-y-10 rounded-xl">
            <Link href={"/dashboard/doc-mgmt"} className="col-span-1 py-5 px-4 flex flex-col space-y-3 rounded-xl bg-primary-lighter">
              <Image src="/dashboard/all.png" className="p-3 bg-doc-all rounded-md" alt="All Documents" width={40} height={40} />
              <span className="text-[16px]">All Documents</span>
              <span className="font-medium text-[32px]">23</span>
            </Link>
            <Link href={"/dashboard/doc-mgmt"} className="col-span-1 py-5 px-4 flex flex-col space-y-3 rounded-xl bg-docbg-archived">
              <Image src="/dashboard/assign.png" className="p-3 bg-doc-assigned rounded-md" alt="All Documents" width={40} height={40} />
              <span className="text-[16px]">Assigned Documents</span>
              <span className="font-medium text-[32px]">23</span>
            </Link>
            <Link href={"/dashboard/doc-mgmt"} className="col-span-1 py-5 px-4 flex flex-col space-y-3 rounded-xl bg-docbg-due-today">
              <Image src="/dashboard/due.png" className="p-3 bg-doc-due-today rounded-md" alt="All Documents" width={40} height={40} />
              <span className="text-[16px]">Due Today</span>
              <span className="font-medium text-[32px]">23</span>
            </Link>
            <Link href={"/dashboard/doc-mgmt"} className="col-span-1 py-5 px-4 flex flex-col space-y-3 rounded-xl bg-docbg-updated">
              <Image src="/dashboard/upd.png" className="p-3 bg-doc-updated rounded-md" alt="All Documents" width={40} height={40} />
              <span className="text-[16px]">Updated Documents</span>
              <span className="font-medium text-[32px]">23</span>
            </Link>
            <Link href={"/dashboard/doc-mgmt"} className="col-span-1 py-5 px-4 flex flex-col space-y-3 rounded-xl bg-docbg-archived">
              <Image src="/dashboard/arch.png" className="p-3 bg-doc-archived rounded-md" alt="All Documents" width={40} height={40} />
              <span className="text-[16px]">Archived Documents</span>
              <span className="font-medium text-[32px]">23</span>
            </Link>
            <Link href={"/dashboard/doc-mgmt"} className="col-span-1 py-5 px-4 flex flex-col space-y-3 rounded-xl bg-docbg-pending">
              <Image src="/dashboard/pending.png" className="p-3 bg-doc-pending rounded-md" alt="All Documents" width={40} height={40} />
              <span className="text-[16px]">Pending Documents</span>
              <span className="font-medium text-[32px]">23</span>
            </Link>
            <Link href={"/dashboard/doc-mgmt"} className="col-span-1 py-5 px-4 flex flex-col space-y-3 rounded-xl bg-docbg-ongoing">
              <Image src="/dashboard/ongoing.png" className="p-3 bg-doc-ongoing rounded-md" alt="All Documents" width={40} height={40} />
              <span className="text-[16px]">Ongoing Documents</span>
              <span className="font-medium text-[32px]">23</span>
            </Link>
            <Link href={"/dashboard/doc-mgmt"} className="col-span-1 py-5 px-4 flex flex-col space-y-3 rounded-xl bg-docbg-complete">
              <Image src="/dashboard/completed.png" className="p-3 bg-doc-complete rounded-md" alt="All Documents" width={40} height={40} />
              <span className="text-[16px]">Completed Documents</span>
              <span className="font-medium text-[32px]">23</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
