import React from 'react'
import AccessMgmtTableRow from '@/access-management-components/access-mgmt-table-row'

const AccessMgmtTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary font-medium">
            <tr className="flex justify-between rounded-xl p-4 bg-primary-lighter">
                <th className="">S/N</th>
                <th className="">User</th>
                <th className="">Email</th>
                <th className="">Department</th>
                <th className="">Access</th>
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