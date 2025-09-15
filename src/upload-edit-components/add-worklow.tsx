"use client"

import Link from "next/link"
import { Poppins } from "next/font/google";
import { Plus, ChevronDown, CircleDot, Info, Dot, X, ChevronLeft } from "lucide-react"
import GoBackButton from "@/components/go-back-button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { UploadData } from "@/app/upload-doc/page";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

type AddWorkflowProps = {
  onComplete: (data: Partial<UploadData>) => void
  onGoBack: () => void
  initialData: UploadData
}

const AddWorkflow = ({ onComplete, onGoBack, initialData }: AddWorkflowProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedworkflow, setSelectedworkflow] = useState(initialData.workflow);
  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState(initialData.priority);
  const [canProceed, setCanProceed] = useState(false);

  // Check if all required fields are filled
  useEffect(() => {
    const hasPriority = selectedPriority !== "";
    const hasWorkflow = selectedworkflow !== "";
    setCanProceed(hasPriority && hasWorkflow);
  }, [selectedPriority, selectedworkflow]);

  // Priority options with colors
  const priorities = [
    { value: "low", label: "Low", color: "text-priority-low" },
    { value: "medium", label: "Medium", color: "text-priority-medium" },
    { value: "high", label: "High", color: "text-priority-high" }
  ];

  // Dummy workflows - replace with actual data from api or state
  const workflows = [
    { value: "workflow1", label: "workflow 1" },
    { value: "workflow2", label: "workflow 2" }
  ];

  const handlePrioritySelect = (priority: { value: string; label: string; color: string }) => {
    setSelectedPriority(priority.value);
    setIsPriorityDropdownOpen(false);
  };

  const handleworkflowSelect = (workflow: { value: string; label: string }) => {
    setSelectedworkflow(workflow.value);
    setIsDropdownOpen(false);
  };

  const handleProceedToReview = () => {
    if (canProceed) {
      onComplete({
        priority: selectedPriority,
        workflow: selectedworkflow
      });
    }
  };

  return (
    <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen overflow-auto`}>
      <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300 bg-primary-lighter">
        <h2 className="font-semibold text-[28px]">Add Workflow</h2>
        <Link href={"/dashboard"}><X width={24} height={24} /></Link>
      </header>
      <main className="w-full py-8 px-6 flex flex-col space-y-2">
        <div className="flex flex-col space-y-6">
            <div className="flex justify-between">
                <button 
                  onClick={onGoBack}
                  className="flex space-x-4 rounded-xl border-gray-300 border-[.5px] p-2 items-center text-gray w-fit cursor-pointer min-w-max"
                >
                    <ChevronLeft className="" width={24} height={24} />
                    <span className="text-[16px] font-medium">Go Back</span>
                </button>
            </div>
        </div>
        <section className="py-8 px-6 flex flex-col space-y-6 w-7/12 text-[16px]">
            <div className="py-6 px-4 flex flex-col space-y-6">
                <h3 className="font-semibold">1. Set priority to your document</h3>
                <div className="relative">
                    <button 
                        onClick={() => setIsPriorityDropdownOpen(!isPriorityDropdownOpen)}
                        className="w-full p-4 rounded-md border border-gray-300 bg-white text-left flex items-center justify-between"
                    >
                        {selectedPriority ? (
                            <div className="flex items-center space-x-3">
                                <CircleDot className={`w-5 h-5 ${priorities.find(p => p.value === selectedPriority)?.color}`} />
                                <span className="text-black">{priorities.find(p => p.value === selectedPriority)?.label}</span>
                            </div>
                        ) : (
                            <span className="text-gray-500">Select priority level</span>
                        )}
                        <ChevronDown className={`w-5 h-5 transition-transform ${isPriorityDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isPriorityDropdownOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                            {priorities.map((priority) => (
                                <button
                                    key={priority.value}
                                    onClick={() => handlePrioritySelect(priority)}
                                    className="w-full p-3 text-left hover:bg-gray-50 flex items-center space-x-3"
                                >
                                    <CircleDot className={`w-5 h-5 ${priority.color}`} />
                                    <span>{priority.label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <div className="py-3 px-4 flex space-x-4 bg-primary-lighter rounded-md w-full">
                    <Info className="text-primary" width={24} height={24} />
                    <div className="flex flex-col space-y-2.5 text-[12px]">
                        <span className="font-light">High Priority ensures document is treated within 24 hours.</span>
                        <span className="font-light">Medium Priority ensures document is treated within three days.</span>
                        <span className="font-light">Low Priority ensures document is treated within seven days.</span>
                    </div>
                </div>
            </div>
            <div className="py-6 px-4 flex flex-col space-y-6">
                <h3 className="font-semibold">2. Add your document to an existing workflow or create a new workflow.</h3>
                <div className="relative">
                    <button 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full p-4 rounded-md border border-gray-300 bg-white text-left flex items-center justify-between"
                    >
                        {selectedworkflow ? (
                            <div className="flex items-center space-x-4">
                                <Image src="/upload/wkflow.png" alt="Workflow" width={24} height={24} />
                                <div className="flex flex-col space-y-0.5">
                                    <span className="font-medium text-black">{workflows.find(f => f.value === selectedworkflow)?.label}</span>
                                    <div className="text-gray flex space-x-0.5 items-center">
                                        <span className="text-gray">Created by: Abidogun Aminat</span>
                                        <Dot className="text-gray" width={24} height={24} />
                                        <span className="text-gray">No of Reviewers: 8</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <span className="text-gray-500">Add exsisting workflow</span>
                        )}
                        <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                            {workflows.map((workflow) => (
                                <button
                                    key={workflow.value}
                                    onClick={() => handleworkflowSelect(workflow)}
                                    className="w-full py-3 px-6 text-left hover:bg-gray-50 flex items-center space-x-4 rounded-lg "
                                >
                                    <Image src="/upload/wkflow.png" alt={workflow.label} width={24} height={24} />
                                    <div className="flex flex-col space-y-0.5">
                                        <span className="font-medium">{workflow.label}</span>
                                        <div className="text-gray flex space-x-0.5 items-center">
                                            <span className="text-gray">Created by: Abidogun Aminat</span>
                                            <Dot className="text-gray" width={24} height={24} />
                                            <span className="text-gray">No of Reviewers: 8</span>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <Link href="/workflow/new" className="flex space-x-2 text-primary">
                  <Plus className="" width={24} height={24} />
                  <span>New Workflow</span>
                  {/* Change to Change Workflow when a workflow is selected */}
                </Link>
            </div>
        </section>
        
        {/* Validation message */}
        {!canProceed && (
          <div className="px-10 text-red-500 text-sm">
            Please select priority level and workflow before proceeding.
          </div>
        )}
        
        <button 
          onClick={handleProceedToReview}
          disabled={!canProceed}
          className={`py-2 px-4 rounded-md w-fit self-end mr-10 transition-colors ${
            canProceed 
              ? 'bg-primary text-white hover:bg-primary-darker cursor-pointer' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Proceed to Review
        </button>
    </main>
    </div>
  )
}

export default AddWorkflow