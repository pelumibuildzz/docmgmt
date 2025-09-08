import Link from 'next/link'

const AccessMgmtTableRow = () => {
  return (
    <tr className="p-4 grid grid-cols-10 gap-4 w-full rounded-xl border-gray border-[.5px]">
        <td className="col-span-1">1</td>
        <td className="col-span-2">User</td>
        <td className="col-span-3">Email</td>
        <td className="col-span-2">Department</td>
        <td className="col-span-2 text-primary underline"><Link href={"/dashboard/access-management/1"}>Manage Access</Link></td>
    </tr>
  )
}

export default AccessMgmtTableRow