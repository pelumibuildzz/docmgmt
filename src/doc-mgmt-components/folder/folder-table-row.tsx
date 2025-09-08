const FolderTableRow = () => {
  return (
    <tr className="p-4 grid grid-cols-12 gap-4 w-full rounded-xl border-gray border-[.5px]">
        <td className="col-span-2">Date Created</td>
        <td className="col-span-2">File Name</td>
        <td className="col-span-2">File ID</td>
        <td className="col-span-2">No of Document</td>
        <td className="col-span-2">Last Updated</td>
        <td className="col-span-2 flex justify-start"><span className="px-2 py-1 bg-primary rounded-xl text-white">Actions</span></td>
    </tr>
  )
}

export default FolderTableRow