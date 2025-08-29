const FolderTableRow = () => {
  return (
    <tr className="p-4 flex justify-between w-full rounded-xl border-gray border-[.5px]">
        <th className="">Date Created</th>
        <th className="">File Name</th>
        <th className="">File ID</th>
        <th className="">No of Document</th>
        <th className="">Last Updated</th>
        <th className="">Actions</th>
    </tr>
  )
}

export default FolderTableRow