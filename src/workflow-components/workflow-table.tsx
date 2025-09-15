import WorkflowTableRow from "./workflow-table-row"

const WorkflowTable = () => {
  const dummyWorkflows = [
    { id: 1, dateCreated: "09/12/2023", workflowName: "Student Admin", createdBy: "Adibogun Aminat", department: "Finance", numberOfReviewers: 8 },
    { id: 2, dateCreated: "08/11/2023", workflowName: "Budget Approval", createdBy: "John Smith", department: "Finance", numberOfReviewers: 5 },
    { id: 3, dateCreated: "07/10/2023", workflowName: "HR Onboarding", createdBy: "Sarah Johnson", department: "HR", numberOfReviewers: 4 },
    { id: 4, dateCreated: "06/09/2023", workflowName: "Marketing Campaign", createdBy: "Michael Brown", department: "Marketing", numberOfReviewers: 6 },
    { id: 5, dateCreated: "05/08/2023", workflowName: "IT Security Review", createdBy: "Emily Davis", department: "IT", numberOfReviewers: 7 },
    { id: 6, dateCreated: "04/07/2023", workflowName: "Legal Compliance", createdBy: "David Wilson", department: "Legal", numberOfReviewers: 3 }
  ];

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
            {dummyWorkflows.map((workflow) => (
              <WorkflowTableRow key={workflow.id} workflow={workflow} />
            ))}
        </tbody>
    </table>
  )
}

export default WorkflowTable