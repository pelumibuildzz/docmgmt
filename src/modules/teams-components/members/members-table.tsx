import MembersTableRow from "@/modules/teams-components/members/members-table-row"

const MembersTable = () => {
  const dummyMembers = [
    { id: 1, serialNumber: "01", name: "Olalekan Tobi", department: "Finance", email: "olalekan.tobi@company.com", accessLevel: "1" },
    { id: 2, serialNumber: "02", name: "Aminat Adibogun", department: "Finance", email: "aminat.adibogun@company.com", accessLevel: "2" },
    { id: 3, serialNumber: "03", name: "John Smith", department: "IT", email: "john.smith@company.com", accessLevel: "2" },
    { id: 4, serialNumber: "04", name: "Sarah Johnson", department: "HR", email: "sarah.johnson@company.com", accessLevel: "3" },
    { id: 5, serialNumber: "05", name: "Michael Brown", department: "Marketing", email: "michael.brown@company.com", accessLevel: "1" },
    { id: 6, serialNumber: "06", name: "Emily Davis", department: "Operations", email: "emily.davis@company.com", accessLevel: "2" }
  ];

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
            {dummyMembers.map((member) => (
              <MembersTableRow key={member.id} member={member} />
            ))}
        </tbody>
    </table>
  )
}

export default MembersTable