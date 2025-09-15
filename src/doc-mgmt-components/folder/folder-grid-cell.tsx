import Image from "next/image"
import Link from "next/link"

interface FolderGridCellProps {
  onOpenModal: () => void
}

const FolderGridCell = ({ onOpenModal }: FolderGridCellProps) => {
  return (
    <div className="p-4 flex flex-col space-y-[22px] rounded-xl col-span-1 shadow-md">
        {/* Placeholder for future grid cell implementation */}
        <div className="flex justify-between">
            <div className="flex flex-col space-y-[7px]">
                <Image src={"/folder-open.png"} alt="Folder Open" className="text-gray" width={24} height={24} />
                <div className="flex flex-col">
                    <span className="text-[14px] font-medium">File Name</span>
                    <span className="text-[12px] text-gray">No of Documents: 22</span>
                </div>
            </div>
            <div className="flex items-center">
                <button 
                    className="bg-primary text-white px-2 py-1 rounded-xl"
                    onClick={onOpenModal}
                >
                    Open
                </button>
            </div>
        </div>
        <div className="flex justify-between ">
            <div className="flex flex-col space-y-1">
                <span className="text-[14px]">File ID</span>
                <span className="text-[12px] text-gray">2234</span>
            </div>
            <div className="flex flex-col space-y-1">
                <span className="text-[14px]">Last Updated</span>
                <span className="text-[12px] text-gray">09/02/23 9:40am</span>
            </div>
        </div>
    </div>
  )
}

export default FolderGridCell