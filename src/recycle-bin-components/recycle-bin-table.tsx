import RecycleBinTableRow from '@/recycle-bin-components/recycle-bin-table-row'

const RecycleBinTable = () => {
  const dummyDeletedItems = [
    { id: 1, dateCreated: "08/12/2023", docName: "Old Financial Report", docId: "OLD-001", fileName: "financial_report.pdf", fileId: "DEL-001", deletedBy: "John Smith", deletedAt: "10/12/2023" },
    { id: 2, dateCreated: "07/11/2023", docName: "Outdated Policy", docId: "OLD-002", fileName: "outdated_policy.pdf", fileId: "DEL-002", deletedBy: "Sarah Johnson", deletedAt: "09/12/2023" },
    { id: 3, dateCreated: "06/10/2023", docName: "Draft Presentation", docId: "DFT-003", fileName: "presentation.pdf", fileId: "DEL-003", deletedBy: "Michael Brown", deletedAt: "08/12/2023" },
    { id: 4, dateCreated: "05/09/2023", docName: "Test Document", docId: "DOC-004", fileName: "test_document.pdf", fileId: "DEL-004", deletedBy: "Emily Davis", deletedAt: "07/12/2023" },
    { id: 5, dateCreated: "04/08/2023", docName: "Backup Spreadsheet", docId: "XLS-005", fileName: "backup_data.pdf", fileId: "DEL-005", deletedBy: "David Wilson", deletedAt: "06/12/2023" },
    { id: 6, dateCreated: "03/07/2023", docName: "Archive Notes", docId: "NOT-006", fileName: "archive_notes.pdf", fileId: "DEL-006", deletedBy: "Aminat Adibogun", deletedAt: "05/12/2023" }
  ];

  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary">
            <tr className="grid grid-cols-12 gap-2 rounded-xl p-4 bg-primary-lighter text-left">
                <th className="col-span-2">Date Created</th>
                <th className="col-span-2">Doc Name</th>
                <th className="col-span-1">Doc ID</th>
                <th className="col-span-2">File Name</th>
                <th className="col-span-1">File ID</th>
                <th className="col-span-2">Deleted by</th>
                <th className="col-span-1">Deleted at</th>
                <th className="col-span-1">Actions</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray">
            {dummyDeletedItems.map((item) => (
              <RecycleBinTableRow key={item.id} item={item} />
            ))}
        </tbody>
    </table>
  )
}

export default RecycleBinTable