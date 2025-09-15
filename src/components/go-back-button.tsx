"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

interface GoBackButtonProps {
  className?: string
}

const GoBackButton = ({ className = "" }: GoBackButtonProps) => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <button 
      onClick={handleGoBack}
      className={`flex space-x-4 rounded-xl border-gray-300 border-[.5px] p-2 items-center text-gray w-fit ${className} cursor-pointer min-w-max`}
    >
      <ChevronLeft className="" width={24} height={24} />
      <span className="text-[16px] font-medium">Go Back</span>
    </button>
  )
}

export default GoBackButton