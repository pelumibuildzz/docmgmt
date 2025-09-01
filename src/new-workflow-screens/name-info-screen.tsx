import Sidenav from "@/components/sidenav"
import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const NameInfoScreen = () => {
  return (
    <div className="w-full min-h-screen">
        <div className="grid grid-cols-9">
            <Sidenav />
        <div className="col-span-7">
            <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
                <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300">
                    <h2 className="font-semibold text-[28px]">Create New Workflow</h2>
                    <UserInfo/>
                </header>
                <main className="w-full p-6 flex flex-col space-y-11 max-w-[900px]">
                    <Link href={"/dashboard"} className="flex space-x-4 rounded-xl border-gray border-[.5px] p-2 items-center text-gray w-fit">
                        <ChevronLeft className="" width={24} height={24} />
                        <span className="text-[16px] font-medium">Go Back</span>
                    </Link>

                    <form className="mt-8 flex flex-col space-y-[38px] max-w-5/6">
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-medium text-[20px]">Step 1 of 2</h3>
                            <h5 className="text-[16px]">Add name, details, and instructions to new workflow.</h5>
                        </div>
                        <section className="flex flex-col space-y-6">
                            <div className="flex flex-col space-y-3">
                                <label className="font-medium text-[16px]" htmlFor="workflowname">Workflow Name</label>
                                <input type="text" name="workflowname" placeholder="Add name to workflow" className="border-[0.5px] border-gray-300 rounded-xl p-4 w-full" />
                            </div>
                            <div className="flex flex-col space-y-3">
                                <label className="font-medium text-[16px]" htmlFor="workflowdescription">Workflow Description</label>
                                <textarea name="workflowdescription" placeholder="Add description" rows={4} className="border-[0.5px] border-gray-300 rounded-xl p-4 w-full resize-vertical" />
                            </div>
                            <div className="flex flex-col space-y-3">
                                <label className="font-medium text-[16px]" htmlFor="workflowinstructions">Workflow Instructions</label>
                                <textarea name="workflowinstructions" placeholder="Add Instructions to workflow" rows={4} className="border-[0.5px] border-gray-300 rounded-xl p-4 w-full resize-vertical" />
                            </div>
                        </section>
                    </form>
                </main>
                    <button className="text-white bg-gray rounded-xl font-medium text-[16px] px-4 py-3 w-[180px] absolute bottom-4 right-14">Continue</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NameInfoScreen