import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import RecycleBinTable from "@/recycle-bin-components/recycle-bin-table";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const RecycleBinPage = () => {
  return (
    <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
        <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b bg-primary-lighter border-gray-300">
          <h2 className="font-semibold text-[28px]">Recycle Bin</h2>
          <UserInfo/>
        </header>
        <main className="w-full py-12 px-6">
            <RecycleBinTable/>
        </main>
    </div>
  )
}

export default RecycleBinPage