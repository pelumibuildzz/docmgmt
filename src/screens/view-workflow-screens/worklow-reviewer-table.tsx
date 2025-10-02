import ReviewerTableRow from "@/screens/view-workflow-screens/reviewer-table-row"

const WorklowReviewerTable = () => {
  const dummyReviewers = [
    { id: 1, workflowNumber: "01", name: "Adibogun Pascal", role: "Reviewer" },
    { id: 2, workflowNumber: "02", name: "John Smith", role: "Reviewer" },
    { id: 3, workflowNumber: "03", name: "Sarah Johnson", role: "Reviewer" },
    { id: 4, workflowNumber: "04", name: "Michael Brown", role: "Reviewer" },
    { id: 5, workflowNumber: "05", name: "Emily Davis", role: "Approver" },
    { id: 6, workflowNumber: "06", name: "David Wilson", role: "Reviewer" }
  ];

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
            {dummyReviewers.map((reviewer) => (
              <ReviewerTableRow key={reviewer.id} reviewer={reviewer} />
            ))}
        </tbody>
    </table>
  )
}

export default WorklowReviewerTable