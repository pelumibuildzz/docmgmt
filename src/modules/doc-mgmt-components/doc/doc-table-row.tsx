import Link from "next/link"
import { Document } from "@/types/document"

interface DocTableRowProps {
  document: Document
}

const DocTableRow = ({ document }: DocTableRowProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-progress':
        return 'text-status-in-progress'
      case 'completed':
        return 'text-status-completed'
      case 'archived':
        return 'text-status-archived'
      case 'pending':
        return 'text-yellow-600'
      case 'under-review':
        return 'text-blue-600'
      default:
        return 'text-gray'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-priority-high'
      case 'medium':
        return 'text-priority-medium'
      case 'low':
        return 'text-priority-low'
      default:
        return 'text-gray'
    }
  }

  return (
    <tr className="p-4 grid grid-cols-12 gap-2 w-full rounded-xl border-gray-300 border-[.5px] text-left">
        <td className="col-span-1">{formatDate(document.dateCreated)}</td>
        <td className="col-span-2">{document.docName}</td>
        <td className="col-span-1">{document.docId}</td>
        <td className="col-span-2">{document.fileName}</td>
        <td className="col-span-1">{document.fileId}</td>
        <td className={`col-span-1 ${getStatusColor(document.status)}`}>{document.status}</td>
        <td className={`col-span-1 ${getPriorityColor(document.priority)}`}>{document.priority}</td>
        <td className="col-span-1">{formatTime(document.lastUpdated)}</td>
        <td className="col-span-1">{document.dueDate ? formatDate(document.dueDate) : 'No due date'}</td>
        <td className="col-span-1 flex justify-start">
          <Link href={`/view/doc/${document.id}`} className="px-2 py-1 bg-primary rounded-xl text-white">
            Open
          </Link>
        </td>
    </tr>
  )
}

export default DocTableRow