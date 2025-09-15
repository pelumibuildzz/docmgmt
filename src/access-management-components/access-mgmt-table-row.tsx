import Link from 'next/link'

interface User {
  id: number;
  name: string;
  email: string;
  department: string;
}

interface AccessMgmtTableRowProps {
  user: User;
}

const AccessMgmtTableRow = ({ user }: AccessMgmtTableRowProps) => {
  return (
    <tr className="p-4 grid grid-cols-10 gap-4 w-full rounded-xl border-gray-300 border-[.5px]">
        <td className="col-span-1 text-center">{user.id}</td>
        <td className="col-span-2 text-center">{user.name}</td>
        <td className="col-span-3 text-center">{user.email}</td>
        <td className="col-span-2 text-center">{user.department}</td>
        <td className="col-span-2 text-center text-primary underline"><Link href={`/dashboard/access-management/${user.id}`}>Manage Access</Link></td>
    </tr>
  )
}

export default AccessMgmtTableRow