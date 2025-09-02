import UserAccessTableRows from '@/access-management-components/user/user-access-table-rows'

const UserAccessTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary font-medium">
            <tr className="grid grid-cols-10 rounded-xl p-4 bg-primary-lighter">
                <th className="grid-cols-1">Actions</th>
                <th className="grid-cols-1">View</th>
                <th className="grid-cols-1">Update</th>
                <th className="grid-cols-1">Create</th>
                <th className="grid-cols-1">Send</th>
                <th className="grid-cols-1">Assign</th>
                <th className="grid-cols-1">Sign</th>
                <th className="grid-cols-1">Archive</th>
                <th className="grid-cols-1">Download</th>
                <th className="grid-cols-1">Delete</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray font-normal w-full">
            <UserAccessTableRows />
        </tbody>
    </table>
  )
}

export default UserAccessTable