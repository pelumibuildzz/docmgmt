const FolderTableRow = () => {
  return (
    <tr className="p-4 flex justify-between w-full rounded-xl border-gray border-[.5px]">
        <td className="">Date Created</td>
        <td className="">File Name</td>
        <td className="">File ID</td>
        <td className="">No of Document</td>
        <td className="">Last Updated</td>
        <td className="px-2 py-1 bg-primary rounded-xl text-white">Actions</td>
    </tr>
  )
}

export default FolderTableRow