interface FolderTableRowProps {
  onOpenModal: () => void
}

const FolderTableRow = ({ onOpenModal }: FolderTableRowProps) => {
  return (
    <tr className="p-4 grid grid-cols-12 gap-4 w-full rounded-xl border-gray-300 border-[.5px]">
        <td className="col-span-2">01/09/2023</td>
        <td className="col-span-2">Student Admin</td>
        <td className="col-span-2">223</td>
        <td className="col-span-2">12</td>
        <td className="col-span-2">09:43am</td>
        <td className="col-span-2 flex justify-start">
            <button 
                className="px-2 py-1 bg-primary rounded-xl text-white"
                onClick={onOpenModal}
            >
                open
            </button>
        </td>
    </tr>
  )
}

export default FolderTableRow