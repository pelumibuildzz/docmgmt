import React from 'react'
import MyDocsTableRow from '@/modules/knowledge-management-components/my-docs-table-row'

const MyDocsTable = () => {
  const dummyMyDocs = [
    { id: 1, dateCreated: "09/12/2023", docName: "My Project Plan", docId: "PRJ-001", fileName: "project_plan_2024.pdf", fileId: "FILE-101" },
    { id: 2, dateCreated: "08/11/2023", docName: "Team Meeting Notes", docId: "MTG-002", fileName: "meeting_notes_aug.pdf", fileId: "FILE-102" },
    { id: 3, dateCreated: "07/10/2023", docName: "Budget Analysis", docId: "BUD-003", fileName: "budget_analysis_q3.pdf", fileId: "FILE-103" },
    { id: 4, dateCreated: "06/09/2023", docName: "Client Proposal", docId: "CLP-004", fileName: "client_proposal_draft.pdf", fileId: "FILE-104" },
    { id: 5, dateCreated: "05/08/2023", docName: "Training Manual", docId: "TRN-005", fileName: "training_manual_v2.pdf", fileId: "FILE-105" },
    { id: 6, dateCreated: "04/07/2023", docName: "Performance Review", docId: "PRF-006", fileName: "performance_review_2023.pdf", fileId: "FILE-106" }
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
            {dummyMyDocs.map((doc) => (
              <MyDocsTableRow key={doc.id} doc={doc} />
            ))}
        </tbody>
    </table>
  )
}

export default MyDocsTable