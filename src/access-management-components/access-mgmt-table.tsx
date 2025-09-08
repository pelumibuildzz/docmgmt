import React from 'react'
import AccessMgmtTableRow from '@/access-management-components/access-mgmt-table-row'

const AccessMgmtTable = () => {
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
            <AccessMgmtTableRow />
            <AccessMgmtTableRow />
            <AccessMgmtTableRow />
            <AccessMgmtTableRow />
        </tbody>
    </table>
  )
}

export default AccessMgmtTable