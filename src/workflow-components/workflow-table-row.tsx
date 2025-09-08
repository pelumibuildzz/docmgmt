import Link from "next/link"

const WorkflowTableRow = () => {
  return (
    <tr className="p-4 grid grid-cols-12 gap-4 w-full rounded-xl border-gray border-[.5px]">
        <td className="col-span-2">Date Created</td>
        <td className="col-span-2">Workflow Name</td>
        <td className="col-span-2">Created By</td>
        <td className="col-span-2">Department</td>
        <td className="col-span-2">No of Reviewers</td>
        <td className="col-span-2 flex justify-start"><Link href={"/workflow/1/view"} className="px-2 py-1 bg-primary rounded-xl text-white">View</Link></td>
    </tr>
  )
}

export default WorkflowTableRow