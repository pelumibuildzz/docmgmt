'use client'

import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import {  ChevronDown, Plus, ChevronLeft } from "lucide-react";
import RecentInteractSidebar from "@/screens/view-workflow-screens/recent-interact-sidebar";
import ReviewerItem from "@/screens/view-workflow-screens/reviewer-item";
import { useWorkflow, Reviewer } from "@/context/workflow-context";
import { useState } from "react";
import AddReviewerModal from "./add-reviewr-modal";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const AddReviewerScreen = () => {
  const { nextStep, previousStep, workflowData, addReviewer } = useWorkflow()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)

  const handlePreviewWorkflow = () => {
    // Only allow navigation if at least one reviewer is added
    if (workflowData.reviewers.length > 0) {
      nextStep()
    }
  }

  const handleAddReviewers = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Handle drag and drop events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    try {
      const userData = JSON.parse(e.dataTransfer.getData('application/json'))
      const reviewer: Reviewer = {
        ...userData,
        role: 'reviewer' // Default role
      }
      addReviewer(reviewer)
    } catch (error) {
      console.error('Error parsing dropped data:', error)
    }
  }

  // Check if we have any reviewers to determine button state
  const hasReviewers = workflowData.reviewers.length > 0

  return (
    <div className="w-full min-h-screen">
        <div className="grid grid-cols-9">
            <RecentInteractSidebar/>
        <div className="col-span-7">
            <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
                <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300">
                    <h2 className="font-semibold text-[28px]">Workflow</h2>
                    <UserInfo/>
                </header>
                <main className="w-full p-6 flex flex-col space-y-11 max-w-[900px]">
                    <button 
                      onClick={previousStep}
                      className="flex space-x-4 rounded-xl border-gray-300 border-[.5px] p-2 items-center text-gray w-fit cursor-pointer min-w-max"
                    >
                      <ChevronLeft className="" width={24} height={24} />
                      <span className="text-[16px] font-medium">Go Back</span>
                    </button>

                    <div className="flex flex-col space-y-2">
                        <h3 className="font-medium text-[20px]">Step 2 of 2</h3>
                        <h5 className="text-[16px]">Add reviewers to the workflow.</h5>
                    </div>

                    <ul className="flex flex-col space-y-3">
                        {/* Display existing reviewers */}
                        {workflowData.reviewers.map((reviewer, index) => (
                            <ReviewerItem 
                                key={reviewer.id} 
                                reviewer={reviewer} 
                                stepNumber={index + 1} 
                            />
                        ))}
                        
                        {/* Add reviewers section */}
                        <li className="flex space-x-[26px]">
                            <div className="flex flex-col space-y-0.5 items-center">
                                <span className="rounded-full bg-primary text-white w-6 h-6 text-center">
                                    <span className="p-2">{workflowData.reviewers.length + 1}</span>
                                </span>
                                <span className="h-8 w-[3px] bg-primary"></span>
                            </div>
                            <div 
                                onClick={handleAddReviewers}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                className={`flex space-x-4 rounded-xl px-6 py-4 items-center border-[.5px] border-dashed cursor-pointer transition-all ${
                                    isDragOver 
                                        ? 'border-primary bg-primary/20 scale-105' 
                                        : 'border-gray-300 hover:border-primary hover:bg-primary/5'
                                }`}
                            >
                                <div className="flex flex-col space-y-1 max-w-[280px] items-center">
                                   <div className="flex space-x-1 items-center text-primary justify-center">
                                        <Plus width={24} height={24}/> 
                                        <h3 className="text-[14px] font-medium">
                                            {isDragOver ? 'Drop to Add Reviewer' : 'Add Reviewers'}
                                        </h3>
                                   </div>
                                   <h5 className="font-light text-[10px] text-center w-5/6">
                                        Click the add button or drag a name from the side bar to add reviewer.
                                   </h5>
                                </div>
                                <button className="flex rounded-xl border-[.5px] border-gray-300 items-center">
                                    {/* Reviewer or Approver */}
                                    <span className="p-2 text-[14px]">Role</span>
                                    <ChevronDown width={24} height={24} />
                                </button>
                            </div>
                        </li>
                    </ul>
                </main>
                    <button 
                        onClick={handlePreviewWorkflow}
                        disabled={!hasReviewers}
                        className={`text-white rounded-xl font-medium text-[16px] px-4 py-3 w-fit absolute bottom-14 right-14 transition-colors ${
                            hasReviewers 
                                ? 'bg-primary hover:bg-primary/90 cursor-pointer' 
                                : 'bg-gray cursor-not-allowed opacity-50'
                        }`}
                    >
                        Preview Workflow
                    </button>
            </div>
        </div>
        
        {/* Add Reviewer Modal */}
        <AddReviewerModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  )
}

export default AddReviewerScreen