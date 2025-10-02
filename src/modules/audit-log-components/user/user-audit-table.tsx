import UserAuditTableRow from "@/modules/audit-log-components/user/user-audit-table-row"

interface UserAuditTableProps {
  onViewClick: () => void;
}

const UserAuditTable = ({ onViewClick }: UserAuditTableProps) => {
  const dummyUserAudits = [
    { id: 1, serialNumber: "01", action: "Deleted Document", user: "Adibogun Aminat", department: "Finance", trackingId: "RV443", lastUpdated: "09/12/2023", time: "9:45am" },
    { id: 2, serialNumber: "02", action: "Login Attempt", user: "John Smith", department: "IT", trackingId: "RV444", lastUpdated: "08/12/2023", time: "8:30am" },
    { id: 3, serialNumber: "03", action: "Password Changed", user: "Sarah Johnson", department: "HR", trackingId: "RV445", lastUpdated: "07/12/2023", time: "3:15pm" },
    { id: 4, serialNumber: "04", action: "Account Created", user: "Michael Brown", department: "Marketing", trackingId: "RV446", lastUpdated: "06/12/2023", time: "11:00am" },
    { id: 5, serialNumber: "05", action: "Permission Updated", user: "Emily Davis", department: "Operations", trackingId: "RV447", lastUpdated: "05/12/2023", time: "2:45pm" },
    { id: 6, serialNumber: "06", action: "Account Deactivated", user: "David Wilson", department: "Legal", trackingId: "RV448", lastUpdated: "04/12/2023", time: "4:20pm" }
  ];

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
            {dummyUserAudits.map((audit) => (
              <UserAuditTableRow key={audit.id} audit={audit} onViewClick={onViewClick} />
            ))}
        </tbody>
    </table>
  )
}

export default UserAuditTable