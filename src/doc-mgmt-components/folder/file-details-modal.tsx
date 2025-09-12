import { X } from "lucide-react"

const FileDetailsModal = () => {
  return (
        <div className="h-screen px-6 py-10 flex flex-col space-y-6 text-gray text-[14px] absolute right-0 top-0 w-[30%] bg-white shadow-2xl overflow-y-auto">
        <div className="w-full flex justify-between text-black">
            <h1 className="font-medium text-[20px]">File Details</h1>
            <X width={24} height={24} />
        </div>
        <div className="w-full flex flex-col px-2 py-4 space-y-1.5 border-gray-300 border-[.5px] rounded-xl">
            <div className="w-full flex justify-between">
                <h2 className="font-medium">File Name:</h2>
                <h3>Student Admin</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">File ID:</h2>
                <h3>123456</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">No. Of Documents:</h2>
                <h3>23</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Created at:</h2>
                <h3 className="">09/02/2023</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Created by:</h2>
                <h3 className="">Abidogun Aminat</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Last Updated:</h2>
                <h3 className="">09/12/2023</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Size:</h2>
                <h3 className="">34kb</h3>
            </div>
        </div>
    </div>
  )
}

export default FileDetailsModal