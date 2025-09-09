import { X } from 'lucide-react'

const NewFileModal = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black text-[16px] opacity-75 flex justify-center items-center">
      <div className="bg-white w-2/5 rounded-md shadow-md p-8 flex flex-col space-y-6 border-b-[.5px] border-gray-300">
        <div className='flex justify-between'>
            <h2>Create New File</h2>
            <X className="cursor-pointer text-gray" width={24} height={24} />
        </div>
        <div className='flex justify-between space-x-4'>
            <input type="text" placeholder='Input file name' className='w-full border-[.5px] border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-lighter'/>
            <button className='bg-primary text-white py-2 px-4 rounded-md w-fit self-end'>Continue</button>
            {/* create file button should call api and create file */}
        </div>
      </div>
    </div>
  )
}

export default NewFileModal