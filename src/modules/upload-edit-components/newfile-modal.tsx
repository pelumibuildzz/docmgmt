import { X } from 'lucide-react'
import { useState } from 'react'

interface NewFileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFileCreated?: (fileName: string) => void;
}

const NewFileModal = ({ isOpen, onClose, onFileCreated }: NewFileModalProps) => {
  const [fileName, setFileName] = useState("");

  const handleContinue = () => {
    if (fileName.trim()) {
      onFileCreated?.(fileName);
      setFileName("");
      onClose();
    }
  };

  const handleClose = () => {
    setFileName("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-[16px] flex justify-center items-center">
      <div className="bg-white w-2/5 rounded-xl shadow-md p-8 flex flex-col space-y-6 border-b-[.5px] border-gray-300">
        <div className='flex justify-between'>
            <h2>Create New File</h2>
            <X 
              className="cursor-pointer text-gray" 
              width={24} 
              height={24} 
              onClick={handleClose}
            />
        </div>
        <div className='flex justify-between space-x-4'>
            <input 
              type="text" 
              placeholder='Input file name' 
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleContinue();
                }
              }}
              className='w-full border-[.5px] border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-lighter'
              autoFocus
            />
            <button 
              onClick={handleContinue}
              className='bg-primary text-white py-2 px-4 rounded-md w-fit self-end'
            >
              Continue
            </button>
            {/* create file button should call api and create file */}
        </div>
      </div>
    </div>
  )
}

export default NewFileModal