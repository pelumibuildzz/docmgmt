'use client'

import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import Link from "next/link"
import DepartmentTable from "@/modules/teams-components/department/department-table";
import NewDepartmentModal from "@/modules/teams-components/department/new-department-modal";
import NewDepartmentSuccessModal from "@/modules/teams-components/department/new-department-success-modal";
import { useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const TeamsDepartmentPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleAddDepartment = () => {
    setShowAddModal(true);
  };

  const handleDepartmentSaved = () => {
    setShowAddModal(false);
    setShowSuccessModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleBackToTeams = () => {
    setShowSuccessModal(false);
  };

  const handleAddNewDepartment = () => {
    setShowSuccessModal(false);
    setShowAddModal(true);
  };
  return (
    <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
        <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b bg-primary-lighter border-gray-300">
          <h2 className="font-semibold text-[28px]">Teams</h2>
          <UserInfo/>
        </header>
        <main className="w-full py-8 px-6 flex flex-col space-y-5">
            <div className="flex flex-col space-y-6">
                <div className="flex justify-between">
                    <div className="flex space-x-4 rounded-xl border-gray-300 border-[.5px]">
                        <Link href={"/dashboard/teams/departments"} className="px-3 py-2 bg-primary-light text-primary  rounded-l-xl">Department</Link>
                        <Link href={"/dashboard/teams/members"} className="px-3 py-2 text-gray rounded-r-xl w-max">Team Members</Link>
                    </div>
                   <div className="w-full flex justify-end space-x-3 text-[16px] font-semibold">
                        {/* Add filter functionality */}
                        {/* <button className="px-3 py-2 rounded-lg text-primary flex space-x-2 border-[.5px]">
                            <span>Filter By</span>
                            <ChevronDown className="" width={24} height={24} />
                        </button> */}
                        <button onClick={handleAddDepartment} className="px-4 py-2 bg-primary rounded-xl text-white">Add Department</button>
                    </div>
                </div>
                <DepartmentTable/>
            </div>
        </main>
        
        {/* Modals */}
        {showAddModal && (
          <NewDepartmentModal 
            onSave={handleDepartmentSaved}
            onClose={handleCloseAddModal}
          />
        )}
        
        {showSuccessModal && (
          <NewDepartmentSuccessModal 
            onBackToTeams={handleBackToTeams}
            onAddNewDepartment={handleAddNewDepartment}
          />
        )}
    </div>
  )
}

export default TeamsDepartmentPage