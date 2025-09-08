import Link from "next/link"
const DepartmentTableRow = () => {
  return (
    <tr className="p-4 grid grid-cols-8 gap-4 w-full rounded-xl border-gray border-[.5px]">
        <td className="col-span-1">01</td>
        <td className="col-span-2">Name</td>
        <td className="col-span-3">Finance</td>
        <td className="col-span-2 flex justify-start"><Link href="/dashboard/teams/department/1" className="px-2 py-1 bg-primary rounded-xl text-white">view</Link></td>
    </tr>
  )
}

export default DepartmentTableRow