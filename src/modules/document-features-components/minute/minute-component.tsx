'use client'
import { Dot, EllipsisVertical, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { Minute } from '@/types/minute'
import AddReply from './add-reply'

interface MinuteComponentProps {
  minute: Minute;
  onAddReply: (minuteId: string, content: string) => void;
}

const MinuteComponent = ({ minute, onAddReply }: MinuteComponentProps) => {
  const [showReplyForm, setShowReplyForm] = useState(false)

  const handleAddReply = (content: string) => {
    onAddReply(minute.id, content)
    setShowReplyForm(false)
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  }

  return (
    <div className='p-6 border-b-[.5px] border-gray-300 flex flex-col space-y-3'>
        <div className='flex justify-between items-center'>
            <div className='flex space-x-2 items-end'>
                <h3 className='text-[16px] font-medium'>{minute.author}</h3>
                <span className=" flex items-end text-[12px] text-gray">
                  {formatDate(minute.timestamp)} <Dot width={24} height={24} className='mx-0.5'/> {formatTime(minute.timestamp)}
                </span>
            </div>
            <EllipsisVertical width={24} height={24} className='text-gray cursor-pointer'/>
        </div>
        <p className='text-gray text-[14px] whitespace-pre-wrap'>{minute.content}</p>
        <div className='flex space-x-8'>
            <button className='flex space-x-2 text-gray items-center'>
                <MessageCircle width={24} height={24} className=''/>
                <span className='text-[14px]'>{minute.replies.length} Replies</span>
            </button>
            <button 
              onClick={() => setShowReplyForm(!showReplyForm)}
              className='py-2 px-4 text-primary border-[.5px] border-gray-300 rounded-lg'
            >
              Reply
            </button>
        </div>
        
        {showReplyForm && (
          <div className='mt-4'>
            <AddReply 
              onAddReply={handleAddReply}
              onCancel={() => setShowReplyForm(false)}
            />
          </div>
        )}
        
        {/* Display replies */}
        {minute.replies.map((reply) => (
          <div key={reply.id} className='p-6 flex flex-col space-y-3 bg-gray-50 rounded-lg ml-8'>
            <div className='flex justify-between items-center'>
                <div className='flex space-x-2 items-end'>
                    <h3 className='text-[16px] font-medium'>{reply.author}</h3>
                    <span className=" flex items-end text-[12px] text-gray">
                      {formatDate(reply.timestamp)} <Dot width={24} height={24} className='mx-0.5'/> {formatTime(reply.timestamp)}
                    </span>
                </div>
                <EllipsisVertical width={24} height={24} className='text-gray cursor-pointer'/>
            </div>
            <p className='text-gray text-[14px] whitespace-pre-wrap'>{reply.content}</p>
          </div>
        ))}
    </div>
  )
}

export default MinuteComponent