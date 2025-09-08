import DepartmentTableRow from "@/teams-components/department/departments-table-row"
const DepartmentTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary">
            <tr className="grid grid-cols-8 gap-4 rounded-xl p-4 bg-primary-lighter text-left">
                <th className="col-span-1">S/N</th>
                <th className="col-span-2">Name</th>
                <th className="col-span-3">Department</th>
                <th className="col-span-2">Actions</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray">
            <DepartmentTableRow />
        </tbody>
    </table>
  )
}

export default DepartmentTable