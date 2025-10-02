'use client'

import Sidenav from "@/components/sidenav"
import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import { ChevronLeft } from "lucide-react"
import WorklowReviewerTable from "@/screens/view-workflow-screens/worklow-reviewer-table";
import { useWorkflow, WorkflowStep } from "@/context/workflow-context";
import { useRouter } from "next/navigation";
import { useState } from "react";
import WorkflowSuccessModal from "./worklow-success-modal";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const PreviewWorkflow = () => {
  const { workflowData, setCurrentStep, resetWorkflow, previousStep } = useWorkflow()
  const router = useRouter()
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSaveAndContinue = () => {
    // Here you would typically save the workflow to a backend
    // For now, show the success modal
    setShowSuccessModal(true)
    window.scrollTo(0, 0)
  }

  const handleBackToWorkflow = () => {
    // Navigate to the main workflow page
    router.push('/dashboard/workflow')
  }

  const handleCreateNewWorkflow = () => {
    // Reset the workflow state and go back to the first step
    resetWorkflow()
    setShowSuccessModal(false)
  }

  const handleEditNameInfo = () => {
    // Go back to the name info screen (step 1)
    setCurrentStep(WorkflowStep.NAME_INFO)
  }

  const handleEditReviewers = () => {
    // Go back to the add reviewers screen (step 2)
    setCurrentStep(WorkflowStep.ADD_REVIEWERS)
  }

  return (
    <div className="w-full min-h-screen">
        <div className="grid grid-cols-9">
            <Sidenav />
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

                    <div className="flex flex-col space-y-10 mt-14">
                        <div className="flex flex-col space-y-2">
                            <h3 className="px-4 py-2 font-medium text-[16px] border-b-[.1px] border-gray-300">Workflow Name</h3>
                            <h5 className="px-4 py-2 text-[16px] text-gray">{workflowData.name || 'No name provided'}</h5>
                            <div className="text-end px-4">
                                <button 
                                    onClick={handleEditNameInfo}
                                    className="px-2 py-1 rounded-xl border-[.5px] border-gray-300 text-white bg-primary text-[14px] hover:bg-primary/90 transition-colors"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="px-4 py-2 font-medium text-[16px] border-b-[.1px] border-gray-300">Workflow Description</h3>
                            <h5 className="px-4 py-2 text-[16px] text-gray">{workflowData.description || 'No description provided'}</h5>
                            <div className="text-end px-4">
                                <button 
                                    onClick={handleEditNameInfo}
                                    className="px-2 py-1 rounded-xl border-[.5px] border-gray-300 text-white bg-primary text-[14px] hover:bg-primary/90 transition-colors"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="px-4 py-2 font-medium text-[16px] border-b-[.1px] border-gray-300">Workflow Instructions</h3>
                            <h5 className="px-4 py-2 text-[16px] text-gray">{workflowData.instructions || 'No instructions provided'}</h5>
                            <div className="text-end px-4">
                                <button 
                                    onClick={handleEditNameInfo}
                                    className="px-2 py-1 rounded-xl border-[.5px] border-gray-300 text-white bg-primary text-[14px] hover:bg-primary/90 transition-colors"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-[30px] mt-20 mb-20">
                        <div className="flex justify-between px-4">
                            <h3 className="font-medium text-[16px]">Reviewer Details</h3>
                            <button 
                                onClick={handleEditReviewers}
                                className="px-2 py-1 rounded-xl border-[.5px] border-gray-300 text-white bg-primary text-[14px] hover:bg-primary/90 transition-colors"
                            >
                                Edit
                            </button>
                        </div>
                        <WorklowReviewerTable/>
                    </div>

                </main>
                    <button 
                        onClick={handleSaveAndContinue}
                        className="text-white bg-primary rounded-xl font-medium text-[16px] px-4 py-3 w-fit self-end mx-10 my-8 hover:bg-primary/90 transition-colors"
                    >
                        Save &amp; Continue
                    </button>
            </div>
        </div>
        
        {/* Success Modal */}
        <WorkflowSuccessModal 
          isOpen={showSuccessModal}
          onBackToWorkflow={handleBackToWorkflow}
          onCreateNewWorkflow={handleCreateNewWorkflow}
        />
      </div>
    </div>
  )
}

export default PreviewWorkflow
