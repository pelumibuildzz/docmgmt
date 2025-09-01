import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import { ChevronLeft, ChevronsRight } from "lucide-react";
import Link from "next/link";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });


const AddNewMemberPage = () => {
  return (
    <div className="col-span-7">
        <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
            <header className="flex bg-primary-lighter px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300">
                <div className="flex space-x-4 items-center">
                    <h2 className="font-semibold text-[28px]">Teams</h2>
                    <ChevronsRight width={24} height={24} />
                    <h2 className="font-medium text-[20px]">Add New Member</h2>
                </div>
              <UserInfo/>
            </header>
            <main className="w-full py-8 px-6 flex flex-col space-y-5 min-h-screen">
                <Link href={"/dashboard"} className="flex space-x-4 rounded-xl border-gray border-[.5px] p-2 items-center text-gray w-fit">
                    <ChevronLeft className="" width={24} height={24} />
                    <span className="text-[16px] font-medium">Go Back</span>
                </Link>

                <form className="mt-8 flex flex-col space-y-[38px] max-w-4/6 px-4">
                    <section className="flex flex-col space-y-12">
                        <div className="flex flex-col space-y-3">
                            <label className="font-medium text-[16px]" htmlFor="membername">Name</label>
                            <input type="text" name="membername" placeholder="Add name to member" className="border-[0.5px] border-gray-300 rounded-xl p-4 w-full" />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <label className="font-medium text-[16px]" htmlFor="memberemail">Email</label>
                            <input type="text" name="memberemail" placeholder="Add email to member" className="border-[0.5px] border-gray-300 rounded-xl p-4 w-full" />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <label className="font-medium text-[16px]" htmlFor="memberdepartment">Department</label>
                            <input type="text" name="memberdepartment" placeholder="Add department to member" className="border-[0.5px] border-gray-300 rounded-xl p-4 w-full" />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <label className="font-medium text-[16px]" htmlFor="memberaccesslevel">Access Level</label>
                            <select name="memberaccesslevel" id="memberaccesslevel" className="border-[0.5px] border-gray-300 rounded-xl p-4 w-full">
                                <option value="1">Level 1</option>
                                <option value="2">Level 2</option>
                                <option value="3">Level 3</option>
                            </select>
                        </div>
                    </section>
                </form>
                <button className="text-white bg-primary rounded-xl font-medium text-[16px] px-4 py-3 w-fit absolute bottom-0 right-14">Add Member</button>
            </main>
        </div>
    </div>
  )
}

export default AddNewMemberPage