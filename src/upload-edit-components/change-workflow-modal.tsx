import { ChevronDown, Plus } from 'lucide-react'

const ChangeWorkflowModal = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-[16px] flex justify-center items-center">
      <div className="bg-white w-2/5 rounded-xl shadow-md py-14 px-10 flex flex-col space-y-6 border-b-[.5px] border-gray-300">
        <h2 className="font-semibold">Change Workflow</h2>
        
        <div className="relative">
          <button className="w-full p-4 rounded-md border border-gray-300 bg-white text-left flex items-center justify-between">
            <span className="text-gray-500">Search and select workflow names</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
        
        <button className="flex space-x-2 text-primary items-center">
          <Plus className="" width={24} height={24} />
          <span>New Workflow</span>
        </button>
        
        <div className='flex space-x-3'>
          <button className='bg-primary text-white py-2 px-4 rounded-md w-fit'>Save Changes</button>
          <button className='py-2 px-4 rounded-md w-fit border border-gray-300'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default ChangeWorkflowModal
