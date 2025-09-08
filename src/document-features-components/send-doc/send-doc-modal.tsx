import { Check, X } from 'lucide-react'
import Link from 'next/link'
const SendDocModal = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black text-[16px] opacity-75 flex justify-center items-center">
      <div className="bg-white w-2/5 rounded-md shadow-md py-10 flex flex-col space-y-6 border-b-[.5px] border-gray-300">
        <div className='flex justify-between px-10 py-2'>
            <h2>Send Via Email</h2>
            <X className="cursor-pointer" width={24} height={24} />
        </div>
        <div className='flex flex-col space-y-8 px-10'>
            <div className='flex flex-col space-y-2.5'>
                <label className='text-[16px] font-medium'>Add Email (s)</label>
                <input type="email" placeholder='Input email and separate emails with comma for multiple emails' className='border-[.5px] border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-lighter'/>
            </div>
            <div className='flex flex-col space-y-2.5'>
                <label className='text-[16px] font-medium'>Add Message</label>
                <textarea placeholder='Add a message (optional)' className='border-[.5px] border-gray-300 rounded-md py-2 px-4 h-32 focus:outline-none focus:ring-2 focus:ring-primary-lighter'/>
            </div>
            <button className='bg-primary text-white py-2 px-4 rounded-md w-fit self-end'>Send</button>
        </div>
      </div>
    </div>
  )
}
const successfulSend = () => {
    // Add logic for successful send
    return (
    <div className="absolute top-0 left-0 w-full h-full bg-black text-[16px] opacity-75 flex justify-center items-center">
      <div className="bg-white w-2/5 rounded-md shadow-md p-8 flex flex-col space-y-6">
        <X className="text-gray-500 self-end" width={56} height={56} />
        <Check className="text-green-500 self-center" width={56} height={56} />
        <span className='text-center'>Your document has been sent successfully.</span>
        <Link href={"/dashboard"} className='p-4 bg-primary text-white rounded-md self-center w-fit'>Back to Dashboard</Link>
      </div>
    </div>
  )
}
    
export default SendDocModal