'use client'
import Link from "next/link"
import { Poppins } from "next/font/google";
import { CircleDot, Dot, X, ChevronLeft } from "lucide-react"
import Image from "next/image";
import { useState } from "react";
import EditNameModal from "@/upload-edit-components/editname-modal";
import ChangeDocumentModal from "@/upload-edit-components/change-document-modal";
import ChangeFileModal from "@/upload-edit-components/change-file-modal";
import ChangePriorityModal from "@/upload-edit-components/change-priority-modal";
import { UploadData } from "@/app/upload-doc/page";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

type ReviewDetailsProps = {
  onGoBack: () => void
  uploadData: UploadData
  onSubmit: () => void
}

const ReviewDetails = ({ onGoBack, uploadData, onSubmit }: ReviewDetailsProps) => {
  const [showEditNameModal, setShowEditNameModal] = useState(false);
  const [showChangeDocumentModal, setShowChangeDocumentModal] = useState(false);
  const [showChangeFileModal, setShowChangeFileModal] = useState(false);
  const [showChangePriorityModal, setShowChangePriorityModal] = useState(false);
  const [documentName, setDocumentName] = useState(uploadData.documentName);
  const [fileName, setFileName] = useState(uploadData.selectedFile);
  const [priority, setPriority] = useState(uploadData.priority);

  const handleDocumentNameSave = (newName: string) => {
    setDocumentName(newName);
    setShowEditNameModal(false);
    window.scrollTo(0, 0); 
  };

  const handleDocumentChange = (file: File) => {
    // When changing document, update the document name only
    setDocumentName(file.name);
    setShowChangeDocumentModal(false);
    window.scrollTo(0, 0);
  };

  const handleFileChange = (newFileName: string) => {
    setFileName(newFileName);
    setShowChangeFileModal(false);
    window.scrollTo(0, 0);
  };

  const handlePriorityChange = (newPriority: string) => {
    setPriority(newPriority);
    setShowChangePriorityModal(false);
    window.scrollTo(0, 0);
  };

  const getPriorityDisplay = () => {
    const priorityMap = {
      low: { label: "Low", color: "text-priority-low" },
      medium: { label: "Medium", color: "text-priority-medium" },
      high: { label: "High", color: "text-priority-high" }
    };
    return priorityMap[priority as keyof typeof priorityMap] || priorityMap.high;
  };

  // Helper function to get workflow name
  const getWorkflowName = () => {
    const workflows = [
      { value: "workflow1", label: "workflow 1" },
      { value: "workflow2", label: "workflow 2" }
    ];
    const workflow = workflows.find(w => w.value === uploadData.workflow);
    return workflow ? workflow.label : "Unknown Workflow";
  };

  return (
    <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
      <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300 bg-primary-lighter">
        <h2 className="font-semibold text-[28px]">Review Document</h2>
        <Link href={"/dashboard"}><X width={24} height={24} /></Link>
      </header>
      <main className="w-full py-8 px-6 flex flex-col space-y-4">
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
        <section className="flex flex-col space-y-6 w-7/12 text-[16px]">
            <div className="py-6 px-4 flex flex-col">
                <h3 className="font-semibold">1. Document Name</h3>
                <div className={`border ${documentName !== uploadData.documentName ? 'border-primary' : 'border-gray-300'} p-4 rounded-md flex justify-between`}>
                  <div className="flex items-center space-x-3">
                    <Image src={"/upload/doc.png"} alt="document icon" width={24} height={24} />
                    <span className="">{documentName}</span>
                    {documentName !== uploadData.documentName && (
                      <span className="text-green-600 text-sm">(Updated)</span>
                    )}
                  </div>
                    <button 
                      onClick={() => setShowChangeDocumentModal(true)}
                      className="py-1 px-2 bg-primary text-white rounded-md"
                    >
                      Edit
                    </button>
                </div>
                <button 
                  onClick={() => setShowEditNameModal(true)}
                  className="text-primary text-left font-semibold"
                >
                  Rename Document
                </button>
            </div>
            <div className="py-6 px-4 flex flex-col">
                <h3 className="font-semibold">2. File Name</h3>
                <div className={`border ${fileName !== uploadData.selectedFile ? 'border-primary' : 'border-gray-300'} p-4 rounded-md flex justify-between`}>
                  <div className="flex items-center space-x-3">
                    <Image src={"/upload/file.png"} alt="document icon" width={24} height={24} />
                    <span className="">{fileName}</span>
                    {fileName !== uploadData.selectedFile && (
                      <span className="text-green-600 text-sm">(Updated)</span>
                    )}
                  </div>
                    <button 
                      onClick={() => setShowChangeFileModal(true)}
                      className="py-1 px-2 bg-primary text-white rounded-md"
                    >
                      Edit
                    </button>
                </div>
                <button 
                  onClick={() => setShowChangeFileModal(true)}
                  className="text-primary text-left font-semibold"
                >
                  Change File
                </button>
            </div>
            <div className="py-6 px-4 flex flex-col">
                <h3 className="font-semibold">3. Document Priority</h3>
                <div className={`border ${priority !== uploadData.priority ? 'border-primary' : 'border-gray-300'} p-4 rounded-md flex justify-between`}>
                  <div className={`flex items-center space-x-3 ${getPriorityDisplay().color}`}>
                    <CircleDot className="" width={24} height={24} />
                    <span className="">{getPriorityDisplay().label}</span>
                    {priority !== uploadData.priority && (
                      <span className="text-green-600 text-sm">(Updated)</span>
                    )}
                  </div>
                  <button 
                    onClick={() => setShowChangePriorityModal(true)}
                    className="py-1 px-2 bg-primary text-white rounded-md"
                  >
                    Edit
                  </button>
                </div>
            </div>
            <div className="py-6 px-4 flex flex-col">
                <h3 className="font-semibold">4. Workflow</h3>
                <div className="border border-gray-300 p-4 rounded-md flex justify-between">
                  <div className="flex items-center space-x-3">
                    <Image src={"/upload/wkflow.png"} alt="document icon" width={24} height={24} />
                    <div className="flex flex-col space-y-0.5">
                      <span className="font-medium">{getWorkflowName()}</span>
                      <div className="text-gray flex space-x-0.5 items-center">
                          <span className="text-gray">Created by: Abidogun Aminat</span>
                          <Dot className="text-gray" width={24} height={24} />
                          <span className="text-gray">No of Reviewers: 8</span>
                      </div>
                    </div>
                  </div>
                    <button className="py-1 px-2 bg-primary text-white rounded-md">Edit</button>
                </div>
                <button className="text-primary text-left font-semibold">Change Workflow</button>
            </div>
        </section>
        
        {/* Submit button */}
        <button 
          onClick={onSubmit}
          className="bg-primary text-white py-2 px-4 rounded-md w-fit self-end mr-10 hover:bg-primary-darker transition-colors"
        >
          Submit Document
        </button>
    </main>
    
    {/* Modals */}
    {showEditNameModal && (
      <div onClick={() => setShowEditNameModal(false)}>
        <EditNameModal 
          currentName={documentName}
          onSave={handleDocumentNameSave}
          onClose={() => setShowEditNameModal(false)} 
        />
      </div>
    )}
    
    {showChangeDocumentModal && (
      <div onClick={() => setShowChangeDocumentModal(false)}>
        <ChangeDocumentModal 
          onSave={handleDocumentChange}
          onClose={() => setShowChangeDocumentModal(false)} 
        />
      </div>
    )}
    
    {showChangeFileModal && (
      <div onClick={() => setShowChangeFileModal(false)}>
        <ChangeFileModal 
          onSave={handleFileChange}
          onClose={() => setShowChangeFileModal(false)} 
        />
      </div>
    )}
    
    {showChangePriorityModal && (
      <div onClick={() => setShowChangePriorityModal(false)}>
        <ChangePriorityModal 
          currentPriority={priority}
          onSave={handlePriorityChange}
          onClose={() => setShowChangePriorityModal(false)} 
        />
      </div>
    )}
    </div>
  )
}

export default ReviewDetails