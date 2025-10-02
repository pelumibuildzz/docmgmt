import { X } from "lucide-react"

interface RestoreDocModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const RestoreDocModal = ({ onCancel, onConfirm }: RestoreDocModalProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-[16px] flex justify-center items-center z-50">
      <div className="bg-white w-2/5 rounded-md shadow-md p-10 flex flex-col space-y-6 border-b-[.5px] justify-center items-center border-gray-300">
        <button onClick={onCancel} className='self-end'><X width={24} height={24} /></button>
        <span className="text-[14px] text-gray">Are you sure you want to restore this document?</span>
        <div className='flex space-x-3'>
            <button onClick={onCancel} className='py-2 px-4 rounded-md w-fit border border-gray-300 hover:bg-gray-50 transition-colors'>
                Cancel
            </button>
            <button onClick={onConfirm} className='py-2 px-4 rounded-md w-fit border border-gray-300 bg-primary text-white'>
                Restore Document
            </button>
        </div>
      </div>
    </div>
  )
}

export default RestoreDocModal