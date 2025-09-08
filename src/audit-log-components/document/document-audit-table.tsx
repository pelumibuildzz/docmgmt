import DocumentAuditTableRow from "@/audit-log-components/document/document-audit-table-row"


const DocumentAuditTable = () => {
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
            <DocumentAuditTableRow/>
        </tbody>
    </table>
  )
}

export default DocumentAuditTable