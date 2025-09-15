'use client'

import { ChevronLeft, ChevronRight, Dot, Search, X } from "lucide-react"
import { useState } from "react"
import { useWorkflow, Reviewer } from "@/context/workflow-context"

// Sample user data - in a real app, this would come from an API
const SAMPLE_USERS: Omit<Reviewer, 'role'>[] = [
  { id: '1', name: 'Adibogun Aminat', email: 'abidogun088@gmail.com', department: 'Finance' },
  { id: '2', name: 'John Smith', email: 'john.smith@gmail.com', department: 'HR' },
  { id: '3', name: 'Sarah Johnson', email: 'sarah.j@gmail.com', department: 'IT' },
  { id: '4', name: 'Michael Brown', email: 'michael.b@gmail.com', department: 'Operations' },
  { id: '5', name: 'Emily Davis', email: 'emily.d@gmail.com', department: 'Marketing' },
  { id: '6', name: 'David Wilson', email: 'david.w@gmail.com', department: 'Finance' },
]

interface AddReviewerModalProps {
  isOpen: boolean
  onClose: () => void
}

const AddReviewerModal: React.FC<AddReviewerModalProps> = ({ isOpen, onClose }) => {
  const { workflowData, addReviewer } = useWorkflow()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUserIds, setSelectedUserIds] = useState<Set<string>>(new Set())

  if (!isOpen) return null

  // Filter users based on search term
  const filteredUsers = SAMPLE_USERS.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.department.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Check if user is already selected as reviewer
  const isUserAlreadyReviewer = (userId: string) => {
    return workflowData.reviewers.some(reviewer => reviewer.id === userId)
  }

  // Toggle user selection
  const toggleUserSelection = (user: Omit<Reviewer, 'role'>) => {
    if (isUserAlreadyReviewer(user.id)) return // Don't allow selection if already a reviewer
    
    const newSelectedIds = new Set(selectedUserIds)
    if (newSelectedIds.has(user.id)) {
      newSelectedIds.delete(user.id)
    } else {
      newSelectedIds.add(user.id)
    }
    setSelectedUserIds(newSelectedIds)
  }

  // Save selected users as reviewers
  const handleSaveChanges = () => {
    selectedUserIds.forEach(userId => {
      const user = SAMPLE_USERS.find(u => u.id === userId)
      if (user) {
        const reviewer: Reviewer = {
          ...user,
          role: 'reviewer' // Default role
        }
        addReviewer(reviewer)
      }
    })
    setSelectedUserIds(new Set())
    onClose()
  }

  // Check if user should have primary background
  const getUserItemClass = (user: Omit<Reviewer, 'role'>) => {
    const isSelected = selectedUserIds.has(user.id)
    const isAlreadyReviewer = isUserAlreadyReviewer(user.id)
    
    if (isAlreadyReviewer) {
      return "py-2 px-6 flex flex-col bg-gray-100 opacity-50 cursor-not-allowed"
    } else if (isSelected) {
      return "py-2 px-6 flex flex-col bg-primary text-white cursor-pointer hover:bg-primary/90"
    } else {
      return "py-2 px-6 flex flex-col cursor-pointer hover:bg-gray-50"
    }
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-[16px] flex justify-center items-center">
      <div className="bg-white w-2/5 rounded-xl shadow-md p-10 flex flex-col space-y-[21px] border-b-[.5px] border-gray-300">
        <div className="flex justify-between items-center">
            <h2 className="font-semibold text-[20px]">Add Reviewers</h2>
            <button onClick={onClose}>
              <X className="text-gray-500 cursor-pointer" width={24} height={24} />
            </button>
        </div>
        
        <div className="relative">
            <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" width={20} height={20} />
            <input 
              type="text" 
              placeholder="Search by name or email" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-14 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-primary" 
            />
        </div>
        
        <div className="max-h-64 overflow-y-auto">
          <ul className="flex flex-col text-primary">
            {filteredUsers.map((user) => (
              <li 
                key={user.id}
                className={getUserItemClass(user)}
                onClick={() => toggleUserSelection(user)}
              >
                <div className="flex flex-col py-2 space-y-0.5">
                  <h3 className="text-[14px]">{user.name}</h3>
                  <div className="flex justify-between items-center text-[12px]">
                      <h5 className={selectedUserIds.has(user.id) ? "text-white/80" : "text-gray"}>{user.email}</h5>
                      <Dot width={24} height={24}/>
                      <h5 className={selectedUserIds.has(user.id) ? "text-white/80" : "text-gray"}>{user.department}</h5>
                  </div>
                </div>
              </li>
            ))}
            {filteredUsers.length === 0 && (
              <li className="py-4 text-center text-gray-500">
                No users found matching your search.
              </li>
            )}
          </ul>
        </div>
        
        <div className='flex space-x-3'>
          <button 
            onClick={handleSaveChanges}
            disabled={selectedUserIds.size === 0}
            className={`py-2 px-4 rounded-md w-fit border border-gray-300 text-white transition-colors ${
              selectedUserIds.size > 0 
                ? 'bg-primary hover:bg-primary/90 cursor-pointer' 
                : 'bg-gray cursor-not-allowed opacity-50'
            }`}
          >
            Add {selectedUserIds.size > 0 ? `${selectedUserIds.size} ` : ''}Reviewer{selectedUserIds.size !== 1 ? 's' : ''}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddReviewerModal