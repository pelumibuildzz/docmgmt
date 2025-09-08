import { Dot, X } from "lucide-react"

const DocumentAuditLogModal = () => {
  return (
    <div className="h-screen px-6 py-10 flex flex-col space-y-6 text-gray text-[14px] absolute right-0 top-0 w-[30%] bg-white shadow-2xl overflow-y-auto">
        <div className="w-full flex justify-between text-black">
            <h1 className="font-medium text-[20px]">Document History</h1>
            <X width={24} height={24} />
        </div>
        <div className="w-full flex justify-between items-center">
            <div className="flex flex-col space-y-1">
                <h2 className="font-medium">Document Name: Aminat Admin</h2>
                <h2 className="font-medium">Created By: Abidogun Aminat</h2>
                <h2 className="font-medium">Created At: 09/12/2023</h2>
            </div>
            <button className="p-3 bg-primary rounded-xl text-white">Download History</button>
        </div>
        <div className="w-full flex flex-col px-2 py-4 space-y-1.5 border-gray-300 border-[.5px] rounded-xl">
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Action</h2>
                <h3>Reviewed Document</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Performed by</h2>
                <h3>Abidogun Aminat</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Department</h2>
                <h3>Finance</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Performed at</h2>
                <h3 className="flex items-center">09/12/2023 <Dot width={24} height={24} className='m-1'/> 9:45am</h3>
            </div>
        </div>
        <div className="w-full flex flex-col px-2 py-4 space-y-1.5 border-gray-300 border-[.5px] rounded-xl">
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Action</h2>
                <h3>Reviewed Document</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Performed by</h2>
                <h3>Abidogun Aminat</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Department</h2>
                <h3>Finance</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Performed at</h2>
                <h3 className="flex items-center">09/12/2023 <Dot width={24} height={24} className='m-1'/> 9:45am</h3>
            </div>
        </div>
        <div className="w-full flex flex-col px-2 py-4 space-y-1.5 border-gray-300 border-[.5px] rounded-xl">
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Action</h2>
                <h3>Reviewed Document</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Performed by</h2>
                <h3>Abidogun Aminat</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Department</h2>
                <h3>Finance</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Performed at</h2>
                <h3 className="flex items-center">09/12/2023 <Dot width={24} height={24} className='m-1'/> 9:45am</h3>
            </div>
        </div>
        <div className="w-full flex flex-col px-2 py-4 space-y-1.5 border-gray-300 border-[.5px] rounded-xl">
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Action</h2>
                <h3>Reviewed Document</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Performed by</h2>
                <h3>Abidogun Aminat</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Department</h2>
                <h3>Finance</h3>
            </div>
            <div className="w-full flex justify-between">
                <h2 className="font-medium">Performed at</h2>
                <h3 className="flex items-center">09/12/2023 <Dot width={24} height={24} className='m-1'/> 9:45am</h3>
            </div>
        </div>

    </div>
  )
}

export default DocumentAuditLogModal