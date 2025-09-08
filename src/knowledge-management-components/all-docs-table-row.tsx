import Link  from "next/link";

const AllDocsTableRow = () => {
  return (
    <tr className="grid grid-cols-12 gap-4 rounded-xl p-4 bg-primary-lighter text-left">
        <th className="col-span-1">Date Created</th>
        <th className="col-span-2">Doc Name</th>
        <th className="col-span-2">Doc Id</th>
        <th className="col-span-3">File Name</th>
        <th className="col-span-2">File Id</th>
        <td className="col-span-2 flex justify-start"><Link href="/file/1" className="px-2 py-1 bg-primary rounded-xl text-white">view</Link></td>
    </tr>
  )
}

export default AllDocsTableRow