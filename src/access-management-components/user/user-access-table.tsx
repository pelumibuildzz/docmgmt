import UserAccessTableRows from '@/access-management-components/user/user-access-table-rows'

interface UserAccessData {
  [key: string]: {
    view?: boolean;
    update?: boolean;
    create?: boolean;
    send?: boolean;
    assign?: boolean;
    sign?: boolean;
    archive?: boolean;
    download?: boolean;
    delete?: boolean;
  };
}

interface UserAccessTableProps {
  accessData: UserAccessData;
  onAccessChange: (module: string, permission: string, checked: boolean) => void;
}

const UserAccessTable = ({ accessData, onAccessChange }: UserAccessTableProps) => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary font-medium">
            <tr className="grid grid-cols-11 gap-4 rounded-xl p-4 bg-primary-lighter">
                <th className="col-span-2">Actions</th>
                <th className="col-span-1">View</th>
                <th className="col-span-1">Update</th>
                <th className="col-span-1">Create</th>
                <th className="col-span-1">Send</th>
                <th className="col-span-1">Assign</th>
                <th className="col-span-1">Sign</th>
                <th className="col-span-1">Archive</th>
                <th className="col-span-1">Download</th>
                <th className="col-span-1">Delete</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray font-normal w-full">
            <UserAccessTableRows accessData={accessData} onAccessChange={onAccessChange} />
        </tbody>
    </table>
  )
}

export default UserAccessTable