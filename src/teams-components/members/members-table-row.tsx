import Link from "next/link"
const MembersTableRow = () => {
  return (
    <tr className="p-4 grid grid-cols-12 gap-4 w-full rounded-xl border-gray border-[.5px]">
        <td className="col-span-1">01</td>
        <td className="col-span-2">Name</td>
        <td className="col-span-2">Finance</td>
        <td className="col-span-3">Mail</td>
        <td className="col-span-2">1</td>
        <td className="col-span-2 flex justify-start"><Link href="/dashboard/teams/members/1" className="px-2 py-1 bg-primary rounded-xl text-white">view</Link></td>
    </tr>
  )
}

export default MembersTableRow