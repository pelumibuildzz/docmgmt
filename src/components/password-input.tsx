"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
}

const PasswordInput = ({
  value,
  onChange,
  placeholder = "Password",
  className = "",
  required = false,
  label,
  labelClassName = "",
  containerClassName = ""
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={containerClassName}>
      {label && (
        <label className={labelClassName}>
          {label}
        </label>
      )}
      <div className="relative flex">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={`${className} pr-12`}
          value={value}
          onChange={onChange}
          required={required}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition-colors duration-200"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff width={20} height={20} />
          ) : (
            <Eye width={20} height={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;