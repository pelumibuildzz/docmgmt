"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import AddWorkflow from "@/modules/upload-edit-components/add-worklow"
import ReviewDetails from "@/modules/upload-edit-components/review-details"
import UploadDoc from "@/modules/upload-edit-components/upload-doc"
import SideProgressBar from "@/modules/upload-edit-components/side-progressbar"
import UploadSuccessModal from "@/modules/upload-edit-components/upload-success-modal"

export type UploadData = {
  uploadedDocument: File | null
  documentName: string
  selectedFile: string
  uploadOption: string
  priority: string
  workflow: string
}

const UploadDocPage = () => {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [uploadData, setUploadData] = useState<UploadData>({
    uploadedDocument: null,
    documentName: "",
    selectedFile: "",
    uploadOption: "Upload",
    priority: "",
    workflow: ""
  })

  const handleUploadDocComplete = (data: Partial<UploadData>) => {
    setUploadData(prev => ({ ...prev, ...data }))
    setCurrentStep(2)
  }

  const handleWorkflowComplete = (data: Partial<UploadData>) => {
    setUploadData(prev => ({ ...prev, ...data }))
    setCurrentStep(3)
  }

  const handleGoBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3)
    }
  }

  const handleSubmitDocument = () => {
    setShowSuccessModal(true)
    window.scrollTo(0, 0);
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <UploadDoc 
            onComplete={handleUploadDocComplete}
            initialData={uploadData}
          />
        )
      case 2:
        return (
          <AddWorkflow 
            onComplete={handleWorkflowComplete}
            onGoBack={handleGoBack}
            initialData={uploadData}
          />
        )
      case 3:
        return (
          <ReviewDetails 
            onGoBack={handleGoBack}
            uploadData={uploadData}
            onSubmit={handleSubmitDocument}
          />
        )
      default:
        return null
    }
  }

  return (
    <>
      <div className="grid grid-cols-9">
        <SideProgressBar currentStep={currentStep} />
        <div className="col-span-7">
          {renderCurrentStep()}
        </div>
      </div>
      
      {showSuccessModal && (
        <UploadSuccessModal 
          onBackToDashboard={() => {
            router.push('/dashboard')
          }}
          onCreateNew={() => {
            // Reset to step 1 and clear data
            setCurrentStep(1)
            setUploadData({
              uploadedDocument: null,
              documentName: "",
              selectedFile: "",
              uploadOption: "Upload",
              priority: "",
              workflow: ""
            })
            setShowSuccessModal(false)
          }}
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </>
  )
}

export default UploadDocPage