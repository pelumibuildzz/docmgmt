import { Check, X } from 'lucide-react'
import Link from 'next/link'

const DownloadDocModal = () => {
    // Add logic for successful download
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black text-[16px] opacity-75 flex justify-center items-center">
      <div className="bg-white w-2/5 rounded-md shadow-md p-8 flex flex-col space-y-6">
        <X className="text-gray-500 self-end" width={56} height={56} />
        <Check className="text-green-500 self-center" width={56} height={56} />
        <span className='text-center'>Your document has been downloaded successfully.</span>
        <Link href={"/dashboard"} className='p-4 bg-primary text-white rounded-md self-center w-fit'>Back to Dashboard</Link>
      </div>
    </div>
  )
}

export default DownloadDocModal