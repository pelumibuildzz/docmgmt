import { Check, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface DeleteDocSuccessModalProps {
  onClose: () => void;
}

const DeleteDocSuccessModal = ({ onClose }: DeleteDocSuccessModalProps) => {
  const router = useRouter();

  const handleBackToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-[16px] flex justify-center items-center z-50">
      <div className="bg-white w-2/5 rounded-xl shadow-md p-10 flex flex-col space-y-6 border-b-[.5px] justify-center items-center border-gray-300">
        <button onClick={onClose} className='self-end'><X width={24} height={24} /></button>
        <div className='flex flex-col justify-center items-center w-fit h-fit rounded-full bg-primary p-4'>
            <Check className="text-white" width={56} height={56} />
        </div>
        <span className="text-[14px] text-gray">Your document has been successfully deleted.</span>
        <div className='flex justify-center'>
            <button 
                onClick={handleBackToDashboard}
                className='py-2 px-4 rounded-md w-fit border border-gray-300 hover:bg-gray-50 transition-colors'
            >
                Back to Dashboard
            </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteDocSuccessModal