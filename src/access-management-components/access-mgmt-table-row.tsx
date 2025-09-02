import Link from 'next/link'

const AccessMgmtTableRow = () => {
  return (
    <tr className="p-4 flex justify-between w-full rounded-xl border-gray border-[.5px]">
        <td className="">1</td>
        <td className="">User</td>
        <td className="">Email</td>
        <td className="">Department</td>
        <td className="text-primary underline"><Link href={"/dashboard/access-management/1"}>Manage Access</Link></td>
    </tr>
  )
}

export default AccessMgmtTableRow