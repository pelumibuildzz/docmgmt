import DocumentAuditTable from "@/audit-log-components/document/document-audit-table";
import DocumentAuditLogModal from "@/audit-log-components/document/document-auditlog-modal";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const DocumentAuditlogPage = () => {
  return (
    <main className="w-full py-8 px-6 flex flex-col space-y-[50px]">
        <div className="flex flex-col space-y-6">
            <div className="flex justify-between">
                <div className="flex space-x-4 rounded-xl border-gray border-[.5px]">
                    <Link href={"/dashboard/audit-log/documents"} className="px-3 py-2 bg-primary-light text-primary  rounded-l-xl">Documents</Link>
                    <Link href={"/dashboard/audit-log/user"} className="px-3 py-2 text-gray rounded-r-xl w-max">User</Link>
                </div>
               <div className="w-full flex justify-end space-x-3 text-[16px] font-semibold">
                    {/* Add filter functionality */}
                    <button className="px-3 py-2 rounded-lg text-primary flex space-x-2 border-[.5px]">
                        <span>Filter By</span>
                        <ChevronDown className="" width={24} height={24} />
                    </button>
                    <button className="px-4 py-2 bg-primary rounded-xl text-white">Download Log</button>
                </div>
            </div>
        </div>
        <DocumentAuditTable/>
        <DocumentAuditLogModal/>
    </main>
  )
}

export default DocumentAuditlogPage