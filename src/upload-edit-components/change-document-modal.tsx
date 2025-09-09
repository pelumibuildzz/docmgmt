import { Plus } from 'lucide-react'

const ChangeDocumentModal = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black text-[16px] opacity-75 flex justify-center items-center">
      <div className="bg-white w-2/5 rounded-md shadow-md py-14 px-10 flex flex-col space-y-6 border-b-[.5px] border-gray-300">
        <h2 className="font-semibold">Change Document</h2>
        <p className="text-gray-600">Select and add document from your files</p>
        
        <div className="border-dashed border-2 border-gray-300 rounded-lg px-12 py-6 flex flex-col justify-center items-center space-y-3">
          <p className="text-primary flex space-x-2 font-medium ">
            <Plus className="" width={24} height={24} />
            <span className="">Add Document</span>
          </p>
          <p className="text-gray text-center text-sm">Click on the add button or drag a file here to add document</p>
        </div>
        
        <div className='flex space-x-3'>
          <button className='bg-primary text-white py-2 px-4 rounded-md w-fit'>Save Changes</button>
          <button className='py-2 px-4 rounded-md w-fit border border-gray-300'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default ChangeDocumentModal
