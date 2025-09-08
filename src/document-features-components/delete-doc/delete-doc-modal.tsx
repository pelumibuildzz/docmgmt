import { Check, X } from 'lucide-react'
import Link from 'next/link'

const DeleteDocModal = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black text-[16px] opacity-75 flex justify-center items-center">
      <div className="bg-white w-2/5 rounded-md shadow-md p-8 flex flex-col space-y-6">
        <div className='flex justify-end p-1.5'><X className="cursor-pointer" width={24} height={24} /></div>
        <span className='text-center '>Are you sure you want to delete this document? </span>
        <div className='flex space-x-3 w-fit'>
            <button className='border-[.5px] border-gray-300 text-gray py-2 px-4 rounded-md'>Cancel</button>
            <button className='bg-red-500 text-white py-2 px-4 rounded-md'>Delete Document</button>
        </div>
      </div>
    </div>
  )
}

const successfulDelete = () => {
    // Add logic for successful delete
    return (
    <div className="absolute top-0 left-0 w-full h-full bg-black text-[16px] opacity-75 flex justify-center items-center">
      <div className="bg-white w-2/5 rounded-md shadow-md p-8 flex flex-col space-y-6">
        <X className="text-gray-500 self-end" width={56} height={56} />
        <Check className="text-green-500 self-center" width={56} height={56} />
        <span className='text-center'>Your document has been successfully deleted.</span>
        <Link href={"/dashboard"} className='p-4 bg-primary text-white rounded-md self-center w-fit'>Back to Dashboard</Link>
      </div>
    </div>
  )
}

export default DeleteDocModal