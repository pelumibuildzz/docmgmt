import DocumentAuditTableRow from "@/audit-log-components/document/document-audit-table-row"

interface DocumentAuditTableProps {
  onViewClick: () => void;
}

const DocumentAuditTable = ({ onViewClick }: DocumentAuditTableProps) => {
  const dummyDocumentAudits = [
    { id: 1, serialNumber: "01", documentName: "Digits", action: "Deleted Document", user: "Adibogun Aminat", department: "Finance", trackingId: "RV443", lastUpdated: "09/12/2023", time: "9:45am" },
    { id: 2, serialNumber: "02", documentName: "Budget Report", action: "Created Document", user: "John Smith", department: "Finance", trackingId: "RV444", lastUpdated: "08/12/2023", time: "10:30am" },
    { id: 3, serialNumber: "03", documentName: "HR Manual", action: "Updated Document", user: "Sarah Johnson", department: "HR", trackingId: "RV445", lastUpdated: "07/12/2023", time: "2:15pm" },
    { id: 4, serialNumber: "04", documentName: "Marketing Plan", action: "Shared Document", user: "Michael Brown", department: "Marketing", trackingId: "RV446", lastUpdated: "06/12/2023", time: "11:20am" },
    { id: 5, serialNumber: "05", documentName: "Security Policy", action: "Archived Document", user: "Emily Davis", department: "IT", trackingId: "RV447", lastUpdated: "05/12/2023", time: "4:00pm" },
    { id: 6, serialNumber: "06", documentName: "Legal Contract", action: "Approved Document", user: "David Wilson", department: "Legal", trackingId: "RV448", lastUpdated: "04/12/2023", time: "3:30pm" }
  ];

  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary font-medium">
            <tr className="grid grid-cols-12 gap-4 rounded-xl p-4 bg-primary-lighter text-left">
                <th className="col-span-1">S/N</th>
                <th className="col-span-2">Document Name</th>
                <th className="col-span-2">Action</th>
                <th className="col-span-2">User</th>
                <th className="col-span-1">Department</th>
                <th className="col-span-1">Tracking Id</th>
                <th className="col-span-2">Last Updated</th>
                <th className="col-span-1">Action</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray font-normal">
            {dummyDocumentAudits.map((audit) => (
              <DocumentAuditTableRow key={audit.id} audit={audit} onViewClick={onViewClick} />
            ))}
        </tbody>
    </table>
  )
}

export default DocumentAuditTable