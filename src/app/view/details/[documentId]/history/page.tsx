import DocHistoryTable from '@/modules/document-features-components/details/doc-history-table'
import Link from 'next/link'

const DocHistoryPage = () => {
  return (
    <div className='px-10 flex flex-col space-y-8 py-5'>
        <div className="ps-0.5 ">
            <div className="flex space-x-3">
                <Link href={"/view/details/1/metadata"} className="text-[16px] font-semibold text-gray py-3 px-4 border-[.5px] border-gray-300 rounded-xl">
                    <span>Metadata</span>
                </Link>
                <Link href={"/view/details/1/history"} className="text-[16px] font-semibold text-primary py-3 px-4  border-[.5px] border-gray-300 bg-primary-lighter rounded-xl">
                    <span>Workflow and Review History</span>
                </Link>
            </div>
        </div>
        <section className='w-full flex justify-center'>
            <DocHistoryTable />
        </section>
    </div>
  )
}

export default DocHistoryPage