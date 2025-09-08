import { CircleCheck } from "lucide-react"


const ChangePasswordPage = () => {
  return (
    <div className="mt-32 w-[60%] flex flex-col space-y-8 ">
        <div className="flex flex-col space-y-3">
            <h3>Old Password</h3>
            <input type="text" className="p-4 text-[16px] border-gray-300 border-[.5px] rounded-md w-2/3" 
            placeholder="Enter your current password"/>
        </div>
        <div className="flex flex-col space-y-3">
            <h3>New Password</h3>
            <input type="text" className="p-4 text-[16px] border-gray-300 border-[.5px] rounded-md w-2/3" 
            placeholder="Enter your new password"/>
        </div>
        <div className="flex flex-col space-y-3">
            <h3>Confirm Password</h3>
            <input type="text" className="p-4 text-[16px] border-gray-300 border-[.5px] rounded-md w-2/3" 
            placeholder="Confirm your new password"/>
            <ul>
                <li className="flex space-x-2 items-center text-gray ">
                    <CircleCheck width={16} height={16} className="text-gray-500" />
                    <span>Minimum 10 characters</span> 
                </li>
                <li className="flex space-x-2 items-center text-gray ">
                    <CircleCheck width={16} height={16} className="text-gray-500" />
                    <span>Must include uppercase letter</span> 
                </li>
                <li className="flex space-x-2 items-center text-gray ">
                    <CircleCheck width={16} height={16} className="text-gray-500" />
                    <span>Must include lowercase letter</span> 
                </li>
                <li className="flex space-x-2 items-center text-gray ">
                    <CircleCheck width={16} height={16} className="text-gray-500" />
                    <span>Must include a number</span> 
                </li>
                <li className="flex space-x-2 items-center text-gray ">
                    <CircleCheck width={16} height={16} />
                    <span>Must include a special character</span> 
                </li>
            </ul>
        </div>
        <button className="py-2 px-4 bg-primary text-white rounded-md absolute right-16 bottom-8">Save New Password</button>
    </div>
  )
}

export default ChangePasswordPage