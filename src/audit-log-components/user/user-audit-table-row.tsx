import { Dot } from 'lucide-react'
import React from 'react'

const UserAuditTableRow = () => {
  return (
    <tr className="p-4 grid grid-cols-12 gap-4 w-full rounded-xl border-gray border-[.5px]">
        <td className="col-span-1">01</td>
        <td className="col-span-2">Deleted Document</td>
        <td className="col-span-2">Adibogun Aminat</td>
        <td className="col-span-2">Finance</td>
        <td className="col-span-2">RV443</td>
        <td className="col-span-2 flex items-center">09/12/2023 <Dot width={24} height={24} className='m-1'/> 9:45am</td>
        <td className="col-span-1 flex justify-start"><button className="px-2 py-1 bg-primary rounded-xl text-white">View</button></td>
    </tr>
  )
}

export default UserAuditTableRow