import MembersTableRow from "@/teams-components/members/members-table-row"
const MembersTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary">
            <tr className="flex justify-between rounded-xl p-4 bg-primary-lighter">
                <th className="">S/N</th>
                <th className="">Name</th>
                <th className="">Department</th>
                <th className="">Email</th>
                <th className="">Access Level</th>
                <th className="">Actions</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray">
            <MembersTableRow />
        </tbody>
    </table>
  )
}

export default MembersTable