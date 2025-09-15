'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

// Define the workflow steps
export enum WorkflowStep {
  NAME_INFO = 'nameInfo',
  ADD_REVIEWERS = 'addReviewers',
  PREVIEW = 'preview'
}

// Define reviewer type
export interface Reviewer {
  id: string
  name: string
  email: string
  department: string
  role: 'reviewer' | 'approver'
}

// Define the workflow data structure
export interface WorkflowData {
  name: string
  description: string
  instructions: string
  reviewers: Reviewer[]
}

// Define the context interface
interface WorkflowContextType {
  currentStep: WorkflowStep
  workflowData: WorkflowData
  nextStep: () => void
  previousStep: () => void
  setCurrentStep: (step: WorkflowStep) => void
  updateWorkflowData: (data: Partial<WorkflowData>) => void
  resetWorkflow: () => void
  addReviewer: (reviewer: Reviewer) => void
  removeReviewer: (reviewerId: string) => void
  updateReviewerRole: (reviewerId: string, role: 'reviewer' | 'approver') => void
}

// Create the context
const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined)

// Initial workflow data
const initialWorkflowData: WorkflowData = {
  name: '',
  description: '',
  instructions: '',
  reviewers: []
}

// Provider component
export const WorkflowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<WorkflowStep>(WorkflowStep.NAME_INFO)
  const [workflowData, setWorkflowData] = useState<WorkflowData>(initialWorkflowData)

  const nextStep = () => {
    switch (currentStep) {
      case WorkflowStep.NAME_INFO:
        setCurrentStep(WorkflowStep.ADD_REVIEWERS)
        break
      case WorkflowStep.ADD_REVIEWERS:
        setCurrentStep(WorkflowStep.PREVIEW)
        break
      case WorkflowStep.PREVIEW:
        // Handle workflow completion here
        console.log('Workflow completed:', workflowData)
        break
    }
  }

  const previousStep = () => {
    switch (currentStep) {
      case WorkflowStep.ADD_REVIEWERS:
        setCurrentStep(WorkflowStep.NAME_INFO)
        break
      case WorkflowStep.PREVIEW:
        setCurrentStep(WorkflowStep.ADD_REVIEWERS)
        break
    }
  }

  const updateWorkflowData = (data: Partial<WorkflowData>) => {
    setWorkflowData(prev => ({ ...prev, ...data }))
  }

  const addReviewer = (reviewer: Reviewer) => {
    setWorkflowData(prev => ({
      ...prev,
      reviewers: [...prev.reviewers, reviewer]
    }))
  }

  const removeReviewer = (reviewerId: string) => {
    setWorkflowData(prev => ({
      ...prev,
      reviewers: prev.reviewers.filter(r => r.id !== reviewerId)
    }))
  }

  const updateReviewerRole = (reviewerId: string, role: 'reviewer' | 'approver') => {
    setWorkflowData(prev => ({
      ...prev,
      reviewers: prev.reviewers.map(r => 
        r.id === reviewerId ? { ...r, role } : r
      )
    }))
  }

  const resetWorkflow = () => {
    setCurrentStep(WorkflowStep.NAME_INFO)
    setWorkflowData(initialWorkflowData)
  }

  const value: WorkflowContextType = {
    currentStep,
    workflowData,
    nextStep,
    previousStep,
    setCurrentStep,
    updateWorkflowData,
    resetWorkflow,
    addReviewer,
    removeReviewer,
    updateReviewerRole
  }

  return (
    <WorkflowContext.Provider value={value}>
      {children}
    </WorkflowContext.Provider>
  )
}

// Custom hook to use the workflow context
export const useWorkflow = () => {
  const context = useContext(WorkflowContext)
  if (context === undefined) {
    throw new Error('useWorkflow must be used within a WorkflowProvider')
  }
  return context
}