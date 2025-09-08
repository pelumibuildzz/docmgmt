import UserAuditTableRow from "@/audit-log-components/user/user-audit-table-row"


const UserAuditTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary font-medium">
            <tr className="grid grid-cols-12 gap-4 rounded-xl p-4 bg-primary-lighter text-left">
                <th className="col-span-1">S/N</th>
                <th className="col-span-2">Action</th>
                <th className="col-span-2">User</th>
                <th className="col-span-2">Department</th>
                <th className="col-span-2">Tracking Id</th>
                <th className="col-span-2">Last Updated</th>
                <th className="col-span-1">Action</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray font-normal">
            <UserAuditTableRow/>
        </tbody>
    </table>
  )
}

export default UserAuditTable