'use client'
import { Paperclip, Smile, X, ImageIcon } from 'lucide-react'
import { useState } from 'react'

interface AddReplyProps {
  onAddReply: (content: string) => void;
  onCancel: () => void;
}

const AddReply = ({ onAddReply, onCancel }: AddReplyProps) => {
  const [content, setContent] = useState('')

  const handleSubmit = () => {
    if (content.trim()) {
      onAddReply(content.trim())
      setContent('')
    }
  }

  return (
    <div className='py-3 px-6 border-[.2px] border-gray-300 rounded-xl relative bg-gray-50'>
      <textarea 
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder='Type your reply here...' 
        className='w-full h-32 focus:outline-none resize-none bg-transparent'
      />
      <button 
        onClick={onCancel}
        className='absolute top-6 right-6'
      >
        <X width={20} height={20} className='text-gray cursor-pointer'/>
      </button>
      <div className='pt-4 border-t-[.5px] border-gray-300 flex justify-between w-full'>
        <div className='flex space-x-[17px]'>
          <ImageIcon width={20} height={20} className='text-gray cursor-pointer' />
          <Paperclip width={20} height={20} className='text-gray cursor-pointer' />
          <Smile width={20} height={20} className='text-gray cursor-pointer' />
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
            Add Reply
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddReply