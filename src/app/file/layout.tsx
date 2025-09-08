import { FileText, X } from 'lucide-react'
import Link from 'next/link'


export default function ViewFileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col min-h-screen w-screen space-y-4'>
        <header className='flex justify-between py-4 px-10 bg-primary-lighter border-b-[.5px] border-gray-300'>
            <div className='flex space-x-2'>
                <FileText width={56} height={56} className='text-gray'/>
                <div className='flex flex-col'>
                    <h2 className='text-[20px] font-medium'>Document Name</h2>
                    <h3 className='text-gray text-[14px['>File: File Name</h3>
                </div>
            </div>
            <Link href={"/dashboard/knowledge-management"}>
                <X width={24} height={24} className='text-gray cursor-pointer'/>
            </Link>
        </header>
        {children}
    </div>
  )
}