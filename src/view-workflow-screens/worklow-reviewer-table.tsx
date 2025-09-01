import ReviewerTableRow from "@/view-workflow-screens/reviewer-table-row"

const WorklowReviewerTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary font-medium">
            <tr className="flex justify-between rounded-xl p-4 bg-primary-lighter">
                <th className="">Workflow No.</th>
                <th className="">Name</th>
                <th className="">Role</th>
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