'use client'

import { ChevronDown, Dot } from "lucide-react"
import { Reviewer, useWorkflow } from "@/context/workflow-context"
import { useState, useRef, useEffect } from "react"

interface ReviewerItemProps {
  reviewer: Reviewer
  stepNumber: number
}

const ReviewerItem: React.FC<ReviewerItemProps> = ({ reviewer, stepNumber }) => {
  const { removeReviewer, updateReviewerRole } = useWorkflow()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleRemove = () => {
    removeReviewer(reviewer.id)
  }

  const handleRoleSelect = (role: 'reviewer' | 'approver') => {
    updateReviewerRole(reviewer.id, role)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <li className="flex space-x-[26px]">
        <div className="flex flex-col space-y-0.5 items-center">
            <span className="rounded-full bg-primary text-white w-6 h-6 text-center">
                <span className="p-2">{stepNumber}</span>
            </span>
            <span className="h-8 w-[3px] bg-primary"></span>
        </div>
        <div className="flex space-x-4 rounded-xl px-6 py-1 items-center border-[.5px] border-gray-300">
            <div className="flex flex-col space-y-2 min-w-[260px]">
                <h3 className="text-[14px]">{reviewer.name}</h3>
                <div className="flex justify-between text-gray items-center text-[12px] w-5/6">
                    <h5>{reviewer.email}</h5>
                    <Dot width={24} height={24}/>
                    <h5>{reviewer.department}</h5>
                </div>
                <button 
                    onClick={handleRemove}
                    className="bg-primary text-white px-2 py-1 text-[14px] w-fit rounded-md hover:bg-primary/90 transition-colors"
                >
                    Remove
                </button>
            </div>
            <div className="relative" ref={dropdownRef}>
                <button 
                    onClick={toggleDropdown}
                    className="flex rounded-xl border-[.5px] border-gray-300 items-center hover:border-primary transition-colors"
                >
                    <span className="p-2 text-[14px] capitalize">{reviewer.role}</span>
                    <ChevronDown 
                        width={24} 
                        height={24} 
                        className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                </button>
                
                {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-lg z-10">
                        <button
                            onClick={() => handleRoleSelect('reviewer')}
                            className={`w-full px-3 py-2 text-left text-[14px] rounded-t-xl hover:bg-gray-50 transition-colors ${
                                reviewer.role === 'reviewer' ? 'bg-primary text-white' : ''
                            }`}
                        >
                            Reviewer
                        </button>
                        <button
                            onClick={() => handleRoleSelect('approver')}
                            className={`w-full px-3 py-2 text-left text-[14px] rounded-b-xl hover:bg-gray-50 transition-colors ${
                                reviewer.role === 'approver' ? 'bg-primary text-white' : ''
                            }`}
                        >
                            Approver
                        </button>
                    </div>
                )}
            </div>
        </div>
    </li>
  )
}

export default ReviewerItem