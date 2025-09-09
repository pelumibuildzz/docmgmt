import MinuteComponent from '@/document-features-components/minute/minute-component'
import { ChevronsRight, FileText, Image, Paperclip, Plus, Smile, X } from 'lucide-react'
import Link from 'next/link'

const DocMinutesPage = () => {
  return (
    <div className='flex flex-col min-h-screen w-screen space-y-6'>
        <header className='flex justify-between items-center py-4 px-10 bg-primary-lighter border-b-[.5px] border-gray-300'>
            <div className='flex space-x-4 items-center'>
                <div className='flex space-x-2'>
                    <FileText width={56} height={56} className='text-gray'/>
                    <div className='flex flex-col'>
                        <h2 className='text-[20px] font-medium'>Document Name</h2>
                        <h3 className='text-gray text-[14px]'>File: File Name</h3>
                    </div>
                </div>
                <ChevronsRight className='text-gray' width={24} height={24}/>
                <span className='text-[20px] font-medium'>Document Minutes</span>
            </div>
            <Link href={"/dashboard/knowledge-management"}>
                <X width={24} height={24} className='text-gray cursor-pointer'/>
            </Link>
        </header>
        <div className='px-[120px] flex flex-col space-y-9 w-9/12'>
            <button className='w-fit flex space-x-2 text-primary items-center border border-gray-300 py-4 px-3 rounded-lg self-end'>
                <span>Add Minutes</span>
                <Plus width={24} height={24} className=''/>
            </button>
            {/* <AddMinute /> When the button is clicked, it should show the AddMinute component */}

            <div className='py-10 rounded-[20px] flex flex-col space-y-6 border-[.5px] border-gray-300'>
                <MinuteComponent />
                <MinuteComponent />
                <MinuteComponent />
            </div>
        </div>
    </div>
  )
}

export default DocMinutesPage