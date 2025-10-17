'use client'

import AddReviewerScreen from "@/screens/new-workflow-screens/add-reviewer-screen"
import NameInfoScreen from "@/screens/new-workflow-screens/name-info-screen"
import PreviewWorkflow from "@/screens/new-workflow-screens/preview-workflow"
import { WorkflowProvider, useWorkflow, WorkflowStep } from "@/context/workflow-context"

const WorkflowContent = () => {
  const { currentStep } = useWorkflow()

  const renderCurrentStep = () => {
    switch (currentStep) {
      case WorkflowStep.NAME_INFO:
        return <NameInfoScreen />
      case WorkflowStep.ADD_REVIEWERS:
        return <AddReviewerScreen />
      case WorkflowStep.PREVIEW:
        return <PreviewWorkflow />
      default:
        return <NameInfoScreen />
    }
  }

  return (
    <div className="w-screen min-h-screen">
      {renderCurrentStep()}
    </div>
  )
}

const NewWorkflowPage = () => {
  return (
    <WorkflowProvider>
      <WorkflowContent />
    </WorkflowProvider>
  )
}

export default NewWorkflowPage