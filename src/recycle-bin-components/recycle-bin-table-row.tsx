import Link from 'next/link'

const RecycleBinTableRow = () => {
  return (
    <tr className="p-4 grid grid-cols-12 gap-2 w-full rounded-xl border-gray border-[.5px] text-left">
        <td className="col-span-2">Date Created</td>
        <td className="col-span-2">Doc Name</td>
        <td className="col-span-1">Doc ID</td>
        <td className="col-span-1">File Name</td>
        <td className="col-span-1">File ID</td>
        <td className="col-span-2">Deleted by</td>
        <td className="col-span-2">Deleted at</td>
        <td className="col-span-1 flex justify-start"><Link href={"/file/recycle-bin/1"} className="px-2 py-1 bg-primary rounded-xl text-white">Open</Link></td>
    </tr>
  )
}

export default RecycleBinTableRow