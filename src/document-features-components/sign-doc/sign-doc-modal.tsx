import { PlusIcon, X } from "lucide-react"

const SignDocModal = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black text-[16px] opacity-75 flex justify-center items-center">
      <div className="bg-white w-2/5 rounded-md shadow-md py-10">
        <div className="flex justify-between items-center px-10 py-2">
            <h2 className=" font-semibold mb-2">Sign Document</h2>
            <X className="cursor-pointer" width={24} height={24} />
        </div>
        <div className="flex flex-col justify-center items-center space-y-3 border-y border-dashed border-gray py-9 px-20 rounded-xl">
            <div className="flex space-x-2 items-center">
                <PlusIcon className="text-primary" width={24} height={24} />
                <span className="text-primary  font-semibold">Add Signature</span>
            </div>
            <span className="text-gray ">Click on the add button or drag a file here to add signature from files.</span>
        </div>
        <button className="text-primary  font-semibold">Use automated signature</button>
        <button className="bg-gray text-white py-3 px-4 rounded-md self-end  font-semibold">Sign Document</button>
      </div>
    </div>
  )
}

export default SignDocModal