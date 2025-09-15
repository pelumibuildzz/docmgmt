'use client'

import { useState } from 'react'
import RestoreDocModal from '@/recycle-bin-components/restore-modal'
import TwoFactorModal from '@/components/two-factor-modal'
import RestoreSuccessModal from '@/recycle-bin-components/restore-success-modal'
import DeletePermanentModal from '@/recycle-bin-components/delete-permanent-modal'
import DeletePermanentSuccessModal from '@/recycle-bin-components/delete-permanent-success-modal'

const ViewDeletedDocPage = () => {
  const [showRestoreModal, setShowRestoreModal] = useState(false)
  const [showTwoFactorModal, setShowTwoFactorModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showDeletePermanentModal, setShowDeletePermanentModal] = useState(false)
  const [showDeleteTwoFactorModal, setShowDeleteTwoFactorModal] = useState(false)
  const [showDeleteSuccessModal, setShowDeleteSuccessModal] = useState(false)

  const handleRestoreClick = () => {
    setShowRestoreModal(true)
  }

  const handleRestoreConfirm = () => {
    setShowRestoreModal(false)
    setShowTwoFactorModal(true)
  }

  const handleRestoreCancel = () => {
    setShowRestoreModal(false)
  }

  const handleTwoFactorContinue = () => {
    setShowTwoFactorModal(false)
    setShowSuccessModal(true)
  }

  const handleTwoFactorCancel = () => {
    setShowTwoFactorModal(false)
  }

  const handleSuccessClose = () => {
    setShowSuccessModal(false)
  }

  const handleDeleteClick = () => {
    setShowDeletePermanentModal(true)
  }

  const handleDeleteConfirm = () => {
    setShowDeletePermanentModal(false)
    setShowDeleteTwoFactorModal(true)
  }

  const handleDeleteCancel = () => {
    setShowDeletePermanentModal(false)
  }

  const handleDeleteTwoFactorContinue = () => {
    setShowDeleteTwoFactorModal(false)
    setShowDeleteSuccessModal(true)
  }

  const handleDeleteTwoFactorCancel = () => {
    setShowDeleteTwoFactorModal(false)
  }

  const handleDeleteSuccessClose = () => {
    setShowDeleteSuccessModal(false)
  }

  return (
    <>
        <div className="ps-6 pe-10 flex justify-between">
            <div className="flex space-x-3">
                <button 
                  onClick={handleRestoreClick}
                  className="text-[16px] font-semibold bg-primary text-white py-3 px-4 border-[.5px] border-gray-300 rounded-xl"
                >
                    <span>Restore Document</span>
                </button>
                <button 
                  onClick={handleDeleteClick}
                  className="text-[16px] font-semibold text-status-error py-3 px-4 border-[.5px] border-status-error rounded-xl"
                >
                    <span>Delete Permanently</span>
                </button>
                {/* Button should open a modal to Assign the document but first open the 2FA Modal */} 
            </div>
        </div>

        <main className="py-7 w-screen px-[214px] flex flex-col space-y-7">
            <div className="border border-gray-300">
                {/* PDF Viewer By page Here */}
                {/* Page Switcher Here */}
            </div>
        </main>

        {/* Modals */}
        {showRestoreModal && (
          <RestoreDocModal 
            onCancel={handleRestoreCancel}
            onConfirm={handleRestoreConfirm}
          />
        )}
        
        {showTwoFactorModal && (
          <TwoFactorModal 
            onCancel={handleTwoFactorCancel}
            onContinue={handleTwoFactorContinue}
          />
        )}
        
        {showSuccessModal && (
          <RestoreSuccessModal 
            onClose={handleSuccessClose}
          />
        )}

        {showDeletePermanentModal && (
          <DeletePermanentModal 
            onCancel={handleDeleteCancel}
            onConfirm={handleDeleteConfirm}
          />
        )}
        
        {showDeleteTwoFactorModal && (
          <TwoFactorModal 
            onCancel={handleDeleteTwoFactorCancel}
            onContinue={handleDeleteTwoFactorContinue}
          />
        )}
        
        {showDeleteSuccessModal && (
          <DeletePermanentSuccessModal 
            onClose={handleDeleteSuccessClose}
          />
        )}
    </>
  )
}

export default ViewDeletedDocPage