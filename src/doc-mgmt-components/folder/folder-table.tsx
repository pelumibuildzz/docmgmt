import FolderTableRow from "./folder-table-row"

const FolderTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary">
            <tr className="flex justify-between rounded-xl p-4 bg-primary-lighter">
                <th className="">Date Created</th>
                <th className="">File Name</th>
                <th className="">File ID</th>
                <th className="">No of Document</th>
                <th className="">Last Updated</th>
                <th className="">Actions</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray">
            <FolderTableRow />
        </tbody>
    </table>
  )
}

export default FolderTable