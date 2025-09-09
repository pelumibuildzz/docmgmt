import { X } from 'lucide-react'

const EditNameModal = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black text-[16px] opacity-75 flex justify-center items-center">
      <div className="bg-white w-2/5 rounded-md shadow-md py-14 px-10 flex flex-col space-y-6 border-b-[.5px] border-gray-300">
        <h2>Edit Document Name</h2>
        <div className="relative flex items-center w-full">
          <img src="/upload/file.png" alt="File" className="w-6 h-6 absolute left-3" />
          <input
            type="text"
            placeholder='Input file name'
            className='w-full border-[.5px] border-gray-300 rounded-md py-2 pl-12 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-lighter'
          />
          <button type="button" className="absolute right-3 text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className='flex space-x-3'>
            <button className='bg-primary text-white py-2 px-4 rounded-md w-fit'>Save Changes</button>
            <button className='py-2 px-4 rounded-md w-fit border border-gray-300'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default EditNameModal