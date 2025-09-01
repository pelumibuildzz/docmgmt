import Link from "next/link"

const WorkflowTableRow = () => {
  return (
    <tr className="p-4 flex justify-between w-full rounded-xl border-gray border-[.5px]">
        <td className="">Date Created</td>
        <td className="">Workflow Name</td>
        <td className="">Created By</td>
        <td className="">Department</td>
        <td className="">No of Reviewers</td>
        <td className="px-2 py-1 bg-primary rounded-xl text-white"><Link href={"/workflow/1/view"}>View</Link></td>
    </tr>
  )
}

export default WorkflowTableRow