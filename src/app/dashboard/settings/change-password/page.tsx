"use client"
import { CircleCheck } from "lucide-react"
import { useState } from "react"
import PasswordInput from "../../../../components/password-input"

const ChangePasswordPage = () => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Password validation functions
  const hasMinLength = newPassword.length >= 10
  const hasUppercase = /[A-Z]/.test(newPassword)
  const hasLowercase = /[a-z]/.test(newPassword)
  const hasNumber = /\d/.test(newPassword)
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword)

  return (
    <div className="mt-32 w-[60%] flex flex-col space-y-8 ">
        <PasswordInput
          label="Old Password"
          labelClassName="text-black font-medium"
          containerClassName="flex flex-col space-y-3"
          className="p-4 text-[16px] border-gray-300 border-[.5px] rounded-md w-2/3"
          placeholder="Enter your current password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <PasswordInput
          label="New Password"
          labelClassName="text-black font-medium"
          containerClassName="flex flex-col space-y-3"
          className="p-4 text-[16px] border-gray-300 border-[.5px] rounded-md w-2/3"
          placeholder="Enter your new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <div className="flex flex-col space-y-3">
            <PasswordInput
              label="Confirm Password"
              labelClassName="text-black font-medium"
              containerClassName="flex flex-col space-y-3"
              className="p-4 text-[16px] border-gray-300 border-[.5px] rounded-md w-2/3"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <ul className="text-[12px]">
                <li className={`flex space-x-2 items-center ${hasMinLength ? 'text-green-600' : 'text-gray-500'}`}>
                    <CircleCheck width={16} height={16} className={hasMinLength ? 'text-green-600' : 'text-gray-500'} />
                    <span>Minimum 10 characters</span> 
                </li>
                <li className={`flex space-x-2 items-center ${hasUppercase ? 'text-green-600' : 'text-gray-500'}`}>
                    <CircleCheck width={16} height={16} className={hasUppercase ? 'text-green-600' : 'text-gray-500'} />
                    <span>Must include uppercase letter</span> 
                </li>
                <li className={`flex space-x-2 items-center ${hasLowercase ? 'text-green-600' : 'text-gray-500'}`}>
                    <CircleCheck width={16} height={16} className={hasLowercase ? 'text-green-600' : 'text-gray-500'} />
                    <span>Must include lowercase letter</span> 
                </li>
                <li className={`flex space-x-2 items-center ${hasNumber ? 'text-green-600' : 'text-gray-500'}`}>
                    <CircleCheck width={16} height={16} className={hasNumber ? 'text-green-600' : 'text-gray-500'} />
                    <span>Must include a number</span> 
                </li>
                <li className={`flex space-x-2 items-center ${hasSpecialChar ? 'text-green-600' : 'text-gray-500'}`}>
                    <CircleCheck width={16} height={16} className={hasSpecialChar ? 'text-green-600' : 'text-gray-500'} />
                    <span>Must include a special character</span> 
                </li>
            </ul>
        </div>
        <button className="py-2 px-4 bg-primary text-white rounded-md absolute right-16 bottom-8">Save New Password</button>
    </div>
  )
}

export default ChangePasswordPage