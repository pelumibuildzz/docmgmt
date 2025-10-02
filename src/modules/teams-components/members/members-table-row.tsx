import Link from "next/link"

interface Member {
  id: number;
  serialNumber: string;
  name: string;
  department: string;
  email: string;
  accessLevel: string;
}

interface MembersTableRowProps {
  member: Member;
}

const MembersTableRow = ({ member }: MembersTableRowProps) => {
  return (
    <tr className="p-4 grid grid-cols-12 gap-4 w-full rounded-xl border-gray-300 border-[.5px]">
        <td className="col-span-1">{member.serialNumber}</td>
        <td className="col-span-2">{member.name}</td>
        <td className="col-span-2">{member.department}</td>
        <td className="col-span-3">{member.email}</td>
        <td className="col-span-2 pl-12">{member.accessLevel}</td>
        <td className="col-span-2 flex justify-start"><Link href={`/dashboard/teams/members/${member.id}`} className="px-2 py-1 bg-primary rounded-xl text-white">view</Link></td>
    </tr>
  )
}

export default MembersTableRow