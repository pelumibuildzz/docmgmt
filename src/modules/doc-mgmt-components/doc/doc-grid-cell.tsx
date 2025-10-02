import Image from "next/image"
import Link from "next/link"
import { Document } from "@/types/document"

interface DocGridCellProps {
  document: Document
}

const DocGridCell = ({ document }: DocGridCellProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
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

  const formatStatus = (status: string) => {
    return status.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  return (
    <div className="p-4 flex flex-col space-y-[22px] rounded-xl col-span-1 shadow-md">
        <div className="flex justify-between">
            <div className="flex flex-col space-y-[7px]">
                <Image src={"/file.png"} alt="File" className="text-gray" width={24} height={24} />
                <div className="flex flex-col">
                    <span className="text-[14px] font-medium">{document.docName}</span>
                    <span className="text-[12px] text-gray">File: {document.fileName}</span>
                    <span className="text-[12px] text-gray">
                      Due date: {document.dueDate ? formatDate(document.dueDate) : 'No due date'}
                    </span>
                </div>
            </div>
            <div className="flex items-center">
                <Link href={`/view/doc/${document.id}`} className="bg-primary text-white px-2 py-1 rounded-xl">
                  Open
                </Link>
            </div>
        </div>
        <div className="flex justify-between ">
            <div className="flex flex-col space-y-1">
                <span className="text-[14px]">Doc ID</span>
                <span className="text-[12px] text-gray">{document.docId}</span>
            </div>
            <div className="flex flex-col space-y-1">
                <span className="text-[14px]">Priority</span>
                <span className={`text-[12px] ${getPriorityColor(document.priority)}`}>
                  {document.priority.charAt(0).toUpperCase() + document.priority.slice(1)}
                </span>
            </div>
            <div className="flex flex-col space-y-1">
                <span className="text-[14px]">Status</span>
                <span className={`text-[12px] ${getStatusColor(document.status)}`}>
                  {formatStatus(document.status)}
                </span>
            </div>
        </div>
    </div>
  )
}

export default DocGridCell