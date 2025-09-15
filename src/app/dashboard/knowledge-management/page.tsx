"use client";

import { Poppins } from "next/font/google";
import { useState } from "react";
import UserInfo from "@/components/user-info";
import Link  from "next/link";
import AllDocsTable from "@/knowledge-management-components/all-docs-table";
import MyDocsTable from "@/knowledge-management-components/my-docs-table";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Restricted and Requires 2FA to access
const KnowledgeManagementPage = () => {
  const [activeTab, setActiveTab] = useState<"my" | "all">("all");
  return (
    <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
      <header className="flex px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300 bg-primary-lighter">
        <h2 className="font-semibold text-[28px]">Knowledge Management</h2>
        <UserInfo/>
      </header>
        <main className="w-full py-8 px-6 flex flex-col space-y-5">
            <div className="flex flex-col space-y-6">
                <div className="flex justify-between">
                    <div className="flex space-x-4 rounded-xl border-gray-300 border-[.5px]">
                        <button 
                            onClick={() => setActiveTab("my")}
                            className={`px-3 py-2 rounded-l-xl ${
                                activeTab === "my" 
                                    ? "bg-primary-light text-primary" 
                                    : "text-gray"
                            }`}
                        >
                            My Documents
                        </button>
                        <button 
                            onClick={() => setActiveTab("all")}
                            className={`px-3 py-2 rounded-r-xl ${
                                activeTab === "all" 
                                    ? "bg-primary-light text-primary" 
                                    : "text-gray"
                            }`}
                        >
                            All Documents
                        </button>
                    </div>
                    <Link href="/upload-doc" className="text-[16px] font-semibold px-[35px] py-3 rounded-xl text-center bg-primary text-white">Upload Document</Link>
                </div>
            </div>
            {activeTab === "all" ? <AllDocsTable/> : <MyDocsTable/>}
        </main>
    </div>
  )
}

export default KnowledgeManagementPage