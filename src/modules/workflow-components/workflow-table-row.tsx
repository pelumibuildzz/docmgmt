import Link from "next/link"

interface Workflow {
  id: number;
  dateCreated: string;
  workflowName: string;
  createdBy: string;
  department: string;
  numberOfReviewers: number;
}

interface WorkflowTableRowProps {
  workflow: Workflow;
}

const WorkflowTableRow = ({ workflow }: WorkflowTableRowProps) => {
  return (
    <tr className="p-4 grid grid-cols-12 gap-4 w-full rounded-xl border-gray-300 border-[.5px]">
        <td className="col-span-2">{workflow.dateCreated}</td>
        <td className="col-span-2">{workflow.workflowName}</td>
        <td className="col-span-2">{workflow.createdBy}</td>
        <td className="col-span-2">{workflow.department}</td>
        <td className="col-span-2">{workflow.numberOfReviewers}</td>
        <td className="col-span-2 flex justify-start"><Link href={`/workflow/${workflow.id}/view`} className="px-2 py-1 bg-primary rounded-xl text-white">View</Link></td>
    </tr>
  )
}

export default WorkflowTableRow