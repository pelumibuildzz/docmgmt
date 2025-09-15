'use client'
import { EllipsisVertical, InfoIcon, MessageCircle, Send } from "lucide-react"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import DocDropdown from "@/app/view/doc/[documentId]/doc-dropdown";
import Image from "next/image";
import PDFRenderer from "@/components/pdf-renderer";
import TwoFactorModal from "@/components/two-factor-modal";
import AssignDocModal from "@/view-doc-components/assign-doc-modal";
import AssignDocSuccessModal from "@/view-doc-components/assign-doc-success-modal";
import SendDocModal from "@/view-doc-components/send-doc-modal";
import SendDocSuccessModal from "@/view-doc-components/send-doc-success-modal";
import DeleteDocModal from "@/view-doc-components/delete-doc-modal";
import DeleteDocSuccessModal from "@/view-doc-components/delete-doc-success-modal";
import DownloadDocSuccessModal from "@/view-doc-components/download-doc-success-modal";
import ArchiveDocSuccessModal from "@/view-doc-components/archive-doc-success-modal";
import SignDocModal from "@/document-features-components/sign-doc/sign-doc-modal";

const ViewDocumentPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Modal states
  const [showTwoFactorModal, setShowTwoFactorModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showAssignSuccessModal, setShowAssignSuccessModal] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const [showSendSuccessModal, setShowSendSuccessModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteSuccessModal, setShowDeleteSuccessModal] = useState(false);
  const [showDownloadSuccessModal, setShowDownloadSuccessModal] = useState(false);
  const [showArchiveSuccessModal, setShowArchiveSuccessModal] = useState(false);
  const [showSignModal, setShowSignModal] = useState(false);
  
  // Signature state
  const [signatures, setSignatures] = useState<{
    manual?: boolean;
    auto?: boolean;
  }>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Modal handlers
  const handleAssignDocument = () => {
    setShowAssignModal(true);
  };

  const handleTwoFactorSuccess = () => {
    setShowTwoFactorModal(false);
    setShowDeleteModal(true);
  };

  const handleAssignSuccess = () => {
    setShowAssignModal(false);
    setShowAssignSuccessModal(true);
  };

  const handleSendDocument = () => {
    setIsDropdownOpen(false);
    setShowSendModal(true);
  };

  const handleSendSuccess = () => {
    setShowSendModal(false);
    setShowSendSuccessModal(true);
  };

  const handleDeleteDocument = () => {
    setIsDropdownOpen(false);
    setShowTwoFactorModal(true);
  };

  const handleDeleteConfirm = () => {
    setShowDeleteModal(false);
    setShowDeleteSuccessModal(true);
  };

  const handleDownloadDocument = () => {
    setIsDropdownOpen(false);
    // Simulate download process
    setShowDownloadSuccessModal(true);
  };

  const handleArchiveDocument = () => {
    setIsDropdownOpen(false);
    // Simulate archive process
    setShowArchiveSuccessModal(true);
  };

  const handleApproveAndSign = () => {
    setShowSignModal(true);
  };

  const handleSignDocument = (signatureType: 'manual' | 'auto') => {
    setSignatures(prev => ({
      ...prev,
      [signatureType]: true
    }));
    setShowSignModal(false);
  };

  const closeAllModals = () => {
    setShowTwoFactorModal(false);
    setShowAssignModal(false);
    setShowAssignSuccessModal(false);
    setShowSendModal(false);
    setShowSendSuccessModal(false);
    setShowDeleteModal(false);
    setShowDeleteSuccessModal(false);
    setShowDownloadSuccessModal(false);
    setShowArchiveSuccessModal(false);
    setShowSignModal(false);
  };

  return (
    <>
        <div className="ps-6 pe-10 flex justify-between">
            <div className="flex space-x-3">
                <Link href={"/view/details/1/metadata"} className="text-[16px] font-semibold text-primary flex space-x-[10px] items-center py-3 px-4 border-[.5px] border-gray-300 rounded-xl">
                    <InfoIcon width={24} height={24} />
                    <span>View Document Details</span>
                </Link>
                <Link href={"/view/minutes/1"} className="text-[16px] font-semibold text-primary flex space-x-[10px] items-center py-3 px-4 border-[.5px] border-gray-300 rounded-xl">
                    <MessageCircle width={24} height={24} />
                    <span>View Document Minutes</span>
                </Link>
                <button 
                    onClick={handleAssignDocument}
                    className="text-[16px] font-semibold text-primary flex space-x-[10px] items-center py-3 px-4 border-[.5px] border-gray-300 rounded-xl"
                >
                    <Send width={24} height={24} />
                    <span>Assign Document</span>
                </button>
                {/* Button should open a modal to Assign the document but first open the 2FA Modal */} 
            </div>

            <div className="relative" ref={dropdownRef}>
                <button 
                    className="flex space-x-1 items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <span>More</span>
                    <EllipsisVertical width={24} height={24} className="cursor-pointer"/>
                </button>
                
                {isDropdownOpen && (
                    <DocDropdown 
                        onDownload={handleDownloadDocument}
                        onSend={handleSendDocument}
                        onArchive={handleArchiveDocument}
                        onDelete={handleDeleteDocument}
                    />
                )}
            </div>
        </div>

        <main className="py-7 w-screen px-[214px] flex flex-col space-y-7">
            <div className="flex justify-center">
                <PDFRenderer pdfUrl="/demopdf/demo.pdf" signatures={signatures} />
            </div>
            <div className="flex justify-end space-x-4">
                <button className="text-[16px] font-semibold text-primary flex space-x-[10px] items-center py-3 px-4 border-[.5px] border-gray-300 rounded-xl">
                    <Image src="/feather.png" alt="Add Comment" width={24} height={24} />
                    <span>Add Minutes</span>
                </button>
                <button 
                    onClick={handleApproveAndSign}
                    className="text-[16px] font-semibold text-white bg-primary flex space-x-[10px] items-center py-3 px-4 border-[.5px] border-gray-300 rounded-xl"
                >
                    <Image src="/sign.png" alt="Sign Document" width={24} height={24} />
                    <span>Approve and Sign</span>
                </button>
            </div>
        </main>

        {/* Modals */}
        {showTwoFactorModal && (
            <TwoFactorModal 
                onCancel={closeAllModals}
                onContinue={handleTwoFactorSuccess}
            />
        )}
        
        {showAssignModal && (
            <AssignDocModal 
                onClose={closeAllModals}
                onSuccess={handleAssignSuccess}
            />
        )}
        
        {showAssignSuccessModal && (
            <AssignDocSuccessModal onClose={closeAllModals}  />
        )}
        
        {showSendModal && (
            <SendDocModal 
                onClose={closeAllModals}
                onSuccess={handleSendSuccess}
            />
        )}
        
        {showSendSuccessModal && (
            <SendDocSuccessModal onClose={closeAllModals}  />
        )}
        
        {showDeleteModal && (
            <DeleteDocModal 
                onClose={closeAllModals}
                onConfirm={handleDeleteConfirm}
            />
        )}
        
        {showDeleteSuccessModal && (
            <DeleteDocSuccessModal onClose={closeAllModals}  />
        )}
        
        {showDownloadSuccessModal && (
            <DownloadDocSuccessModal onClose={closeAllModals}  />
        )}
        
        {showArchiveSuccessModal && (
            <ArchiveDocSuccessModal onClose={closeAllModals}   />
        )}
        
        {showSignModal && (
            <SignDocModal 
                onClose={closeAllModals}
                onSign={handleSignDocument}
            />
        )}
    </>
  )
}

export default ViewDocumentPage