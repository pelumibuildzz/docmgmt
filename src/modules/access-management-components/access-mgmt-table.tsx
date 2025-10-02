import React from 'react'
import AccessMgmtTableRow from '@/modules/access-management-components/access-mgmt-table-row'

const AccessMgmtTable = () => {
  const dummyUsers = [
    { id: 1, name: "Aminat Adibogun", email: "adibogun@gmail.com", department: "Finance" },
    { id: 2, name: "John Smith", email: "john.smith@company.com", department: "IT" },
    { id: 3, name: "Sarah Johnson", email: "sarah.johnson@company.com", department: "HR" },
    { id: 4, name: "Michael Brown", email: "michael.brown@company.com", department: "Marketing" },
    { id: 5, name: "Emily Davis", email: "emily.davis@company.com", department: "Operations" },
    { id: 6, name: "David Wilson", email: "david.wilson@company.com", department: "Legal" }
  ];

  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary font-medium">
            <tr className="grid grid-cols-10 gap-4 rounded-xl p-4 bg-primary-lighter">
                <th className="col-span-1">S/N</th>
                <th className="col-span-2">User</th>
                <th className="col-span-3">Email</th>
                <th className="col-span-2">Department</th>
                <th className="col-span-2">Access</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray font-normal">
            {dummyUsers.map((user) => (
              <AccessMgmtTableRow key={user.id} user={user} />
            ))}
        </tbody>
    </table>
  )
}

export default AccessMgmtTable