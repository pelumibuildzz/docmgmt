import Link from "next/link"
import { Poppins } from "next/font/google";
import { ChevronLeft, Circle, CircleDot, Dot, X } from "lucide-react"
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const ReviewDetails = () => {
  return (
    <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
      <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300 bg-primary-lighter">
        <h2 className="font-semibold text-[28px]">Review Document</h2>
        <Link href={"/dashboard"}><X width={24} height={24} /></Link>
      </header>
      <main className="w-full py-8 px-6 flex flex-col space-y-4">
        <div className="flex flex-col space-y-6">
            <div className="flex justify-between">
                <Link href={"/dashboard"} className="flex space-x-4 rounded-xl border-gray border-[.5px] p-2 items-center text-gray">
                    <ChevronLeft className="" width={24} height={24} />
                    <span className="text-[16px] font-medium">Go Back</span>
                </Link>
            </div>
        </div>
        <section className="flex flex-col space-y-6 w-7/12 text-[16px]">
            <div className="py-6 px-4 flex flex-col">
                <h3 className="font-semibold">1. Document Name</h3>
                <div className="border border-gray-300 p-4 rounded-md flex justify-between">
                  <div className="flex items-center space-x-3">
                    <Image src={"/upload/doc.png"} alt="document icon" width={24} height={24} />
                    <span className="">Document_Name</span>
                  </div>
                    <button className="py-1 px-2 bg-primary text-white rounded-md">Edit</button>
                </div>
                <button className="text-primary">Change Document</button>
            </div>
            <div className="py-6 px-4 flex flex-col">
                <h3 className="font-semibold">2. File Name</h3>
                <div className="border border-gray-300 p-4 rounded-md flex justify-between">
                  <div className="flex items-center space-x-3">
                    <Image src={"/upload/file.png"} alt="document icon" width={24} height={24} />
                    <span className="">File_Name</span>
                  </div>
                    <button className="py-1 px-2 bg-primary text-white rounded-md">Edit</button>
                </div>
                <button className="text-primary">Change File</button>
            </div>
            <div className="py-6 px-4 flex flex-col">
                <h3 className="font-semibold">3. Document Priority</h3>
                <div className="border border-gray-300 p-4 rounded-md flex justify-between">
                  <div className="flex items-center space-x-3 text-priority-high">
                    <CircleDot className="" width={24} height={24} />
                    <span className="">High</span>
                  </div>
                  <button className="py-1 px-2 bg-primary text-white rounded-md">Edit</button>
                </div>
            </div>
            <div className="py-6 px-4 flex flex-col">
                <h3 className="font-semibold">4. Workflow</h3>
                <div className="border border-gray-300 p-4 rounded-md flex justify-between">
                  <div className="flex items-center space-x-3">
                    <Image src={"/upload/wkflow.png"} alt="document icon" width={24} height={24} />
                    <div className="flex flex-col space-y-0.5">
                      <span className="font-medium">Workflow Name</span>
                      <div className="text-gray flex space-x-0.5 items-center">
                          <span className="text-gray">Created by: Abidogun Aminat</span>
                          <Dot className="text-gray" width={24} height={24} />
                          <span className="text-gray">No of Reviewers: 8</span>
                      </div>
                    </div>
                  </div>
                    <button className="py-1 px-2 bg-primary text-white rounded-md">Edit</button>
                </div>
                <button className="text-primary">Change Workflow</button>
            </div>
        </section>
    </main>
    </div>
  )
}

export default ReviewDetails