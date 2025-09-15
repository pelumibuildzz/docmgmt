import { Check, X } from 'lucide-react'
import React from 'react'

interface UpdateAccessSuccessModalProps {
  onClose: () => void;
  onBackToAccessManagement: () => void;
}

const UpdateAccessSuccessModal = ({ onClose, onBackToAccessManagement }: UpdateAccessSuccessModalProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-[16px] flex justify-center items-center z-50">
      <div className="bg-white w-2/5 rounded-md shadow-md p-10 flex flex-col space-y-6 border-b-[.5px] justify-center items-center border-gray-300">
        <div className='flex justify-end w-full'>
            <button onClick={onClose}>
                <X className="cursor-pointer text-gray" width={24} height={24} />
            </button>
        </div>
        <div className='flex flex-col justify-center items-center w-fit h-fit rounded-full bg-primary p-4'>
            <Check className="text-white" width={56} height={56} />
        </div>
        <span className="text-[14px] text-gray">Your changes have been successfully saved.</span>
        <div className='flex space-x-3 justify-center'>
            <button 
              onClick={onBackToAccessManagement}
              className='py-2 px-4 rounded-md w-fit border border-gray-300 hover:bg-gray-50 transition-colors'
            >
                Back to Access Management
            </button>
        </div>
      </div>
    </div>
  )
}

export default UpdateAccessSuccessModal