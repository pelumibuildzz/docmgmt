import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import Link from "next/link";
import {  ChevronDown, ChevronLeft, Plus } from "lucide-react";
import RecentInteractSidebar from "@/view-workflow-screens/recent-interact-sidebar";
import ReviewerItem from "@/view-workflow-screens/reviewer-item";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const AddReviewerScreen = () => {
  return (
    <div className="w-full min-h-screen">
        <div className="grid grid-cols-9">
            <RecentInteractSidebar/>
        <div className="col-span-7">
            <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
                <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300">
                    <h2 className="font-semibold text-[28px]">Workflow</h2>
                    <UserInfo/>
                </header>
                <main className="w-full p-6 flex flex-col space-y-11 max-w-[900px]">
                    <Link href={"/dashboard"} className="flex space-x-4 rounded-xl border-gray border-[.5px] p-2 items-center text-gray w-fit">
                        <ChevronLeft className="" width={24} height={24} />
                        <span className="text-[16px] font-medium">Go Back</span>
                    </Link>

                    <div className="flex flex-col space-y-2">
                        <h3 className="font-medium text-[20px]">Step 1 of 2</h3>
                        <h5 className="text-[16px]">Add name, details, and instructions to new workflow.</h5>
                    </div>

                    <ul className="flex flex-col space-y-3">
                        <li className="flex space-x-[26px]">
                            <div className="flex flex-col space-y-0.5 items-center">
                                <span className="rounded-full bg-primary text-white w-6 h-6 text-center">
                                    <span className="p-2">1</span>
                                </span>
                                <span className="h-8 w-[3px] bg-primary"></span>
                            </div>
                            <div className="flex space-x-4 rounded-xl px-6 py-4 items-center border-[.5px] border-gray-300 border-dashed">
                                <div className="flex flex-col space-y-1 max-w-[280px] items-center">
                                   <div className="flex space-x-1 items-center text-primary justify-center">
                                        <Plus width={24} height={24}/> 
                                        <h3 className="text-[14px] font-medium">Add Reviewers</h3>
                                   </div>
                                   <h5 className="font-light text-[10px] text-center w-5/6">
                                        Click the add button or drag a name from the side bar to add reviewer.
                                   </h5>
                                </div>
                                <button className="flex rounded-xl border-[.5px] border-gray-300 items-center">
                                    {/* Reviewer or Approver */}
                                    <span className="p-2 text-[14px]">Role</span>
                                    <ChevronDown width={24} height={24} />
                                </button>
                            </div>
                        </li>
                    </ul>
                </main>
                    <button className="text-white bg-primary rounded-xl font-medium text-[16px] px-4 py-3 w-fit absolute bottom-14 right-14">Preview Workflow</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddReviewerScreen