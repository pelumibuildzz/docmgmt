import RecycleBinTableRow from '@/recycle-bin-components/recycle-bin-table-row'

const RecycleBinTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary">
            <tr className="grid grid-cols-12 gap-2 rounded-xl p-4 bg-primary-lighter text-left">
                <th className="col-span-2">Date Created</th>
                <th className="col-span-2">Doc Name</th>
                <th className="col-span-1">Doc ID</th>
                <th className="col-span-1">File Name</th>
                <th className="col-span-1">File ID</th>
                <th className="col-span-2">Deleted by</th>
                <th className="col-span-2">Deleted at</th>
                <th className="col-span-1">Actions</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray">
            <RecycleBinTableRow />
        </tbody>
    </table>
  )
}

export default RecycleBinTable