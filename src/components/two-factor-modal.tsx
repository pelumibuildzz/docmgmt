import { Check, X } from 'lucide-react'
import React, { useState, useRef } from 'react'
import Link from 'next/link'

const TwoFactorModal = () => {
  const [codes, setCodes] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple characters
    
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !codes[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newCodes = [...codes];
    
    for (let i = 0; i < pastedData.length && i < 6; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newCodes[i] = pastedData[i];
      }
    }
    
    setCodes(newCodes);
    
    // Focus the next empty input or the last one
    const nextEmptyIndex = newCodes.findIndex(code => code === '');
    const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black text-[16px] opacity-75 flex justify-center items-center">
      <div className="bg-white w-2/5 rounded-md shadow-md p-8 flex flex-col space-y-6">
        <X className="text-gray-500 self-end cursor-pointer" width={24} height={24} />
        <span className='text-center'>Please enter your six digit 2FA code from your Google Authenticator</span>
        
        <div className="flex justify-center space-x-3">
          {codes.map((code, index) => (
            <input
              key={index}
              ref={(el) => {inputRefs.current[index] = el}}
              type="text"
              value={code}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-12 text-center text-lg border-2 border-gray-300 rounded-md focus:border-primary focus:outline-none"
              maxLength={1}
              pattern="\d*"
              inputMode="numeric"
            />
          ))}
        </div>
        
        <Link 
          href={"/dashboard"} 
          className={`p-4 rounded-md text-center transition-colors ${
            codes.every(code => code !== '') 
              ? 'bg-primary text-white hover:bg-primary/90' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none'
          }`}
        >
          Continue
        </Link>
      </div>
    </div>
  )
}

export default TwoFactorModal