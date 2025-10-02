import { Dot, X } from "lucide-react"

interface UserAuditLogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserAuditLogModal = ({ isOpen, onClose }: UserAuditLogModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="h-screen px-6 py-10 flex flex-col space-y-4 text-gray text-[14px] absolute right-0 top-0 w-[30%] bg-white shadow-2xl">
        <div className="w-full flex justify-end">
            <button onClick={onClose}>
                <X width={24} height={24} />
            </button>
        </div>
        <div className="w-full flex justify-between">
            <h2 className="font-medium">User</h2>
            <h3>Olaleye Gbolahan</h3>
        </div>
        <div className="w-full flex justify-between">
            <h2 className="font-medium">Action</h2>
            <h3>Revoked &quot;Abidogun&quot; member access</h3>
        </div>
        <div className="w-full flex justify-between">
            <h2 className="font-medium">Department</h2>
            <h3>Finance</h3>
        </div>
        <div className="w-full flex justify-between">
            <h2 className="font-medium">Performed at</h2>
            <h3 className="flex items-center">09/12/2023 <Dot width={24} height={24} className='m-1'/> 9:45am</h3>
        </div>
    </div>
  )
}

export default UserAuditLogModal