import { UserCircleIcon } from "lucide-react"

const Settingspage = () => {
  return (
    <div className="mt-12 w-[60%] flex flex-col space-y-8 ">
        <div className="w-full flex items-center space-x-4 px-10 py-6 border-gray-300 border-[.5px] rounded-3xl">
            <UserCircleIcon width={48} height={48} />
            <div className="flex flex-col space-y-1">
                <h2 className="text-[16px] font-medium">Adibogun Aminat</h2>
                <h3 className="text-[14px] text-gray ">abidogunaminat@gmail.com</h3>
            </div>
        </div>
        <div className="px-10 py-6 flex flex-col space-y-10 border-gray-300 border-[.5px] rounded-3xl">
            <h2 className="text-[16px] font-medium ">Profile Information</h2>
            <div className="flex justify-between ">
                <div className="flex flex-col space-y-4 text-[14px]">
                    <h3 className=" ">First Name</h3>
                    <h4 className="text-[12px] text-gray font-medium">Adibogun</h4>
                </div>
                <div className="flex flex-col space-y-4 text-[14px]">
                    <h3 className=" ">Last Name</h3>
                    <h4 className="text-[12px] text-gray font-medium">Aminat</h4>
                </div>
                <div className="flex flex-col space-y-4 text-[14px]">
                    <h3 className=" ">Email</h3>
                    <h4 className="text-[12px] text-gray font-medium">abidogunaminat@gmail.com </h4>
                </div>
            </div>
            <div className="flex justify-between w-1/2">
                <div className="flex flex-col space-y-4 text-[14px]">
                    <h3 className=" ">Department</h3>
                    <h4 className="text-[12px] text-gray font-medium">Finance</h4>
                </div>
                <div className="flex flex-col space-y-4 text-[14px]">
                    <h3 className=" ">Access Level</h3>
                    <h4 className="text-[12px] text-gray font-medium">1</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settingspage