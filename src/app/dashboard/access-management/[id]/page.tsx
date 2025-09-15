"use client";

import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import { ChevronsRight } from "lucide-react";
import UserAccessTable from "@/access-management-components/user/user-access-table";
import UpdateAccessSuccessModal from "@/access-management-components/user/update-access-success modal";
import { useState } from "react";
import { useRouter } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

interface UserAccessData {
  [key: string]: {
    view?: boolean;
    update?: boolean;
    create?: boolean;
    send?: boolean;
    assign?: boolean;
    sign?: boolean;
    archive?: boolean;
    download?: boolean;
    delete?: boolean;
  };
}

const ManageUserAccessPage = () => {
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [accessData, setAccessData] = useState<UserAccessData>({
    documentMgt: {},
    workflow: {},
    teams: {},
    auditLog: {},
    accessMgt: {},
    recycleBin: {},
  });

  const handleAccessChange = (module: string, permission: string, checked: boolean) => {
    setAccessData(prev => ({
      ...prev,
      [module]: {
        ...prev[module],
        [permission]: checked
      }
    }));
  };

  const handleSaveChanges = () => {
    // Collect all the form data (in a real app, this would be sent to an API)
    console.log('Saving access changes:', accessData);
    
    // Since there's no backend, just show the success modal
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const handleBackToAccessManagement = () => {
    setShowSuccessModal(false);
    router.push('/dashboard/access-management');
  };


  return (
    <div className="col-span-7 min-h-screen">
        <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
            <header className="flex bg-primary-lighter px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300">
                <div className="flex space-x-4 items-center">
                    <h2 className="font-semibold text-[28px]">Access Management</h2>
                    <ChevronsRight width={24} height={24} />
                    <h2 className="font-medium text-[20px]">Manage Access</h2>
                </div>
              <UserInfo/>
            </header>
            <main className="w-full py-8 px-6 flex flex-col space-y-5 ">
                <UserAccessTable accessData={accessData} onAccessChange={handleAccessChange} />
                <button 
                  onClick={handleSaveChanges}
                  className="text-white bg-primary rounded-xl font-medium text-[16px] px-4 py-3 w-fit absolute bottom-0 right-14 hover:bg-primary/90 transition-colors"
                >
                  Save Changes
                </button>
            </main>
            
            {/* Success Modal */}
            {showSuccessModal && (
              <UpdateAccessSuccessModal 
                onClose={handleCloseModal}
                onBackToAccessManagement={handleBackToAccessManagement}
              />
            )}
        </div>
    </div>
  )
}

export default ManageUserAccessPage