import Link from 'next/link'

interface DeletedItem {
  id: number;
  dateCreated: string;
  docName: string;
  docId: string;
  fileName: string;
  fileId: string;
  deletedBy: string;
  deletedAt: string;
}

interface RecycleBinTableRowProps {
  item: DeletedItem;
}

const RecycleBinTableRow = ({ item }: RecycleBinTableRowProps) => {
  return (
    <tr className="p-4 grid grid-cols-12 gap-2 w-full rounded-xl border-gray-300 border-[.5px] text-left">
        <td className="col-span-2">{item.dateCreated}</td>
        <td className="col-span-2">{item.docName}</td>
        <td className="col-span-1">{item.docId}</td>
        <td className="col-span-2">{item.fileName}</td>
        <td className="col-span-1">{item.fileId}</td>
        <td className="col-span-2">{item.deletedBy}</td>
        <td className="col-span-1">{item.deletedAt}</td>
        <td className="col-span-1 flex justify-start"><Link href={`/view/recycle-bin/${item.id}`} className="px-2 py-1 bg-primary rounded-xl text-white">Open</Link></td>
    </tr>
  )
}

export default RecycleBinTableRow