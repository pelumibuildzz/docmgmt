import WorkflowTableRow from "./workflow-table-row"

const WorkflowTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary font-medium">
            <tr className="flex justify-between rounded-xl p-4 bg-primary-lighter">
                <th className="">Date Created</th>
                <th className="">Workflow Name</th>
                <th className="">Created By</th>
                <th className="">Department</th>
                <th className="">No of Reviewers</th>
                <th className="">Action</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray font-normal">
            <WorkflowTableRow />
            <WorkflowTableRow />
            <WorkflowTableRow />
        </tbody>
    </table>
  )
}

export default WorkflowTable