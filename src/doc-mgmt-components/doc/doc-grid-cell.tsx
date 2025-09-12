import Image from "next/image"
import Link from "next/link"

const DocGridCell = () => {
  return (
    <div className="p-4 flex flex-col space-y-[22px] rounded-xl col-span-1 shadow-md">
        {/* Placeholder for future grid cell implementation */}
        <div className="flex justify-between">
            <div className="flex flex-col space-y-[7px]">
                <Image src={"/file.png"} alt="File" className="text-gray" width={24} height={24} />
                <div className="flex flex-col">
                    <span className="text-[14px] font-medium">Document Name</span>
                    <span className="text-[12px] text-gray">File: File Name</span>
                    <span className="text-[12px] text-gray">Due date: 09/02/23</span>
                </div>
            </div>
            <div className="flex items-center">
                <Link href={`/view-doc/documentId`} className="bg-primary text-white px-2 py-1 rounded-xl">Open</Link>
            </div>
        </div>
        <div className="flex justify-between ">
            <div className="flex flex-col space-y-1">
                <span className="text-[14px]">Doc ID</span>
                <span className="text-[12px] text-gray">2234</span>
            </div>
            <div className="flex flex-col space-y-1">
                <span className="text-[14px]">Priority</span>
                <span className="text-[12px] text-priority-high">High</span>
            </div>
            <div className="flex flex-col space-y-1">
                <span className="text-[14px]">Status</span>
                <span className="text-[12px] text-status-inprogress">In Progress</span>
            </div>
        </div>
    </div>
  )
}

export default DocGridCell