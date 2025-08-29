const DocTableRow = () => {
  return (
    <tr className="p-4 flex justify-between w-full rounded-xl border-gray border-[.5px]">
        <td className="">Date Created</td>
        <td className="">Doc Name</td>
        <td className="">Doc ID</td>
        <td className="">File Name</td>
        <td className="">File ID</td>
        <td className="">Status</td>
        <td className="">Priority</td>
        <td className="">Last Updated</td>
        <td className="">Due Date</td>
        <td className="">Actions</td>
    </tr>
  )
}

export default DocTableRow