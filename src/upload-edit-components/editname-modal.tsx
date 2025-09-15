import { X } from 'lucide-react'
import { useState } from 'react';

interface EditNameModalProps {
  currentName?: string;
  onSave?: (newName: string) => void;
  onClose?: () => void;
}

const EditNameModal = ({ currentName = "", onSave, onClose }: EditNameModalProps) => {
  const [newName, setNewName] = useState(currentName);

  const handleSave = () => {
    if (newName.trim() && onSave) {
      onSave(newName.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      onClose?.();
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-[16px] flex justify-center items-center">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-2/5 rounded-xl shadow-md py-14 px-10 flex flex-col space-y-6 border-b-[.5px] border-gray-300"
      >
        <h2>Edit Document Name</h2>
        <div className="relative flex items-center w-full">
          <img src="/upload/file.png" alt="File" className="w-6 h-6 absolute left-3" />
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Input file name'
            className='w-full border-[.5px] border-gray-300 rounded-md py-2 pl-12 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-lighter'
            autoFocus
          />
          <button 
            type="button" 
            onClick={onClose}
            className="absolute right-3 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className='flex space-x-3'>
            <button 
              onClick={handleSave}
              className='bg-primary text-white py-2 px-4 rounded-md w-fit'
            >
              Save Changes
            </button>
            <button 
              onClick={onClose}
              className='py-2 px-4 rounded-md w-fit border border-gray-300'
            >
              Cancel
            </button>
        </div>
      </div>
    </div>
  )
}

export default EditNameModal