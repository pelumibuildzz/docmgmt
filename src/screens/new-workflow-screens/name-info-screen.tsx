'use client'

import Sidenav from "@/components/sidenav"
import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import GoBackButton from "@/components/go-back-button";
import { useWorkflow } from "@/context/workflow-context";
import { useState, useEffect, Suspense } from "react";

// Loading fallback component for Sidenav
function SidenavFallback() {
  return (
    <div className="col-span-2 bg-primary-lighter border-r border-gray-300 min-h-screen">
      <div className="p-4">
        <div className="h-8 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-6 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const NameInfoScreen = () => {
  const { nextStep, updateWorkflowData, workflowData } = useWorkflow()
  const [formData, setFormData] = useState({
    workflowname: '',
    workflowdescription: '',
    workflowinstructions: ''
  })
  const [isFormValid, setIsFormValid] = useState(false)

  // Load existing data from workflow context when component mounts
  useEffect(() => {
    if (workflowData.name || workflowData.description || workflowData.instructions) {
      setFormData({
        workflowname: workflowData.name || '',
        workflowdescription: workflowData.description || '',
        workflowinstructions: workflowData.instructions || ''
      })
    }
  }, [workflowData.name, workflowData.description, workflowData.instructions])

  // Check if all fields are filled
  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(value => value.trim() !== '')
    setIsFormValid(allFieldsFilled)
  }, [formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleContinue = () => {
    if (isFormValid) {
      // Update the workflow context with form data
      updateWorkflowData({
        name: formData.workflowname,
        description: formData.workflowdescription,
        instructions: formData.workflowinstructions
      })
      nextStep()
    }
  }

  return (
    <div className="w-full min-h-screen">
        <div className="grid grid-cols-9">
            <Suspense fallback={<SidenavFallback />}>
              <Sidenav />
            </Suspense>
        <div className="col-span-7">
            <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen relative pb-40`}>
                <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300">
                    <h2 className="font-semibold text-[28px]">Create New Workflow</h2>
                    <UserInfo/>
                </header>
                <main className="w-full p-6 flex flex-col space-y-11 max-w-[900px]">
                    <GoBackButton />

                    <form className="mt-8 flex flex-col space-y-[38px] max-w-5/6">
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-medium text-[20px]">Step 1 of 2</h3>
                            <h5 className="text-[16px]">Add name, details, and instructions to new workflow.</h5>
                        </div>
                        <section className="flex flex-col space-y-6">
                            <div className="flex flex-col space-y-3">
                                <label className="font-medium text-[16px]" htmlFor="workflowname">Workflow Name</label>
                                <input 
                                    type="text" 
                                    name="workflowname" 
                                    value={formData.workflowname}
                                    onChange={handleInputChange}
                                    placeholder="Add name to workflow" 
                                    className="border-[0.5px] border-gray-300 rounded-xl p-4 w-full" 
                                />
                            </div>
                            <div className="flex flex-col space-y-3">
                                <label className="font-medium text-[16px]" htmlFor="workflowdescription">Workflow Description</label>
                                <textarea 
                                    name="workflowdescription" 
                                    value={formData.workflowdescription}
                                    onChange={handleInputChange}
                                    placeholder="Add description" 
                                    rows={4} 
                                    className="border-[0.5px] border-gray-300 rounded-xl p-4 w-full resize-vertical" 
                                />
                            </div>
                            <div className="flex flex-col space-y-3">
                                <label className="font-medium text-[16px]" htmlFor="workflowinstructions">Workflow Instructions</label>
                                <textarea 
                                    name="workflowinstructions" 
                                    value={formData.workflowinstructions}
                                    onChange={handleInputChange}
                                    placeholder="Add Instructions to workflow" 
                                    rows={4} 
                                    className="border-[0.5px] border-gray-300 rounded-xl p-4 w-full resize-vertical" 
                                />
                            </div>
                        </section>
                    </form>
                </main>
                    <button 
                        onClick={handleContinue}
                        disabled={!isFormValid}
                        className={`text-white rounded-xl font-medium text-[16px] px-4 py-3 w-[180px] absolute bottom-14 right-14 transition-colors duration-200 ${
                            isFormValid 
                                ? 'bg-primary hover:bg-primary/90 cursor-pointer' 
                                : 'bg-gray cursor-not-allowed opacity-50'
                        }`}
                    >
                        Continue
                    </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NameInfoScreen