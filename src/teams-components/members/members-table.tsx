import MembersTableRow from "@/teams-components/members/members-table-row"
const MembersTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary">
            <tr className="grid grid-cols-12 gap-4 rounded-xl p-4 bg-primary-lighter text-left">
                <th className="col-span-1">S/N</th>
                <th className="col-span-2">Name</th>
                <th className="col-span-2">Department</th>
                <th className="col-span-3">Email</th>
                <th className="col-span-2">Access Level</th>
                <th className="col-span-2">Actions</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray">
            <MembersTableRow />
        </tbody>
    </table>
  )
}

export default MembersTable