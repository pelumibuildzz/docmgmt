import { CircleDot } from 'lucide-react'
import { useState } from 'react'

interface ChangePriorityModalProps {
  currentPriority?: string;
  onSave?: (priority: string) => void;
  onClose?: () => void;
}

const ChangePriorityModal = ({ currentPriority = "high", onSave, onClose }: ChangePriorityModalProps) => {
  const [selectedPriority, setSelectedPriority] = useState(currentPriority);
  
  const priorities = [
    { value: "low", label: "Low", color: "text-priority-low" },
    { value: "medium", label: "Medium", color: "text-priority-medium" },
    { value: "high", label: "High", color: "text-priority-high" }
  ]

  const handleSave = () => {
    if (onSave) {
      onSave(selectedPriority);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-[16px] flex justify-center items-center">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-2/5 rounded-xl shadow-md py-14 px-10 flex flex-col space-y-6 border-b-[.5px] border-gray-300"
      >
        <h2 className="font-semibold">Change Priority</h2>
        
        <div className="flex flex-col space-y-3">
          {priorities.map((priority) => (
            <label 
              key={priority.value} 
              className={`flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-md cursor-pointer transition-colors ${
                selectedPriority === priority.value ? 'bg-primary-lighter border border-primary' : 'border border-transparent'
              }`}
            >
              <input 
                type="radio" 
                name="priority" 
                value={priority.value} 
                checked={selectedPriority === priority.value}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="sr-only" 
              />
              <CircleDot className={`w-5 h-5 ${priority.color}`} />
              <span>{priority.label}</span>
              {selectedPriority === priority.value && (
                <span className="ml-auto text-primary text-sm">✓</span>
              )}
            </label>
          ))}
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

export default ChangePriorityModal
