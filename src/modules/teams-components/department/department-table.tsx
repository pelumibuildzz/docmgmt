import DepartmentTableRow from "@/modules/teams-components/department/departments-table-row"

const DepartmentTable = () => {
  const dummyDepartments = [
    { id: 1, serialNumber: "01", name: "Adibogun", department: "Finance" },
    { id: 2, serialNumber: "02", name: "Smith", department: "Information Technology" },
    { id: 3, serialNumber: "03", name: "Johnson", department: "Human Resources" },
    { id: 4, serialNumber: "04", name: "Brown", department: "Marketing" },
    { id: 5, serialNumber: "05", name: "Davis", department: "Operations" },
    { id: 6, serialNumber: "06", name: "Wilson", department: "Legal & Compliance" }
  ];

  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary">
            <tr className="grid grid-cols-8 gap-4 rounded-xl p-4 bg-primary-lighter text-left">
                <th className="col-span-1">S/N</th>
                <th className="col-span-2">Name</th>
                <th className="col-span-3">Department</th>
                <th className="col-span-2">Actions</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray">
            {dummyDepartments.map((dept) => (
              <DepartmentTableRow key={dept.id} department={dept} />
            ))}
        </tbody>
    </table>
  )
}

export default DepartmentTable