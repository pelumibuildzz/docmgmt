"use client";
import Image from "next/image";
import {Poppins} from "next/font/google";
import { Check } from "lucide-react";
import { useState } from "react";

const poppins = Poppins({ 
    subsets: ["latin"], 
    weight: ["400", "500", "600", "700"] 
});

const NewPassword = ({ onContinue }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Password validation states
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false
  });

  const validatePassword = (pwd) => {
    setPasswordValidation({
      minLength: pwd.length >= 10,
      hasUpperCase: /[A-Z]/.test(pwd),
      hasLowerCase: /[a-z]/.test(pwd),
      hasNumber: /\d/.test(pwd),
      hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd)
    });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && confirmPassword && password === confirmPassword) {
      const allValidationsPassed = Object.values(passwordValidation).every(Boolean);
      if (allValidationsPassed && onContinue) {
        onContinue();
      }
    }
  };

  const isFormValid = password && 
                     confirmPassword && 
                     password === confirmPassword && 
                     Object.values(passwordValidation).every(Boolean);
  return (
    <main className="w-screen bg-white px-[468px] pt-[130px]">
            <div className="h-[26px] flex items-center space-x-2">
                <Image src="/logo/c-logo.png" alt="Logo" width={27} height={26} />
                <Image src="/logo/CmAG.png" alt="Logo" width={45} height={20} />
            </div>
            <h2 className={`${poppins.className} text-[28px] text-black font-semibold my-4`}>Create New Password</h2>
            <h3 className={`${poppins.className} text-[16px] text-black my-12`}>Please enter your new password below.</h3>
            <form className="flex flex-col space-y-8" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-3">
                    <h4 className={`${poppins.className} text-[16px] font-medium text-black`}>New Password</h4>
                    <input 
                        className="border border-gray p-4 w-full rounded-lg" 
                        type="password" 
                        placeholder="Enter your new password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className="flex flex-col space-y-3">
                    <h4 className={`${poppins.className} text-[16px] font-medium text-black`}>Confirm Password</h4>
                    <input 
                        className="border border-gray p-4 w-full rounded-lg" 
                        type="password" 
                        placeholder="Confirm your new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <ul className="flex flex-col space-y-4">
                        <li className="flex space-x-2">
                            <Check 
                                width={16} 
                                height={16} 
                                className={`rounded-full text-white ${passwordValidation.minLength ? 'bg-green-500' : 'bg-gray'}`}
                            />
                            <span className={`${poppins.className} text-[12px] ${passwordValidation.minLength ? 'text-green-500' : 'text-gray'}`}>
                                Minimum of 10 characters
                            </span>
                        </li>
                        <li className="flex space-x-2">
                            <Check 
                                width={16} 
                                height={16} 
                                className={`rounded-full text-white ${passwordValidation.hasUpperCase ? 'bg-green-500' : 'bg-gray'}`}
                            />
                            <span className={`${poppins.className} text-[12px] ${passwordValidation.hasUpperCase ? 'text-green-500' : 'text-gray'}`}>
                                Must include uppercase letter
                            </span>
                        </li>
                        <li className="flex space-x-2">
                            <Check 
                                width={16} 
                                height={16} 
                                className={`rounded-full text-white ${passwordValidation.hasLowerCase ? 'bg-green-500' : 'bg-gray'}`}
                            />
                            <span className={`${poppins.className} text-[12px] ${passwordValidation.hasLowerCase ? 'text-green-500' : 'text-gray'}`}>
                                Must include lowercase letter
                            </span>
                        </li>
                        <li className="flex space-x-2">
                            <Check 
                                width={16} 
                                height={16} 
                                className={`rounded-full text-white ${passwordValidation.hasNumber ? 'bg-green-500' : 'bg-gray'}`}
                            />
                            <span className={`${poppins.className} text-[12px] ${passwordValidation.hasNumber ? 'text-green-500' : 'text-gray'}`}>
                                Must include a number
                            </span>
                        </li>
                        <li className="flex space-x-2">
                            <Check 
                                width={16} 
                                height={16} 
                                className={`rounded-full text-white ${passwordValidation.hasSpecialChar ? 'bg-green-500' : 'bg-gray'}`}
                            />
                            <span className={`${poppins.className} text-[12px] ${passwordValidation.hasSpecialChar ? 'text-green-500' : 'text-gray'}`}>
                                Must include a special character
                            </span>
                        </li>
                    </ul>
                </div>
            </form>
            <div className="flex justify-end mt-8 pb-8">
                <button 
                    type="button"
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                    className={`${poppins.className} ${
                        isFormValid
                            ? 'bg-primary hover:bg-primary/90' 
                            : 'bg-gray cursor-not-allowed'
                    } text-white w-[189px] h-[44px] text-[16px] py-3 px-5 rounded-lg transition-colors`}
                >
                    Continue
                </button>
            </div>
        </main>
    );
};

export default NewPassword;