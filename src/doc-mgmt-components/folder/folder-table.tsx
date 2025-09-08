import FolderTableRow from "./folder-table-row"

const FolderTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary font-medium">
            <tr className="grid grid-cols-12 gap-4 rounded-xl p-4 bg-primary-lighter text-left">
                <th className="col-span-2">Date Created</th>
                <th className="col-span-2">File Name</th>
                <th className="col-span-2">File ID</th>
                <th className="col-span-2">No of Document</th>
                <th className="col-span-2">Last Updated</th>
                <th className="col-span-2">Actions</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray font-normal">
            <FolderTableRow />
        </tbody>
    </table>
  )
}

export default FolderTable