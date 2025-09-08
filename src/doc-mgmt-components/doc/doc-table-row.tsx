const DocTableRow = () => {
  return (
    <tr className="p-4 grid grid-cols-12 gap-2 w-full rounded-xl border-gray border-[.5px] text-left">
        <td className="col-span-2">Date Created</td>
        <td className="col-span-1">Doc Name</td>
        <td className="col-span-1">Doc ID</td>
        <td className="col-span-1">File Name</td>
        <td className="col-span-1">File ID</td>
        <td className="col-span-1">Status</td>
        <td className="col-span-1">Priority</td>
        <td className="col-span-2">Last Updated</td>
        <td className="col-span-1">Due Date</td>
        <td className="col-span-1 flex justify-start"><span className="px-2 py-1 bg-primary rounded-xl text-white">Actions</span></td>
    </tr>
  )
}

export default DocTableRow