import ReviewerTableRow from "@/view-workflow-screens/reviewer-table-row"

const WorklowReviewerTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary font-medium">
            <tr className="grid grid-cols-6 gap-4 rounded-xl p-4 bg-primary-lighter text-left">
                <th className="col-span-2">Workflow No.</th>
                <th className="col-span-2">Name</th>
                <th className="col-span-2">Role</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray font-normal">
            <ReviewerTableRow/>
            <ReviewerTableRow/>
            <ReviewerTableRow/>
            <ReviewerTableRow/>
        </tbody>
    </table>
  )
}

export default WorklowReviewerTable