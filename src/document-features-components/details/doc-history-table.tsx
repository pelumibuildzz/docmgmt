import DocHistoryTableRow from '@/document-features-components/details/doc-history-table-row'

const DocHistoryTable = () => {
  return (
    <table className="w-8/12 flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary">
            <tr className="grid grid-cols-12 gap-4 rounded-xl p-4 bg-primary-lighter text-left">
                <th className="col-span-2">Workflow No.</th>
                <th className="col-span-3">Name</th>
                <th className="col-span-2">Role</th>
                <th className="col-span-2">Status</th>
                <th className="col-span-3">Last Updated</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray">
            <DocHistoryTableRow />
        </tbody>
    </table>
  )
}

export default DocHistoryTable