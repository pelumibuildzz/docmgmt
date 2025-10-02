"use client";

import DocumentAuditTable from "@/modules/audit-log-components/document/document-audit-table";
import DocumentAuditLogModal from "@/modules/audit-log-components/document/document-auditlog-modal";
import Link from "next/link";
import { useState } from "react";

const DocumentAuditlogPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <main className="w-full py-8 px-6 flex flex-col space-y-[50px]">
        <div className="flex flex-col space-y-6">
            <div className="flex justify-between">
                <div className="flex space-x-4 rounded-xl border-gray-300 border-[.5px]">
                    <Link href={"/dashboard/audit-log/documents"} className="px-3 py-2 bg-primary-light text-primary  rounded-l-xl">Documents</Link>
                    <Link href={"/dashboard/audit-log/user"} className="px-3 py-2 text-gray rounded-r-xl w-max">User</Link>
                </div>
               <div className="w-full flex justify-end space-x-3 text-[16px] font-semibold">
                    {/* Add filter functionality */}
                    {/* <button className="px-3 py-2 rounded-lg text-primary flex space-x-2 border-[.5px]">
                        <span>Filter By</span>
                        <ChevronDown className="" width={24} height={24} />
                    </button> */}
                    <button className="px-4 py-2 bg-primary rounded-xl text-white">Download Log</button>
                </div>
            </div>
        </div>
        <DocumentAuditTable onViewClick={handleViewClick} />
        {isModalOpen && <DocumentAuditLogModal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </main>
  )
}

export default DocumentAuditlogPage