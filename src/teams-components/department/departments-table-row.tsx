import Link from "next/link"
const DepartmentTableRow = () => {
  return (
    <tr className="p-4 flex justify-between w-full rounded-xl border-gray border-[.5px]">
        <td className="">01</td>
        <td className="">Name</td>
        <td className="">Finance</td>
        <td className="px-2 py-1 bg-primary rounded-xl text-white"><Link href="/dashboard/teams/department/1">view</Link></td>
    </tr>
  )
}

export default DepartmentTableRow