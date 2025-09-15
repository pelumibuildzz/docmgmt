"use client";

import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import { ChevronsRight } from "lucide-react";
import GoBackButton from "@/components/go-back-button";
import NewMemberSuccessModal from "@/teams-components/members/new-member-success-modal";
import { useState } from "react";
import { useRouter } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });


const AddNewMemberPage = () => {
  const router = useRouter();
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    accessLevel: ""
  });
  
  // Modal state
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // Check if all fields are filled
  const isFormValid = formData.name.trim() !== "" && 
                     formData.email.trim() !== "" && 
                     formData.department.trim() !== "" && 
                     formData.accessLevel !== "";
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    console.log(isFormValid);
    if (isFormValid) {
      // Here you would typically send data to backend
      setShowSuccessModal(true);
      window.scrollTo(0, 0);
    }
  };
  
  // Handle modal actions
  const handleBackToTeams = () => {
    router.push('/dashboard/teams/members');
  };
  
  const handleAddNewMember = () => {
    setShowSuccessModal(false);
    setFormData({
      name: "",
      email: "",
      department: "",
      accessLevel: ""
    });
  };
  return (
    <div className="col-span-7">
        <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
            <header className="flex bg-primary-lighter px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300">
                <div className="flex space-x-4 items-center">
                    <h2 className="font-semibold text-[28px]">Teams</h2>
                    <ChevronsRight width={24} height={24} />
                    <h2 className="font-medium text-[20px]">Add New Member</h2>
                </div>
              <UserInfo/>
            </header>
            <main className="w-full py-8 px-6 flex flex-col space-y-5 min-h-screen">
                <GoBackButton />

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-[38px] max-w-4/6 px-4">
                    <section className="flex flex-col space-y-12">
                        <div className="flex flex-col space-y-3">
                            <label className="font-medium text-[16px]" htmlFor="name">Name</label>
                            <input 
                              type="text" 
                              name="name" 
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Add name to member" 
                              className="border-[0.5px] border-gray-300 rounded-xl p-4 w-full" 
                            />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <label className="font-medium text-[16px]" htmlFor="email">Email</label>
                            <input 
                              type="email" 
                              name="email" 
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Add email to member" 
                              className="border-[0.5px] border-gray-300 rounded-xl p-4 w-full" 
                            />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <label className="font-medium text-[16px]" htmlFor="department">Department</label>
                            <input 
                              type="text" 
                              name="department" 
                              value={formData.department}
                              onChange={handleInputChange}
                              placeholder="Add department to member" 
                              className="border-[0.5px] border-gray-300 rounded-xl p-4 w-full" 
                            />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <label className="font-medium text-[16px]" htmlFor="accessLevel">Access Level</label>
                            <select 
                              name="accessLevel" 
                              value={formData.accessLevel}
                              onChange={handleInputChange}
                              className="border-[0.5px] border-gray-300 rounded-xl p-4 w-full"
                            >
                                <option value="">Select access level</option>
                                <option value="1">Level 1</option>
                                <option value="2">Level 2</option>
                                <option value="3">Level 3</option>
                            </select>
                        </div>
                    </section>
                    
                    <button 
                      type="submit"
                      disabled={!isFormValid}
                      className={`font-medium text-[16px] px-4 py-3 w-fit self-end rounded-xl transition-all duration-200 absolute bottom-0 right-14 ${
                        isFormValid 
                          ? 'text-white bg-primary hover:bg-primary/90 cursor-pointer' 
                          : 'text-gray-400 bg-gray-200 cursor-not-allowed'
                      }`}
                    >
                      Add Member
                    </button>
                </form>
                
                {/* Success Modal */}
                {showSuccessModal && (
                  <NewMemberSuccessModal 
                    onBackToTeams={handleBackToTeams}
                    onAddNewMember={handleAddNewMember}
                  />
                )}
            </main>
        </div>
    </div>
  )
}

export default AddNewMemberPage