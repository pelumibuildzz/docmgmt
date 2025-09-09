import DocGrid from "@/doc-mgmt-components/doc/doc-grid"
import DocTable from "@/doc-mgmt-components/doc/doc-table"
import FolderTable from "@/doc-mgmt-components/folder/folder-table"
import { ChevronDown, ChevronLeft, LayoutGrid, List } from "lucide-react"
import Link from "next/link"

// Queries will be taken from the path and query parameters and used to query the api
// Result will be passed as a prop into the DocTable or DocGrid component to render
const Docpage = () => {
  return (
    <main className="w-full py-8 px-6 flex flex-col space-y-5">
        <div className="flex flex-col space-y-6">
            <div className="flex justify-between">
                <div className="flex space-x-4 rounded-xl border-gray border-[.5px]">
                    <button className="px-3 py-2 text-gray rounded-l-xl">File</button>
                    <button className="px-3 py-2 bg-primary-light text-primary rounded-r-xl">Document</button>
                </div>
                {/* <Link href={"/dashboard"} className="flex space-x-4 rounded-xl border-gray border-[.5px] p-2 items-center text-gray">
                    <ChevronLeft className="" width={24} height={24} />
                    <span className="text-[16px] font-medium">Go Back</span>
                </Link> */}
                <div className="">
                    <button className=""><List className="p-2 bg-primary-light text-primary border-[.2px] border-r-0 border-gray" width={34} height={34} /></button>
                    <button className=""><LayoutGrid className="p-2 rounded-r-xl border-[.2px] border-l-0 border-gray" width={34} height={34} /></button>
                </div>
            </div>
            <div className="w-full flex justify-end space-x-3 text-[16px] font-semibold">
                {/* Add filter functionality */}
                <button className="px-3 py-2 rounded-lg text-primary flex space-x-2 border-[.5px]">
                    <span>Filter By</span>
                    <ChevronDown className="" width={24} height={24} />
                </button>
                <Link href="/upload-doc" className="px-4 py-2 bg-primary rounded-xl text-white">Upload Document</Link>
            </div>
        </div>
        <DocTable />
    </main>
  )
}

export default Docpage