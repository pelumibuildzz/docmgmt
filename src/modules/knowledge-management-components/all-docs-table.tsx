import React from 'react'
import AllDocsTableRow from '@/modules/knowledge-management-components/all-docs-table-row'

const AllDocsTable = () => {
  const dummyDocs = [
    { id: 1, dateCreated: "09/12/2023", docName: "Financial Report Q3", docId: "FIN-001", fileName: "financial_report_q3.pdf", fileId: "FILE-001" },
    { id: 2, dateCreated: "08/11/2023", docName: "HR Policy Update", docId: "HR-002", fileName: "hr_policy_update.pdf", fileId: "FILE-002" },
    { id: 3, dateCreated: "07/10/2023", docName: "Marketing Strategy", docId: "MKT-003", fileName: "marketing_strategy_2024.pdf", fileId: "FILE-003" },
    { id: 4, dateCreated: "06/09/2023", docName: "IT Security Audit", docId: "IT-004", fileName: "security_audit_report.pdf", fileId: "FILE-004" },
    { id: 5, dateCreated: "05/08/2023", docName: "Legal Compliance", docId: "LEG-005", fileName: "compliance_checklist.pdf", fileId: "FILE-005" },
    { id: 6, dateCreated: "04/07/2023", docName: "Budget Proposal", docId: "FIN-006", fileName: "budget_proposal_2024.pdf", fileId: "FILE-006" }
  ];

  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary">
            <tr className="grid grid-cols-12 gap-4 rounded-xl p-4 bg-primary-lighter text-left">
                <th className="col-span-2">Date Created</th>
                <th className="col-span-2">Doc Name</th>
                <th className="col-span-1">Doc Id</th>
                <th className="col-span-3">File Name</th>
                <th className="col-span-2">File Id</th>
                <th className="col-span-2">Actions</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray">
            {dummyDocs.map((doc) => (
              <AllDocsTableRow key={doc.id} doc={doc} />
            ))}
        </tbody>
    </table>
  )
}

export default AllDocsTable