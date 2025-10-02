'use client'

import { Dot } from "lucide-react"
import Image from "next/image"
import { useWorkflow, Reviewer } from "@/context/workflow-context"

// Sample sidebar users - should match some of the users from the modal
const SIDEBAR_USERS: Omit<Reviewer, 'role'>[] = [
  { id: '1', name: 'Adibogun Aminat', email: 'abidogun088@gmail.com', department: 'Finance' },
  { id: '2', name: 'John Smith', email: 'john.smith@gmail.com', department: 'HR' },
  { id: '3', name: 'Sarah Johnson', email: 'sarah.j@gmail.com', department: 'IT' },
]

const RecentInteractSidebar = () => {
  const { workflowData } = useWorkflow()

  // Check if user is already a reviewer
  const isUserAlreadyReviewer = (userId: string) => {
    return workflowData.reviewers.some(reviewer => reviewer.id === userId)
  }

  // Handle drag start
  const handleDragStart = (e: React.DragEvent, user: Omit<Reviewer, 'role'>) => {
    if (isUserAlreadyReviewer(user.id)) {
      e.preventDefault()
      return
    }
    e.dataTransfer.setData('application/json', JSON.stringify(user))
    e.dataTransfer.effectAllowed = 'copy'
  }

  return (
    <div className={`col-span-2 px-5 py-10 border-r-[.5px] border-r-gray flex flex-col space-y-8 bg-primary-lighter`}>
        <h2 className="h-[26px] flex items-center space-x-2">
            <Image src="/logo/c-logo.png" alt="Logo" width={27} height={26} />
            <Image src="/logo/CmAG.png" alt="Logo" width={45} height={20} />
        </h2>
        <ul className="flex flex-col space-y-4">
            <div className="py-4 text-[16px] font-medium"> Recent Interactions</div>
            {SIDEBAR_USERS.map((user) => {
              const isAlreadyReviewer = isUserAlreadyReviewer(user.id)
              return (
                <li 
                  key={user.id}
                  draggable={!isAlreadyReviewer}
                  onDragStart={(e) => handleDragStart(e, user)}
                  className={`py-2 flex flex-col space-y-0.5 rounded-lg px-2 transition-all ${
                    isAlreadyReviewer 
                      ? 'opacity-50 cursor-not-allowed bg-gray-100' 
                      : 'cursor-grab hover:bg-primary/10 active:cursor-grabbing'
                  }`}
                >
                    <h3 className="text-[14px]">{user.name}</h3>
                    <div className="flex justify-between text-gray items-center text-[12px] w-3/4">
                        <h5>{user.email}</h5>
                        <Dot width={24} height={24}/>
                        <h5>{user.department}</h5>
                    </div>
                </li>
              )
            })}
        </ul>
    </div>
  )
}

export default RecentInteractSidebar