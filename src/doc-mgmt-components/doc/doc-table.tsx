import DocTableRow from "./doc-table-row"
import { Document } from "@/types/document"

interface DocTableProps {
  documents: Document[]
}

const DocTable = ({ documents }: DocTableProps) => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[12px]">
        <thead className=" text-primary">
            <tr className="grid grid-cols-12 gap-2 rounded-xl p-4 bg-primary-lighter text-left">
                <th className="col-span-1">Date Created</th>
                <th className="col-span-2">Doc Name</th>
                <th className="col-span-1">Doc ID</th>
                <th className="col-span-2">File Name</th>
                <th className="col-span-1">File ID</th>
                <th className="col-span-1">Status</th>
                <th className="col-span-1">Priority</th>
                <th className="col-span-1">Last Updated</th>
                <th className="col-span-1">Due Date</th>
                <th className="col-span-1">Actions</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray">
            {documents.map((document) => (
                <DocTableRow key={document.id} document={document} />
            ))}
            {documents.length === 0 && (
                <tr className="flex justify-center p-8">
                    <td className="text-gray-500">No documents found matching the current filters.</td>
                </tr>
            )}
        </tbody>
    </table>
  )
}

export default DocTable