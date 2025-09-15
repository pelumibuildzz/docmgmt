import { PlusIcon, X } from "lucide-react"
import { useState } from "react"

interface SignDocModalProps {
  onClose: () => void;
  onSign: (signatureType: 'manual' | 'auto') => void;
}

const SignDocModal = ({ onClose, onSign }: SignDocModalProps) => {
  const [signatureType, setSignatureType] = useState<'manual' | 'auto' | null>(null);
  const [uploadedSignature, setUploadedSignature] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedSignature(file);
      setSignatureType('manual');
    }
  };

  const handleUseAutoSignature = () => {
    setSignatureType('auto');
    setUploadedSignature(null);
  };

  const handleSignDocument = () => {
    if (signatureType) {
      onSign(signatureType);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/75 flex justify-center items-center z-50">
      <div className="bg-white w-2/5 rounded-md shadow-md py-10">
        <div className="flex justify-between items-center px-10 py-2">
            <h2 className="font-semibold mb-2">Sign Document</h2>
            <X className="cursor-pointer" width={24} height={24} onClick={onClose} />
        </div>
        
        <div className="px-10 space-y-4">
          {/* Manual Signature Upload */}
          <div className="flex flex-col justify-center items-center space-y-3 border-2 border-dashed border-gray-300 py-9 px-20 rounded-xl">
            <input 
              type="file" 
              id="signature-upload" 
              accept="image/*" 
              onChange={handleFileUpload}
              className="hidden"
            />
            <label 
              htmlFor="signature-upload" 
              className="flex space-x-2 items-center cursor-pointer"
            >
              <PlusIcon className="text-primary" width={24} height={24} />
              <span className="text-primary font-semibold">Add Signature</span>
            </label>
            <span className="text-gray-500 text-center">
              Click on the add button or drag a file here to add signature from files.
            </span>
            {uploadedSignature && (
              <div className="text-green-600 text-sm">
                ✓ Signature uploaded: {uploadedSignature.name}
              </div>
            )}
          </div>

          {/* Automatic Signature Option */}
          <div className="flex justify-center">
            <button 
              onClick={handleUseAutoSignature}
              className={`text-primary font-semibold px-4 py-2 rounded ${
                signatureType === 'auto' ? 'bg-blue-50' : ''
              }`}
            >
              Use automated signature
            </button>
          </div>

          {signatureType === 'auto' && (
            <div className="text-center text-green-600 text-sm">
              ✓ Auto signature selected
            </div>
          )}

          {/* Sign Document Button */}
          <div className="flex justify-end pt-4">
            <button 
              onClick={handleSignDocument}
              disabled={!signatureType}
              className={`py-3 px-6 rounded-md font-semibold ${
                signatureType 
                  ? 'bg-primary text-white hover:bg-primary/90' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Sign Document
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignDocModal