import WorkflowTableRow from "./workflow-table-row"

const WorkflowTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary font-medium">
            <tr className="grid grid-cols-12 gap-4 rounded-xl p-4 bg-primary-lighter text-left">
                <th className="col-span-2">Date Created</th>
                <th className="col-span-2">Workflow Name</th>
                <th className="col-span-2">Created By</th>
                <th className="col-span-2">Department</th>
                <th className="col-span-2">No of Reviewers</th>
                <th className="col-span-2">Action</th>
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