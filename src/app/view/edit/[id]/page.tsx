'use client'
import Link from "next/link"
import { Poppins } from "next/font/google";
import { ChevronsRight, CircleDot, Dot, X, FileText } from "lucide-react"
import GoBackButton from "@/components/go-back-button";
import Image from "next/image";
import { useState } from "react";
import EditNameModal from "@/upload-edit-components/editname-modal";
import ChangeDocumentModal from "@/upload-edit-components/change-document-modal";
import ChangeFileModal from "@/upload-edit-components/change-file-modal";
import ChangePriorityModal from "@/upload-edit-components/change-priority-modal";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const ReviewDetails = () => {
  const [showEditNameModal, setShowEditNameModal] = useState(false);
  const [showChangeDocumentModal, setShowChangeDocumentModal] = useState(false);
  const [showChangeFileModal, setShowChangeFileModal] = useState(false);
  const [showChangePriorityModal, setShowChangePriorityModal] = useState(false);
  const [documentName, setDocumentName] = useState("Document_Name");
  const [fileName, setFileName] = useState("File_Name");
  const [priority, setPriority] = useState("high");

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

  return (
    <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
      <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300 bg-primary-lighter">
        <div className='flex space-x-4 items-center'>
          <div className='flex space-x-2'>
              <FileText width={56} height={56} className='text-gray'/>
              <div className='flex flex-col'>
                  <h2 className='text-[20px] font-medium'>Document Name</h2>
                  <h3 className='text-gray text-[14px]'>File: File Name</h3>
              </div>
          </div>
          <ChevronsRight className='text-gray' width={24} height={24}/>
          <span className='text-[20px] font-medium'>Edit Document</span>
        </div>
        <Link href={"/dashboard"}><X width={24} height={24} /></Link>
      </header>
      <main className="w-full py-8 flex flex-col space-y-4 pl-[300px]">
        <div className="flex flex-col space-y-6">
            <div className="flex justify-between">
                <GoBackButton />
            </div>
        </div>
        <section className="flex flex-col space-y-6 w-7/12 text-[16px]">
            <div className="py-6 px-4 flex flex-col">
                <h3 className="font-semibold">1. Document Name</h3>
                <div className={`border ${documentName !== "Document_Name" ? 'border-primary' : 'border-gray-300'} p-4 rounded-md flex justify-between`}>
                  <div className="flex items-center space-x-3">
                    <Image src={"/upload/doc.png"} alt="document icon" width={24} height={24} />
                    <span className="">{documentName}</span>
                    {documentName !== "Document_Name" && (
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
                <div className={`border ${fileName !== "File_Name" ? 'border-primary' : 'border-gray-300'} p-4 rounded-md flex justify-between`}>
                  <div className="flex items-center space-x-3">
                    <Image src={"/upload/file.png"} alt="document icon" width={24} height={24} />
                    <span className="">{fileName}</span>
                    {fileName !== "File_Name" && (
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
                <div className={`border ${priority !== "high" ? 'border-primary' : 'border-gray-300'} p-4 rounded-md flex justify-between`}>
                  <div className={`flex items-center space-x-3 ${getPriorityDisplay().color}`}>
                    <CircleDot className="" width={24} height={24} />
                    <span className="">{getPriorityDisplay().label}</span>
                    {priority !== "high" && (
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
                      <span className="font-medium">Workflow Name</span>
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