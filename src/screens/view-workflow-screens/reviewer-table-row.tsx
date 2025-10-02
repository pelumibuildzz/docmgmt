interface Reviewer {
  id: number;
  workflowNumber: string;
  name: string;
  role: string;
}

interface ReviewerTableRowProps {
  reviewer: Reviewer;
}

const ReviewerTableRow = ({ reviewer }: ReviewerTableRowProps) => {
  return (
    <tr className="p-4 grid grid-cols-6 gap-4 w-full rounded-xl border-gray-300 border-[.5px]">
        <td className="col-span-2">{reviewer.workflowNumber}</td>
        <td className="col-span-2">{reviewer.name}</td>
        <td className="col-span-2">{reviewer.role}</td>
    </tr>
  )
}

export default ReviewerTableRow