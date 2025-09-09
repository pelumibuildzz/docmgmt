import { Plus } from 'lucide-react'
import Link from 'next/link'

const DocMetaDataPage = () => {
  return (
    <div className='px-10 flex flex-col space-y-10 py-5'>
        <div className="ps-0.5 ">
            <div className="flex space-x-3">
                <Link href={"/view/details/1/metadata"} className="text-[16px] font-semibold text-primary py-3 px-4 bg-primary-lighter  border-[.5px] border-gray-300 rounded-xl">
                    <span>Metadata</span>
                </Link>
                <Link href={"/view/details/1/history"} className="text-[16px] font-semibold text-gray py-3 px-4 border-[.5px] border-gray-300 rounded-xl">
                    <span>Workflow and Review History</span>
                </Link>
            </div>
        </div>
        <section className='flex flex-col w-4/12 text-[16px]'>
            <div className='flex flex-col space-y-1.5 p-4'>
                <h4 className='p-2'>Document Name: Aminat Admin</h4>
                <h4 className='p-2'>Document ID: 965</h4>
                <h4 className='p-2'>File Name: Student Admin</h4>
                <h4 className='p-2'>File ID: 9876Y</h4>
                <h4 className='p-2'>Created: 09/02/2023</h4>
                <h4 className='p-2'>Created By: Adibogun Aminat</h4>
                <h4 className='p-2'>Last Updated: 09/12/2023</h4>
                <h4 className='p-2'>Due Date: 09/12/2023</h4>
                <h4 className='p-2'>Priority: <span className='text-priority-high'>High</span></h4>
                <h4 className='p-2'>Status: Ongoing Review</h4>
                <h4 className='p-2'>Time Remaining: 02hrs: 56mins: 45secs</h4>
                <h4 className='p-2'>Size: 343kb</h4>
            </div>
            <button className='w-fit bg-primary text-white p-3 rounded-lg flex space-x-2 items-center self-end'>
                <span>Add Metadata</span>
                <Plus className='' width={20} height={20} />
                {/* When clicked add an input below the other metadata and 2 buttons below it saying save changes and cancel */}
            </button>
        </section>
    </div>

  )
}

export default DocMetaDataPage