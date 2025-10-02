import { Dot } from 'lucide-react'
import React from 'react'

interface UserAudit {
  id: number;
  serialNumber: string;
  action: string;
  user: string;
  department: string;
  trackingId: string;
  lastUpdated: string;
  time: string;
}

interface UserAuditTableRowProps {
  audit: UserAudit;
  onViewClick: () => void;
}

const UserAuditTableRow = ({ audit, onViewClick }: UserAuditTableRowProps) => {
  return (
    <tr className="p-4 grid grid-cols-12 gap-4 w-full rounded-xl border-gray-300 border-[.5px]">
        <td className="col-span-1">{audit.serialNumber}</td>
        <td className="col-span-2">{audit.action}</td>
        <td className="col-span-2">{audit.user}</td>
        <td className="col-span-2">{audit.department}</td>
        <td className="col-span-2">{audit.trackingId}</td>
        <td className="col-span-2 flex items-center">{audit.lastUpdated} <Dot width={24} height={24} className='m-1'/> {audit.time}</td>
        <td className="col-span-1 flex justify-start"><button onClick={onViewClick} className="px-2 py-1 bg-primary rounded-xl text-white">View</button></td>
    </tr>
  )
}

export default UserAuditTableRow