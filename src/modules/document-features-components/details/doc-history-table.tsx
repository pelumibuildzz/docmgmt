import DocHistoryTableRow from '@/modules/document-features-components/details/doc-history-table-row'

const DocHistoryTable = () => {
  const dummyDocHistory = [
    { id: 1, workflowNumber: "01", name: "John Doe", role: "Primary Reviewer", status: "Reviewed", statusColor: "text-status-completed", lastUpdated: "09/12/2023", time: "9:45am" },
    { id: 2, workflowNumber: "02", name: "Jane Smith", role: "Technical Reviewer", status: "In Progress", statusColor: "text-status-ongoing", lastUpdated: "08/12/2023", time: "2:30pm" },
    { id: 3, workflowNumber: "03", name: "Michael Johnson", role: "Compliance Reviewer", status: "Pending", statusColor: "text-status-pending", lastUpdated: "07/12/2023", time: "11:15am" },
    { id: 4, workflowNumber: "04", name: "Sarah Brown", role: "Content Reviewer", status: "Approved", statusColor: "text-status-completed", lastUpdated: "06/12/2023", time: "4:20pm" },
    { id: 5, workflowNumber: "05", name: "David Wilson", role: "Final Approver", status: "Rejected", statusColor: "text-status-due", lastUpdated: "05/12/2023", time: "10:00am" },
    { id: 6, workflowNumber: "06", name: "Emily Davis", role: "Quality Assurance", status: "Under Review", statusColor: "text-status-ongoing", lastUpdated: "04/12/2023", time: "3:45pm" }
  ];

  return (
    <table className="w-8/12 flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary">
            <tr className="grid grid-cols-12 gap-4 rounded-xl p-4 bg-primary-lighter text-left">
                <th className="col-span-2">Workflow No.</th>
                <th className="col-span-3">Name</th>
                <th className="col-span-2">Role</th>
                <th className="col-span-2">Status</th>
                <th className="col-span-3">Last Updated</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray">
            {dummyDocHistory.map((history) => (
              <DocHistoryTableRow key={history.id} history={history} />
            ))}
        </tbody>
    </table>
  )
}

export default DocHistoryTable