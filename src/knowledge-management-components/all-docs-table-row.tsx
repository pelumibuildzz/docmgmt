import Link  from "next/link";

interface Doc {
  id: number;
  dateCreated: string;
  docName: string;
  docId: string;
  fileName: string;
  fileId: string;
}

interface AllDocsTableRowProps {
  doc: Doc;
}

const AllDocsTableRow = ({ doc }: AllDocsTableRowProps) => {
  return (
    <tr className="grid grid-cols-12 gap-4 rounded-xl p-4 border-gray-300 border-[.5px] text-left">
        <td className="col-span-2">{doc.dateCreated}</td>
        <td className="col-span-2">{doc.docName}</td>
        <td className="col-span-1">{doc.docId}</td>
        <td className="col-span-3">{doc.fileName}</td>
        <td className="col-span-2">{doc.fileId}</td>
        <td className="col-span-2 flex justify-start"><Link href={`/file/${doc.id}`} className="px-2 py-1 bg-primary rounded-xl text-white">view</Link></td>
    </tr>
  )
}

export default AllDocsTableRow