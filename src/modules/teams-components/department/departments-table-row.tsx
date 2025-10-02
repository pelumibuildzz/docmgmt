import Link from "next/link"

interface Department {
  id: number;
  serialNumber: string;
  name: string;
  department: string;
}

interface DepartmentTableRowProps {
  department: Department;
}

const DepartmentTableRow = ({ department }: DepartmentTableRowProps) => {
  return (
    <tr className="p-4 grid grid-cols-8 gap-4 w-full rounded-xl border-gray-300 border-[.5px]">
        <td className="col-span-1">{department.serialNumber}</td>
        <td className="col-span-2">{department.name}</td>
        <td className="col-span-3">{department.department}</td>
        <td className="col-span-2 flex justify-start"><Link href={``} className="px-2 py-1 bg-primary rounded-xl text-white">view</Link></td>
    </tr>
  )
}

export default DepartmentTableRow