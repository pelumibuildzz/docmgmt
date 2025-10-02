import { X } from "lucide-react"

interface SendDocModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const SendDocModal = ({ onClose, onSuccess }: SendDocModalProps) => {
  const handleSend = () => {
    // Simulate sending process
    onSuccess();
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-[16px] flex justify-center items-center z-50">
      <div className="bg-white w-2/5 rounded-xl shadow-md py-10 flex flex-col space-y-6 border-b-[.5px] justify-center items-center border-gray-300">
        <div className="w-full flex justify-between items-center px-10">
            <h3>Send Via Email</h3>
            <button onClick={onClose} className=''><X width={24} height={24} /></button>
        </div>
        <div className='px-10 flex flex-col space-y-8 w-full'>
            <div className='flex flex-col space-y-1.5'>
                <label className='text-[16px] text-gray' htmlFor="email">Add Email(s)</label>
                <input 
                    type="text"
                    id="email"
                    placeholder='Input email and separate emails with comma for multiple emails'
                    className='border border-gray-300 rounded-md px-4 py-3 text-[14px] w-full'
                />
            </div>
            <div className='flex flex-col space-y-1.5'>
                <label className='text-[16px] text-gray' htmlFor="email">Add Message</label>
                <textarea 
                    id="message"
                    placeholder='Add a message (optional)'
                    className='border border-gray-300 rounded-md px-4 py-3 text-[14px] w-full h-32 resize-none'
                />
            </div>
            <button 
                onClick={handleSend}
                className='bg-primary self-end text-white py-2 px-4 rounded-md w-fit'
            >
                Send
            </button>
        </div>
      </div>
    </div>
  )
}

export default SendDocModal