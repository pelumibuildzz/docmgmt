'use client'
import MinuteComponent from '@/modules/document-features-components/minute/minute-component'
import AddMinute from '@/modules/document-features-components/minute/add-minute'
import { ChevronsRight, FileText, Plus, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Minute, Reply } from '@/types/minute'

const DocMinutesPage = () => {
    const router = useRouter()
    const [showAddMinute, setShowAddMinute] = useState(false)
    
    // Mock data for demonstration - replace with actual data fetching
    const [minutes, setMinutes] = useState<Minute[]>([
        {
            id: '1',
            author: 'Adibogun AMinat',
            content: 'What is Lorem Ipsum?\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            timestamp: new Date('2023-12-09T09:45:00'),
            replies: [
                {
                    id: 'r1',
                    author: 'John Doe',
                    content: 'Great explanation! This is very helpful for understanding the context.',
                    timestamp: new Date('2023-12-09T10:15:00')
                }
            ]
        },
        {
            id: '2',
            author: 'John Smith',
            content: 'Here are the key points discussed in today\'s meeting:\n\n1. Budget allocation\n2. Timeline review\n3. Resource planning',
            timestamp: new Date('2023-12-09T14:30:00'),
            replies: []
        }
    ])

    const handleGoBack = () => {
        router.back()
    }

    const handleAddMinute = (content: string) => {
        const newMinute: Minute = {
            id: Date.now().toString(),
            author: 'Current User', // Replace with actual current user
            content,
            timestamp: new Date(),
            replies: []
        }
        setMinutes(prev => [newMinute, ...prev])
        setShowAddMinute(false)
    }

    const handleAddReply = (minuteId: string, content: string) => {
        const newReply: Reply = {
            id: Date.now().toString(),
            author: 'Current User', // Replace with actual current user
            content,
            timestamp: new Date()
        }
        
        setMinutes(prev => prev.map(minute => 
            minute.id === minuteId 
                ? { ...minute, replies: [...minute.replies, newReply] }
                : minute
        ))
    }

  return (
    <div className='flex flex-col min-h-screen w-screen space-y-6'>
        <header className='flex justify-between items-center py-4 px-10 bg-primary-lighter border-b-[.5px] border-gray-300'>
            <div className='flex space-x-4 items-center'>
                <div className='flex space-x-2'>
                    <FileText width={56} height={56} className='text-gray'/>
                    <div className='flex flex-col'>
                        <h2 className='text-[20px] font-medium'>Document Name</h2>
                        <h3 className='text-gray text-[14px]'>File: File Name</h3>
                    </div>
                </div>
                <ChevronsRight className='text-gray' width={24} height={24}/>
                <span className='text-[20px] font-medium'>Document Minutes</span>
            </div>
            <button onClick={handleGoBack}>
                <X width={24} height={24} className='text-gray cursor-pointer'/>
            </button>
        </header>
        <div className='px-[120px] flex flex-col space-y-9 w-9/12'>
            <button 
                onClick={() => setShowAddMinute(!showAddMinute)}
                className='w-fit flex space-x-2 text-primary items-center border border-gray-300 py-4 px-3 rounded-lg self-end'
            >
                <span>Add Minutes</span>
                <Plus width={24} height={24} className=''/>
            </button>
            
            {showAddMinute && (
                <AddMinute 
                    onAddMinute={handleAddMinute}
                    onCancel={() => setShowAddMinute(false)}
                />
            )}

            <div className='py-10 rounded-[20px] flex flex-col space-y-6 border-[.5px] border-gray-300'>
                {minutes.map((minute) => (
                    <MinuteComponent 
                        key={minute.id}
                        minute={minute}
                        onAddReply={handleAddReply}
                    />
                ))}
                {minutes.length === 0 && (
                    <div className='text-center text-gray-500 py-8'>
                        No minutes yet. Add the first minute to get started.
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default DocMinutesPage