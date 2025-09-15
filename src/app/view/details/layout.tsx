'use client'
import { ChevronsRight, FileText, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function DocumentDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()
  const handleGoBack = () => {
    router.back()
  }
  return (
    <div className='flex flex-col min-h-screen w-screen space-y-4'>
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
                <span className='text-[20px] font-medium'>Document Details</span>
            </div>
            <button onClick={handleGoBack}>
                <X width={24} height={24} className='text-gray cursor-pointer'/>
            </button>
        </header>
        {children}
    </div>
  )
}