import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import AccessMgmtTable from "@/modules/access-management-components/access-mgmt-table";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const AccessManagementPage = () => {
  return (
    <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
        <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b bg-primary-lighter border-gray-300">
          <h2 className="font-semibold text-[28px]">Access Management</h2>
          <UserInfo/>
        </header>
        <main className="w-full py-8 px-6 flex flex-col space-y-5">
            <AccessMgmtTable />
        </main>
    </div>
  )
}

export default AccessManagementPage