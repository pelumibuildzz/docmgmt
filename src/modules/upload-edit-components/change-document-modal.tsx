import { Plus } from 'lucide-react'
import { useState, useRef } from 'react';

interface ChangeDocumentModalProps {
  onSave?: (file: File) => void;
  onClose?: () => void;
}

const ChangeDocumentModal = ({ onSave, onClose }: ChangeDocumentModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const handleSave = () => {
    if (selectedFile && onSave) {
      onSave(selectedFile);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-[16px] flex justify-center items-center">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-2/5 rounded-xl shadow-md py-14 px-10 flex flex-col space-y-6 border-b-[.5px] border-gray-300"
      >
        <h2 className="font-semibold">Change Document</h2>
        <p className="text-gray-600">Select and add document from your files</p>
        
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileInputChange}
          className="hidden"
          accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
        />
        
        <div 
          className={`border-dashed border-2 ${isDragOver ? 'border-primary bg-primary/5' : 'border-gray-300'} rounded-lg px-12 py-6 flex flex-col justify-center items-center space-y-3 cursor-pointer transition-colors`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={triggerFileInput}
        >
          {selectedFile ? (
            <div className="text-center">
              <p className="text-primary font-medium">{selectedFile.name}</p>
              <p className="text-gray text-sm">Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              <p className="text-gray text-sm mt-2">Click to select a different file</p>
            </div>
          ) : (
            <>
              <p className="text-primary flex space-x-2 font-medium">
                <Plus className="" width={24} height={24} />
                <span className="">Add Document</span>
              </p>
              <p className="text-gray text-center text-sm">Click on the add button or drag a file here to add document</p>
            </>
          )}
        </div>
        
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
  )
}

export default ChangeDocumentModal
