'use client'
import { Paperclip, Smile, X, ImageIcon } from 'lucide-react'
import { useState } from 'react'

interface AddMinuteProps {
  onAddMinute: (content: string) => void;
  onCancel: () => void;
}

const AddMinute = ({ onAddMinute, onCancel }: AddMinuteProps) => {
  const [content, setContent] = useState('')

  const handleSubmit = () => {
    if (content.trim()) {
      onAddMinute(content.trim())
      setContent('')
    }
  }

  return (
    <div className='py-3 px-6 border-[.2px] border-gray-300 rounded-xl relative'>
        <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Type in new minutes' 
          className='w-full h-52 focus:outline-none resize-none'
        />
        <button 
          onClick={onCancel}
          className='absolute top-6 right-6'
        >
          <X width={24} height={24} className='text-gray cursor-pointer'/>
        </button>
        <div className='pt-4 border-t-[.5px] border-gray-300 flex justify-between w-full'>
            <div className='flex space-x-[17px]'>
                <ImageIcon width={24} height={24} className='text-gray cursor-pointer' />
                <Paperclip width={24} height={24} className='text-gray cursor-pointer' />
                <Smile width={24} height={24} className='text-gray cursor-pointer' />
            </div>
            <div className='flex space-x-2'>
              <button 
                onClick={onCancel}
                className='py-1 px-3 text-[12px] font-medium text-gray border border-gray-300 rounded-lg'
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit}
                disabled={!content.trim()}
                className='py-1 px-3 text-[12px] font-medium text-white bg-primary rounded-lg disabled:bg-gray-300'
              >
                Add Minute
              </button>
            </div>
        </div>
    </div>
  )
}

export default AddMinute