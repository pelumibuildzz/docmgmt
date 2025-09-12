"use client"

import Link from "next/link"
import { Poppins } from "next/font/google";
import { ChevronLeft, Plus, ChevronDown, X } from "lucide-react"
import Image from "next/image";
import { useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const UploadDoc = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [isUploadDropdownOpen, setIsUploadDropdownOpen] = useState(false);
  const [uploadOption, setUploadOption] = useState("Upload");

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

  return (
    <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
      <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300 bg-primary-lighter">
        <h2 className="font-semibold text-[28px]">Upload Document</h2>
        <Link href={"/dashboard"}><X width={24} height={24} /></Link>
      </header>
      <main className="w-full py-8 px-6 flex flex-col space-y-2">
        <div className="flex flex-col space-y-6">
            <div className="flex justify-between items-center px-10">
                <Link href={"/dashboard"} className="flex space-x-4 rounded-xl border-gray border-[.5px] p-2 items-center text-gray">
                    <ChevronLeft className="" width={24} height={24} />
                    <span className="text-[16px] font-medium">Go Back</span>
                </Link>
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
                <div className="border-dashed border-2 border-gray-300 rounded-lg px-20 py-9 flex flex-col justify-center items-center space-y-4">
                    <p className="text-primary flex space-x-2 font-medium ">
                      <Plus className="" width={24} height={24} />
                      <span className="">Add Document</span>
                    </p>
                    <p className="text-gray text-center">Click on the add button or drag a document here to add document</p>
                </div>
                {/* Rename Document button when a document is added */}
            </div>
            <div className="py-6 px-4 flex flex-col space-y-6">
                <h3 className="font-semibold">2. Add your document to a file or create a new file.</h3>
                <div className="relative">
                    <button 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full p-4 rounded-md border border-gray bg-white text-left flex items-center justify-between"
                    >
                        <span className={selectedFile ? "text-black" : "text-gray-500"}>
                            {selectedFile ? files.find(f => f.value === selectedFile)?.label : "Search and select file names"}
                        </span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray rounded-md shadow-lg">
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
                <button className="flex space-x-2 text-primary">
                  <Plus className="" width={24} height={24} />
                  <span>Create New File</span>
                  {/* Change to Rename file when a file is selected */}
                </button>
            </div>
        </section>
        <button className="bg-primary text-white py-2 px-4 rounded-md w-fit self-end mr-10">Proceed to Workflow</button>
    </main>
    </div>
  )
}

export default UploadDoc