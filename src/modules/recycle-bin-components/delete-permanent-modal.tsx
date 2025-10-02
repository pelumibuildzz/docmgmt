import { Trash, X } from "lucide-react"

interface DeletePermanentModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const DeletePermanentModal = ({ onCancel, onConfirm }: DeletePermanentModalProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-[16px] flex justify-center items-center z-50">
      <div className="bg-white w-2/5 rounded-md shadow-md p-10 flex flex-col space-y-6 border-b-[.5px] justify-center items-center border-gray-300">
        <button onClick={onCancel} className='self-end'><X width={24} height={24} /></button>
        <div className='flex flex-col justify-center items-center w-fit h-fit rounded-full bg-red-500 p-4'>
            <Trash className="text-white" width={56} height={56} />
        </div>
        <span className="text-[14px] text-gray">Are you sure you want to delete this document?</span>
        <div className='flex space-x-3'>
            <button onClick={onCancel} className='py-2 px-4 rounded-md w-fit border border-gray-300 hover:bg-gray-50 transition-colors'>
                Cancel
            </button>
            <button onClick={onConfirm} className='py-2 px-4 rounded-md w-fit border border-gray-300 bg-status-error transition-colors'>
                Delete Document
            </button>
        </div>
      </div>
    </div>
  )
}

export default DeletePermanentModal