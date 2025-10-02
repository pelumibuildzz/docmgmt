import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import GoBackButton from "@/components/go-back-button";
import {  ChevronDown, Plus } from "lucide-react";
import RecentInteractSidebar from "@/screens/view-workflow-screens/recent-interact-sidebar";
import ReviewerItem from "@/screens/view-workflow-screens/reviewer-item";
import { useWorkflow } from "@/context/workflow-context";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const EditReviewer = () => {
  const { workflowData } = useWorkflow();
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
                    <GoBackButton />

                    <h4 className="max-w-3/4 text-[16px] mt-6">To change reviewer&apos;s position on the workflow, drag reviewers from one position to another. Use the remove button to totally remove a reviewer.</h4>

                    <ul className="flex flex-col space-y-3">
                        {workflowData.reviewers.map((reviewer, index) => (
                            <ReviewerItem 
                                key={reviewer.id} 
                                reviewer={reviewer} 
                                stepNumber={index + 1} 
                            />
                        ))}
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
                    <button className="text-white bg-primary rounded-xl font-medium text-[16px] px-4 py-3 w-fit absolute bottom-14 right-14">Save Changes</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EditReviewer