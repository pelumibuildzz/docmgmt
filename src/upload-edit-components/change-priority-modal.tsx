import { CircleDot } from 'lucide-react'

const ChangePriorityModal = () => {
  const priorities = [
    { value: "low", label: "Low", color: "text-priority-low" },
    { value: "medium", label: "Medium", color: "text-priority-medium" },
    { value: "high", label: "High", color: "text-priority-high" }
  ]

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black text-[16px] opacity-75 flex justify-center items-center">
      <div className="bg-white w-2/5 rounded-md shadow-md py-14 px-10 flex flex-col space-y-6 border-b-[.5px] border-gray-300">
        <h2 className="font-semibold">Change Priority</h2>
        
        <div className="flex flex-col space-y-3">
          {priorities.map((priority) => (
            <label key={priority.value} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-md cursor-pointer">
              <input type="radio" name="priority" value={priority.value} className="sr-only" />
              <CircleDot className={`w-5 h-5 ${priority.color}`} />
              <span>{priority.label}</span>
            </label>
          ))}
        </div>
        
        <div className='flex space-x-3'>
          <button className='bg-primary text-white py-2 px-4 rounded-md w-fit'>Save Changes</button>
          <button className='py-2 px-4 rounded-md w-fit border border-gray-300'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default ChangePriorityModal
