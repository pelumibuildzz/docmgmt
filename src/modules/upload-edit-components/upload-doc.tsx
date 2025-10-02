"use client"

import Link from "next/link"
import { Poppins } from "next/font/google";
import { Plus, ChevronDown, X } from "lucide-react"
import GoBackButton from "@/components/go-back-button";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import NewFileModal from "./newfile-modal";
import { UploadData } from "@/app/upload-doc/page";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

type UploadDocProps = {
  onComplete: (data: Partial<UploadData>) => void
  initialData: UploadData
}

const UploadDoc = ({ onComplete, initialData }: UploadDocProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(initialData.selectedFile);
  const [isUploadDropdownOpen, setIsUploadDropdownOpen] = useState(false);
  const [uploadOption, setUploadOption] = useState(initialData.uploadOption);
  const [uploadedDocument, setUploadedDocument] = useState<File | null>(initialData.uploadedDocument);
  const [documentName, setDocumentName] = useState(initialData.documentName);
  const [isRenaming, setIsRenaming] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [isNewFileModalOpen, setIsNewFileModalOpen] = useState(false);
  const [canProceed, setCanProceed] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if all required fields are filled
  useEffect(() => {
    const hasDocument = uploadedDocument !== null;
    const hasFile = selectedFile !== "";
    setCanProceed(hasDocument && hasFile);
  }, [uploadedDocument, selectedFile]);

  // Dummy files - replace with actual data from api or state
  const files = [
    { value: "file1", label: "File 1" },
    { value: "file2", label: "File 2" }
  ];

  const uploadOptions = [
    { value: "keep-in-view", label: "Upload and Keep in View" },
    { value: "upload", label: "Upload to Knowledge Management" }
  ];

  const handleFileSelect = (file: { value: string; label: string }) => {
    setSelectedFile(file.value);
    setIsDropdownOpen(false);
  };

  const handleUploadOptionSelect = (option: { value: string; label: string }) => {
    if (option.value === "keep-in-view") {
      setUploadOption("Keep in View");
    } else {
      setUploadOption("Upload");
    }
    setIsUploadDropdownOpen(false);
  };

  const handleFileUpload = (file: File) => {
    if (file.type === "application/pdf") {
      setUploadedDocument(file);
      setDocumentName(file.name.replace('.pdf', ''));
    } else {
      alert("Only PDF files are allowed.");
    }
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setDragOver(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleAddDocumentClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveDocument = () => {
    setUploadedDocument(null);
    setDocumentName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleRenameDocument = () => {
    setIsRenaming(true);
  };

  const handleRenameSubmit = () => {
    setIsRenaming(false);
  };

  const handleRenameCancel = () => {
    if (uploadedDocument) {
      setDocumentName(uploadedDocument.name.replace('.pdf', ''));
    }
    setIsRenaming(false);
  };

  const handleCreateNewFile = () => {
    setIsNewFileModalOpen(true);
    window.scrollTo(0, 0);
  };

  const handleFileCreated = (fileName: string) => {
    // Here you would typically call an API to create the file
    // For now, we'll just add it to the files list and select it
    const newFile = { value: fileName.toLowerCase().replace(' ', '-'), label: fileName };
    // You might want to update the files array here or make an API call
    setSelectedFile(newFile.value);
    console.log('New file created:', fileName);
  };

  const handleProceedToWorkflow = () => {
    if (canProceed) {
      onComplete({
        uploadedDocument,
        documentName,
        selectedFile,
        uploadOption
      });
    }
  };

  return (
    <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
      <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300 bg-primary-lighter">
        <h2 className="font-semibold text-[28px]">Upload Document</h2>
        <Link href={"/dashboard"}><X width={24} height={24} /></Link>
      </header>
      <main className="w-full py-8 px-6 flex flex-col space-y-2">
        <div className="flex flex-col space-y-6">
            <div className="flex justify-between items-center px-10">
                <GoBackButton />
                <div className="relative">
                    <button 
                        onClick={() => setIsUploadDropdownOpen(!isUploadDropdownOpen)}
                        className="p-2 rounded-xl border border-gray-300 bg-white flex space-x-1 items-center"
                    >
                        <span className="text-[16px] font-medium">{uploadOption}</span>    
                        <ChevronDown width={24} height={24} className={`transition-transform ${isUploadDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isUploadDropdownOpen && (
                        <div className="absolute z-10 right-0 w-64 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                            {uploadOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => handleUploadOptionSelect(option)}
                                    className="w-full p-3 text-left hover:bg-gray-50 text-[16px]"
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
        <section className="py-8 px-6 flex flex-col space-y-6 w-7/12 text-[16px]">
            <div className="py-6 px-4 flex flex-col space-y-6">
                <h3 className="font-semibold">1. Select  a document from your files.</h3>
                
                {!uploadedDocument ? (
                  <div 
                    className={`border-dashed border-2 ${dragOver ? 'border-primary bg-primary-lighter' : 'border-gray-300'} rounded-lg px-20 py-9 flex flex-col justify-center items-center space-y-4 cursor-pointer transition-colors`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleAddDocumentClick}
                  >
                    <p className="text-primary flex space-x-2 font-medium ">
                      <Plus className="" width={24} height={24} />
                      <span className="">Add Document</span>
                    </p>
                    <p className="text-gray text-center">Click on the add button or drag a PDF document here to add document</p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf"
                      onChange={handleFileInputChange}
                      className="hidden"
                    />
                  </div>
                ) : (
                  <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between bg-gray-50">
                    <div className="flex items-center space-x-3 flex-1">
                      <Image src="/upload/file.png" alt="Document" width={24} height={24} />
                      {isRenaming ? (
                        <div className="flex items-center space-x-2 flex-1">
                          <input
                            type="text"
                            value={documentName}
                            onChange={(e) => setDocumentName(e.target.value)}
                            className="flex-1 px-2 py-1 border border-gray-300 rounded text-[16px] font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                            autoFocus
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleRenameSubmit();
                              } else if (e.key === 'Escape') {
                                handleRenameCancel();
                              }
                            }}
                          />
                          <span className="text-[16px] font-medium text-gray-600">.pdf</span>
                          <button
                            onClick={handleRenameSubmit}
                            className="text-green-600 hover:text-green-700 text-sm font-medium"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleRenameCancel}
                            className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <span className="text-[16px] font-medium">{documentName}.pdf</span>
                      )}
                    </div>
                    <button
                      onClick={handleRemoveDocument}
                      className="text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <X width={20} height={20} />
                    </button>
                  </div>
                )}
                
                {uploadedDocument && !isRenaming && (
                  <button 
                    onClick={handleRenameDocument}
                    className="flex space-x-2 text-primary"
                  >
                    <Plus className="" width={24} height={24} />
                    <span>Rename Document</span>
                  </button>
                )}
            </div>
            <div className="py-6 px-4 flex flex-col space-y-6">
                <h3 className="font-semibold">2. Add your document to a file or create a new file.</h3>
                <div className="relative">
                    <button 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full p-4 rounded-md border border-gray-300 bg-white text-left flex items-center justify-between"
                    >
                        <span className={selectedFile ? "text-black" : "text-gray-500"}>
                            {selectedFile ? files.find(f => f.value === selectedFile)?.label : "Search and select file names"}
                        </span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                            {files.map((file) => (
                                <button
                                    key={file.value}
                                    onClick={() => handleFileSelect(file)}
                                    className="w-full p-3 text-left hover:bg-gray-50 flex items-center space-x-3 "
                                >
                                    <Image src="/upload/file.png" alt={file.label} width={24} height={24} />
                                    <span>{file.label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <button 
                  onClick={handleCreateNewFile}
                  className="flex space-x-2 text-primary"
                >
                  <Plus className="" width={24} height={24} />
                  <span>Create New File</span>
                  {/* Change to Rename file when a file is selected */}
                </button>
            </div>
        </section>
        
        <button 
          onClick={handleProceedToWorkflow}
          disabled={!canProceed}
          className={`py-2 px-4 rounded-md w-fit self-end mr-10 transition-colors ${
            canProceed 
              ? 'bg-primary text-white hover:bg-primary-darker cursor-pointer' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Proceed to Workflow
        </button>
        
        {/* New File Modal */}
        <NewFileModal 
          isOpen={isNewFileModalOpen}
          onClose={() => setIsNewFileModalOpen(false)}
          onFileCreated={handleFileCreated}
        />
    </main>
    </div>
  )
}

export default UploadDoc