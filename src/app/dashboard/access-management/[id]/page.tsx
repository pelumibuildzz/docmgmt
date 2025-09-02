import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import { ChevronLeft, ChevronsRight } from "lucide-react";
import Link from "next/link";
import UserAccessTable from "@/access-management-components/user/user-access-table";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });


const ManageUserAccessPage = () => {
  return (
    <div className="col-span-7 min-h-screen">
        <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
            <header className="flex bg-primary-lighter px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300">
                <div className="flex space-x-4 items-center">
                    <h2 className="font-semibold text-[28px]">Access Management</h2>
                    <ChevronsRight width={24} height={24} />
                    <h2 className="font-medium text-[20px]">Manage Access</h2>
                </div>
              <UserInfo/>
            </header>
            <main className="w-full py-8 px-6 flex flex-col space-y-5 ">
                <UserAccessTable/>
                <button className="text-white bg-primary rounded-xl font-medium text-[16px] px-4 py-3 w-fit absolute bottom-0 right-14">Save Changes</button>
            </main>
        </div>
    </div>
  )
}

export default ManageUserAccessPage