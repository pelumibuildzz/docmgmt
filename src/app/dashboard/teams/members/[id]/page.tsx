"use client";

import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import { ChevronsRight } from "lucide-react"
import GoBackButton from "@/components/go-back-button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TwoFactorModal from "@/components/two-factor-modal";
import RemoveAccessModal from "@/modules/teams-components/members/remove-access-modal";
import RestoreAccessModal from "@/modules/teams-components/members/restore-access-modal";
import DeleteModal from "@/modules/teams-components/members/delete-modal";
import RevokedMemberSuccessModal from "@/modules/teams-components/members/revoked-member-success-modal";
import RestoredMemberSuccessModal from "@/modules/teams-components/members/restored-member-success-modal";
import DeletedMemberSuccessModal from "@/modules/teams-components/members/delete-member-success-modal";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const TeamMemberDetail = () => {
  const router = useRouter();
  const [hasAccess, setHasAccess] = useState(true);
  const [showTwoFactorModal, setShowTwoFactorModal] = useState(false);
  const [showRemoveAccessModal, setShowRemoveAccessModal] = useState(false);
  const [showRemoveAccessSuccessModal, setShowRemoveAccessSuccessModal] = useState(false);
  const [showRestoreAccessModal, setShowRestoreAccessModal] = useState(false);
  const [showRestoreAccessSuccessModal, setShowRestoreAccessSuccessModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteSuccessModal, setShowDeleteSuccessModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<'revoke' | 'restore' | 'delete' | null>(null);


  const handleRevokeAccessClick = () => {
    setPendingAction('revoke');
    setShowTwoFactorModal(true);
  };

  const handleRestoreAccessClick = () => {
    setPendingAction('restore');
    setShowTwoFactorModal(true);
  };

  const handleDeleteAndDeactivateClick = () => {
    setPendingAction('delete');
    setShowTwoFactorModal(true);
  };

  const handleTwoFactorContinue = () => {
    setShowTwoFactorModal(false);
    if (pendingAction === 'revoke') {
      setShowRemoveAccessModal(true);
    } else if (pendingAction === 'restore') {
      setShowRestoreAccessModal(true);
    } else if (pendingAction === 'delete') {
      setShowDeleteModal(true);
    }
  };

  const handleTwoFactorCancel = () => {
    setShowTwoFactorModal(false);
    setPendingAction(null);
  };

  const handleRemoveAccessConfirm = () => {
    setShowRemoveAccessModal(false);
    setHasAccess(false);
    setPendingAction(null);
    setShowRemoveAccessSuccessModal(true);
    // Backend logic would go here
  };

  const handleRemoveAccessCancel = () => {
    setShowRemoveAccessModal(false);
    setPendingAction(null);
  };

  const handleRestoreAccessConfirm = () => {
    setShowRestoreAccessModal(false);
    setHasAccess(true);
    setPendingAction(null);
    setShowRestoreAccessSuccessModal(true);
    // Backend logic would go here
  };

  const handleRestoreAccessCancel = () => {
    setShowRestoreAccessModal(false);
    setPendingAction(null);
  };

  const handleDeleteConfirm = () => {
    setShowDeleteModal(false);
    setPendingAction(null);
    setShowDeleteSuccessModal(true);
    // Backend logic would go here
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setPendingAction(null);
  };

  const handleBackToTeams = () => {
    router.push('/dashboard/teams/members');
  }
  return (
    <div className="col-span-7">
        <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
            <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b bg-primary-lighter border-gray-300">
                <div className="flex space-x-4 items-center">
                    <h2 className="font-semibold text-[28px]">Teams</h2>
                    <ChevronsRight width={24} height={24} />
                    <h2 className="font-medium text-[20px]">Member Details</h2>
                </div>
                 <UserInfo/>
            </header>
            <main className="w-full py-8 px-6 flex flex-col space-y-5">
                <div className="flex flex-col space-y-[58px]">
                    <div className="flex justify-between">
                        <GoBackButton />
                        <div className="w-full flex justify-end space-x-3 text-[16px] font-semibold">
                            <button 
                                onClick={handleDeleteAndDeactivateClick}
                                className="px-3 py-2 rounded-lg text-status-error border-[.5px] hover:bg-red-50 transition-colors"
                            >
                                Delete and Deactivate
                            </button>
                            {hasAccess ? (
                                <button 
                                    onClick={handleRevokeAccessClick}
                                    className="px-4 py-2 bg-status-error rounded-xl text-white"
                                >
                                    Revoke Access
                                </button>
                            ) : (
                                <button 
                                    onClick={handleRestoreAccessClick}
                                    className="px-4 py-2 bg-primary rounded-xl text-white"
                                >
                                    Restore Access
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="px-10 py-6 flex flex-col space-y-10 border-[.5px] border-gray-300 rounded-xl max-w-3xl">
                        <h3 className="font-medium text-[16px]">Personal Information</h3>
                        <div className="flex space-x-24">
                            <div className="flex flex-col space-y-4 text-[14px]">
                                <h3 className="">First Name</h3>
                                <h4 className="font-medium text-gray">Aminat</h4>
                            </div>
                            <div className="flex flex-col space-y-4 text-[14px]">
                                <h3 className="">Last Name</h3>
                                <h4 className="font-medium text-gray">Aminat</h4>
                            </div>
                            <div className="flex flex-col space-y-4 text-[14px]">
                                <h3 className="">Email</h3>
                                <h4 className="font-medium text-gray">aminat@example.com</h4>
                            </div>
                        </div>
                        <div className="flex space-x-24">
                            <div className="flex flex-col space-y-4 text-[14px]">
                                <h3 className="">Department</h3>
                                <h4 className="font-medium text-gray">Finance</h4>
                            </div>
                            <div className="flex flex-col space-y-4 text-[14px]">
                                <h3 className="">Access Level</h3>
                                <h4 className="font-medium text-gray">1</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            {/* Modals */}
            {showTwoFactorModal && (
                <TwoFactorModal 
                    onCancel={handleTwoFactorCancel}
                    onContinue={handleTwoFactorContinue}
                />
            )}
            
            {showRemoveAccessModal && (
                <RemoveAccessModal 
                    onCancel={handleRemoveAccessCancel}
                    onConfirm={handleRemoveAccessConfirm}
                />
            )}
            
            {showRestoreAccessModal && (
                <RestoreAccessModal 
                    onCancel={handleRestoreAccessCancel}
                    onConfirm={handleRestoreAccessConfirm}
                />
            )}
            
            {showDeleteModal && (
                <DeleteModal 
                    onCancel={handleDeleteCancel}
                    onConfirm={handleDeleteConfirm}
                />
            )}

            {showRemoveAccessSuccessModal && (
                <RevokedMemberSuccessModal 
                    onClose={() => setShowRemoveAccessSuccessModal(false)}
                    handleBackToTeams={handleBackToTeams}
                />
            )}

            {showRestoreAccessSuccessModal && (
                <RestoredMemberSuccessModal 
                    onClose={() => setShowRestoreAccessSuccessModal(false)}
                    handleBackToTeams={handleBackToTeams}
                />
            )}

            {showDeleteSuccessModal && (
                <DeletedMemberSuccessModal 
                    onClose={() => {
                        setShowDeleteSuccessModal(false);
                        router.push('/dashboard/teams/members');
                    }}
                />
            )}
        </div>
    </div>
  )
}

export default TeamMemberDetail