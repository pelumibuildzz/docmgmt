import { Dot } from 'lucide-react'

interface DocumentAudit {
  id: number;
  serialNumber: string;
  documentName: string;
  action: string;
  user: string;
  department: string;
  trackingId: string;
  lastUpdated: string;
  time: string;
}

interface DocumentAuditTableRowProps {
  audit: DocumentAudit;
  onViewClick: () => void;
}

const DocumentAuditTableRow = ({ audit, onViewClick }: DocumentAuditTableRowProps) => {
  return (
    <tr className="p-4 grid grid-cols-12 gap-4 w-full rounded-xl border-gray-300 border-[.5px]">
        <td className="col-span-1 ">{audit.serialNumber}</td>
        <td className="col-span-2 ">{audit.documentName}</td>
        <td className="col-span-2 ">{audit.action}</td>
        <td className="col-span-2 ">{audit.user}</td>
        <td className="col-span-1 ">{audit.department}</td>
        <td className="col-span-1 ">{audit.trackingId}</td>
        <td className="col-span-2  flex items-center">{audit.lastUpdated} <Dot width={24} height={24} className='m-1'/> {audit.time}</td>
        <td className="col-span-1  flex justify-start"><button onClick={onViewClick} className="px-2 py-1 bg-primary rounded-xl text-white">View</button></td>
    </tr>
  )
}

export default DocumentAuditTableRow