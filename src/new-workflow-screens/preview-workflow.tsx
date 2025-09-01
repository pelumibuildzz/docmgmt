import Sidenav from "@/components/sidenav"
import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import WorklowReviewerTable from "@/view-workflow-screens/worklow-reviewer-table";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const PreviewWorkflow = () => {
  return (
    <div className="w-full min-h-screen">
        <div className="grid grid-cols-9">
            <Sidenav />
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

                    <div className="flex flex-col space-y-10 mt-14">
                        <div className="flex flex-col space-y-2">
                            <h3 className="px-4 py-2 font-medium text-[16px] border-b-[.1px] border-gray-300">Workflow Name</h3>
                            <h5 className="px-4 py-2 text-[16px] text-gray">Staff Promotion</h5>
                            <div className="text-end px-4">
                                <button className="px-2 py-1 rounded-xl border-[.5px] border-gray text-white bg-primary text-[14px]">Edit</button>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="px-4 py-2 font-medium text-[16px] border-b-[.1px] border-gray-300">Workflow Description</h3>
                            <h5 className="px-4 py-2 text-[16px] text-gray">Staff promotion exercise file from level 2, 3, 4, and 5 officers. File contains staff document submitted for promotion exercise. Each document contains curriculum vitae, recommendation letter.</h5>
                            <div className="text-end px-4">
                                <button className="px-2 py-1 rounded-xl border-[.5px] border-gray text-white bg-primary text-[14px]">Edit</button>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="px-4 py-2 font-medium text-[16px] border-b-[.1px] border-gray-300">Workflow Instructions</h3>
                            <h5 className="px-4 py-2 text-[16px] text-gray">To be reviewed by  line managers and supervisors, who are expected to minute their observations. Final approvals and signatures needed from HR, permanent secretary, and commissioner.</h5>
                            <div className="text-end px-4">
                                <button className="px-2 py-1 rounded-xl border-[.5px] border-gray text-white bg-primary text-[14px]">Edit</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-[30px] mt-20 mb-20">
                        <div className="flex justify-between px-4">
                            <h3 className="font-medium text-[16px]">Reviewer Details</h3>
                            <button className="px-2 py-1 rounded-xl border-[.5px] border-gray text-white bg-primary text-[14px]">Edit</button>
                        </div>
                        <WorklowReviewerTable/>
                    </div>

                </main>
                    <button className="text-white bg-primary rounded-xl font-medium text-[16px] px-4 py-3 w-fit self-end mx-10 my-8">Save &amp; Continue</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewWorkflow