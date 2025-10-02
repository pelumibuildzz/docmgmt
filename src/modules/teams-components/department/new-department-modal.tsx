import { X } from 'lucide-react'
import React, { useState } from 'react'

interface NewDepartmentModalProps {
  onSave: () => void;
  onClose: () => void;
}

const NewDepartmentModal = ({ onSave, onClose }: NewDepartmentModalProps) => {
  const [departmentName, setDepartmentName] = useState('');

  const handleSave = () => {
    if (departmentName.trim()) {
      onSave();
    }
  };

  const isButtonDisabled = !departmentName.trim();

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-[16px] flex justify-center items-center z-50">
      <div className="bg-white w-2/5 rounded-xl shadow-md p-8 flex flex-col space-y-6 border-b-[.5px] justify-center items-center border-gray-300">
        <div className='flex justify-between items-center w-full'>
          <h3 className="font-semibold text-[16px]">Add New Department</h3>
          <button onClick={onClose} className="">
            <X className="cursor-pointer" width={24} height={24} />
          </button>
        </div>
        <div className='flex space-x-4 w-full'>
          <input 
            type="text" 
            placeholder="Department Name" 
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            className="border-[0.5px] border-gray-300 rounded-xl p-4 w-full" 
          />
          <button 
            onClick={handleSave}
            disabled={isButtonDisabled}
            className={`px-4 py-2 rounded-xl text-white transition-colors ${
              isButtonDisabled 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-primary hover:bg-primary/90'
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewDepartmentModal