const DocTableRow = () => {
  return (
    <tr className="p-4 flex justify-between gap-2 w-full rounded-xl border-gray border-[.5px] text-left">
        <td className="">Date Created</td>
        <td className="">Doc Name</td>
        <td className="">Doc ID</td>
        <td className="">File Name</td>
        <td className="">File ID</td>
        <td className=" text-status-in-progress">in-progress</td>
        <td className=" text-priority-high">High</td>
        <td className="">Last Updated</td>
        <td className="">Due Date</td>
        <td className=" flex justify-start"><span className="px-2 py-1 bg-primary rounded-xl text-white">Actions</span></td>
    </tr>
  )
}

export default DocTableRow