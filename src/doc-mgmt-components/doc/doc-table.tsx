import DocTableRow from "./doc-table-row"

const DocTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary">
            <tr className="flex justify-between rounded-xl p-4 bg-primary-lighter">
                <th className="">Date Created</th>
                <th className="">Doc Name</th>
                <th className="">Doc ID</th>
                <th className="">File Name</th>
                <th className="">File ID</th>
                <th className="">Status</th>
                <th className="">Priority</th>
                <th className="">Last Updated</th>
                <th className="">Due Date</th>
                <th className="">Actions</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray">
            <DocTableRow />
        </tbody>
    </table>
  )
}

export default DocTable