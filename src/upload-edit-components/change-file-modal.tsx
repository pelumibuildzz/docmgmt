import { ChevronDown, Plus } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ChangeFileModalProps {
  onSave?: (fileName: string) => void;
  onClose?: () => void;
}

const ChangeFileModal = ({ onSave, onClose }: ChangeFileModalProps) => {
  const [selectedFile, setSelectedFile] = useState<string>("");
  
  // Sample file names - in a real app, this would come from props or an API
  const availableFiles = [
    "Document_Report.pdf",
    "Project_Proposal.docx",
    "Meeting_Minutes.txt",
    "Budget_Analysis.xlsx",
    "Design_Mockup.png"
  ];

  const handleFileSelect = (fileName: string) => {
    setSelectedFile(fileName);
  };

  const handleSave = () => {
    if (selectedFile && onSave) {
      onSave(selectedFile);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-[16px] flex justify-center items-center">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-2/5 rounded-xl shadow-md py-14 px-10 flex flex-col space-y-6 border-b-[.5px] border-gray-300"
      >
        <h2 className="font-semibold">Change File</h2>
        <p className="text-gray-600">Select from available files</p>
        
        <div className="relative">
          <ul className='border border-gray-300 rounded-md max-h-40 overflow-y-auto bg-white'>
            {availableFiles.map((fileName, index) => (
              <li 
                key={index}
                onClick={() => handleFileSelect(fileName)}
                className={`p-3 hover:bg-primary-lighter cursor-pointer flex items-center space-x-3 border-b border-gray-100 last:border-b-0 ${
                  selectedFile === fileName ? 'bg-primary-lighter border-primary' : ''
                }`}
              >
                <Image src="/upload/file.png" alt="File" width={20} height={20} />
                <span>{fileName}</span>
                {selectedFile === fileName && (
                  <span className="ml-auto text-primary text-sm">✓</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        <div className='flex justify-between items-center'>
          <button className="flex space-x-2 text-primary items-center hover:text-primary-dark">
            <Plus className="" width={24} height={24} />
            <span>Create New File</span>
          </button>
        
          <div className='flex space-x-3'>
            <button 
              onClick={handleSave}
              disabled={!selectedFile}
              className={`py-2 px-4 rounded-md w-fit ${selectedFile ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              Save Changes
            </button>
            <button 
              onClick={onClose}
              className='py-2 px-4 rounded-md w-fit border border-gray-300'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangeFileModal
