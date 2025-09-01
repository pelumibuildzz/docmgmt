import DepartmentTableRow from "@/teams-components/department/departments-table-row"
const DepartmentTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary">
            <tr className="flex justify-between rounded-xl p-4 bg-primary-lighter">
                <th className="">S/N</th>
                <th className="">Name</th>
                <th className="">Department</th>
                <th className="">Actions</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray">
            <DepartmentTableRow />
        </tbody>
    </table>
  )
}

export default DepartmentTable