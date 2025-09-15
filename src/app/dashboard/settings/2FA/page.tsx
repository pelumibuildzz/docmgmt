"use client"
import { useRouter } from "next/navigation"
import { CircleCheck } from "lucide-react"
import { useState } from "react"
import TwoFactorSuccessModal from "./two-factor-success-modal"

const TwoFactorAuthenticationPage = () => {
  const router = useRouter();
  const [verificationCode, setVerificationCode] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // Validation for 6-digit code
  const isValidCode = verificationCode.length === 6 

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length <= 6) {
      setVerificationCode(value)
    }
  }

  const handleFinishSetup = () => {
    if (isValidCode) {
      setShowSuccessModal(true)
    }
  }

  const handleCloseModal = () => {
    setShowSuccessModal(false)
  }

  const handleBackToDashboard = () => {
    setShowSuccessModal(false)
    // You can add navigation logic here when you have routing set up
    router.push('/dashboard')
  }

  return (
    <>
    <div className="mt-12 w-[60%] flex flex-col space-y-6 min-h-full overflow-auto">
        <h3 className="font-medium text-[16px]">Set Up Two-Factor AuthenticationSet up Two Factor Authentication  to add a layer of security to your account.</h3>
        <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
                <h3 className="text-[16px] font-medium">Step 1</h3>
                <span className="text-[14px] text-gray ">Install any Authenticator on your mobile or install authenticator extension on your computer.</span>
                <span className="text-[14px] text-gray ">Google Authenticator (recommended), Authy, or Microsoft authenticator are popular options.</span>
                <span className="text-[14px] text-gray ">To use your authenticator app for 2-step verification, you need to pair it with this platform.</span>
            </div>
            <div className="flex flex-col space-y-2">
                <h3 className="text-[16px] font-medium">Step 2</h3>
                <span className="text-[14px] text-gray ">Scan the QR-code below with your QR-scanner on your mobile phone or web authenticator to pair.</span>
                <span className="text-[14px] text-gray ">Once paired, save us under a name you'll remember.</span>
                <div className="w-1/3 h-1/3 my-4 flex justify-center items-center p-7">
                    <img src="/path/to/qr-code.png" alt="QR Code" className="w-full h-full object-contain" />
                </div>
                <span className="text-[14px] text-gray ">Enter this code “4567898YTHJJJS” on your authenticator if your device is unable to scan code. Copy Code</span>
            </div>
            <div className="flex flex-col space-y-2">
                <h3 className="text-[16px] font-medium">Step 3</h3>
                <span className="text-[14px] text-gray ">Enter the six-digit code from your authenticator.</span>
                <div className="relative w-2/3">
                    <input 
                      type="text" 
                      className="p-4 pr-12 text-[16px] border-gray-300 border-[.5px] rounded-md w-full" 
                      placeholder="Enter code"
                      value={verificationCode}
                      onChange={handleCodeChange}
                      maxLength={6}
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <CircleCheck 
                          width={20} 
                          height={20} 
                          className={isValidCode ? "text-green-600" : "text-gray-400"} 
                        />
                    </div>
                </div>
            </div>
            <button 
              className={`py-2 px-4 rounded-md transition-colors ${
                isValidCode 
                  ? 'bg-primary text-white hover:bg-primary/90' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              onClick={handleFinishSetup}
              disabled={!isValidCode}
            >
              Finish Setup
            </button>
        </div>
    </div>
    
    {showSuccessModal && (
      <TwoFactorSuccessModal 
        onClose={handleCloseModal}
        onBackToDashboard={handleBackToDashboard}
      />
    )}
  </>
  )
}

export default TwoFactorAuthenticationPage