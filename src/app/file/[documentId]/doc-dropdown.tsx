import { ArchiveRestore, Download, Mail,  Pencil,  Trash2 } from "lucide-react"
import Link from "next/link";

const DocDropdown = () => {
  return (
    <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-full">
        <div className="p-2">
            <Link href={"/edit-document/1"} 
            className="w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 flex space-x-4">
                <Pencil width={24} height={24} />
                <span className="text-[16px]">Edit Document</span>
            </Link>
            <button className="w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 flex space-x-4">
                <Download width={24} height={24} />
                <span className="text-[16px]">Download Document</span>
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 flex space-x-4">
                <Mail width={24} height={24} />
                <span className="text-[16px]">Send via Email</span>
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 flex space-x-4">
                <ArchiveRestore width={24} height={24} />
                <span className="text-[16px]">Archive Document</span>
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 flex space-x-4">
                <Trash2 width={24} height={24} />
                <span className="text-[16px]">Delete Document</span>
            </button>
        </div>
    </div>
  )
}

export default DocDropdown