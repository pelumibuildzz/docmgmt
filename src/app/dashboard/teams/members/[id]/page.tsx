import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import { ChevronDown, ChevronLeft, ChevronsRight } from "lucide-react"
import Link from "next/link"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const TeamMemberDetail = () => {
  return (
    <div className="col-span-7">
        <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
            <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b bg-primary-lighter border-gray-300">
                <div className="flex space-x-4 items-center">
                    <h2 className="font-semibold text-[28px]">Teams</h2>
                    <ChevronsRight width={24} height={24} />
                    <h2 className="font-medium text-[20px]">Member Details</h2>
                </div>
                 <UserInfo/>
            </header>
            <main className="w-full py-8 px-6 flex flex-col space-y-5">
                <div className="flex flex-col space-y-[58px]">
                    <div className="flex justify-between">
                        <Link href={"/dashboard/teams/members"} className="flex space-x-4 rounded-xl border-gray border-[.5px] p-2 items-center text-gray">
                            <ChevronLeft className="" width={24} height={24} />
                            <span className="text-[16px] font-medium w-max">Go Back</span>
                        </Link>
                        <div className="w-full flex justify-end space-x-3 text-[16px] font-semibold">
                            <button className="px-3 py-2 rounded-lg text-status-error flex space-x-2 border-[.5px]">Delete and Deactivate</button>
                            <button  className="px-4 py-2 bg-status-error rounded-xl text-white">Revoke Access</button>
                        </div>
                    </div>
                    <div className="px-10 py-6 flex flex-col space-y-10 border-[.5px] border-gray rounded-xl max-w-3xl">
                        <h3 className="font-medium text-[16px]">Personal Information</h3>
                        <div className="flex space-x-24">
                            <div className="flex flex-col space-y-4 text-[14px]">
                                <h3 className="">First Name</h3>
                                <h4 className="font-medium text-gray">Aminat</h4>
                            </div>
                            <div className="flex flex-col space-y-4 text-[14px]">
                                <h3 className="">Last Name</h3>
                                <h4 className="font-medium text-gray">Aminat</h4>
                            </div>
                            <div className="flex flex-col space-y-4 text-[14px]">
                                <h3 className="">Email</h3>
                                <h4 className="font-medium text-gray">aminat@example.com</h4>
                            </div>
                        </div>
                        <div className="flex space-x-24">
                            <div className="flex flex-col space-y-4 text-[14px]">
                                <h3 className="">Department</h3>
                                <h4 className="font-medium text-gray">Finance</h4>
                            </div>
                            <div className="flex flex-col space-y-4 text-[14px]">
                                <h3 className="">Access Level</h3>
                                <h4 className="font-medium text-gray">1</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default TeamMemberDetail