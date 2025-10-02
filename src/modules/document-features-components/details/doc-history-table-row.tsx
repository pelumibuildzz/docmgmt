import { Dot } from "lucide-react"

interface DocHistory {
  id: number;
  workflowNumber: string;
  name: string;
  role: string;
  status: string;
  statusColor: string;
  lastUpdated: string;
  time: string;
}

interface DocHistoryTableRowProps {
  history: DocHistory;
}

const DocHistoryTableRow = ({ history }: DocHistoryTableRowProps) => {
  return (
    <tr className="grid grid-cols-12 gap-4 p-4 border-b border-gray-300">
      <td className="col-span-2">{history.workflowNumber}</td>
      <td className="col-span-3">{history.name}</td>
      <td className="col-span-2">{history.role}</td>
      <td className={`col-span-2 ${history.statusColor}`}>{history.status}</td>
      <td className="col-span-3 flex items-center">{history.lastUpdated} <Dot width={24} height={24} className='m-1'/> {history.time}</td>
    </tr>
  )
}

export default DocHistoryTableRow