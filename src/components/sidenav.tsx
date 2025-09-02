'use client'
import Link from "next/link"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Create SVG icon components
const DashboardIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z" fill="currentColor" />
  </svg>
);

const AccessManagementIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20.0537 7.31555C20.5762 7.14137 20.5804 6.86034 20.0429 6.6812L0.956699 0.319134C0.428299 0.142974 0.125198 0.438785 0.273199 0.957065L5.7264 20.0433C5.8774 20.5718 6.1821 20.5901 6.4054 20.0877L9.9998 12.0002L3.9998 4.00017L11.9998 10.0002L20.0537 7.31555Z" fill="currentColor" />
  </svg>
);

const AuditLogIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M13.7574 0.996658L6.29145 8.4626L6.29886 12.7097L10.537 12.7023L18 5.2393V17.9967C18 18.5489 17.5523 18.9967 17 18.9967H1C0.44772 18.9967 0 18.5489 0 17.9967V1.99666C0 1.44438 0.44772 0.996658 1 0.996658H13.7574ZM17.4853 0.097168L18.8995 1.51138L9.7071 10.7038L8.2954 10.7062L8.2929 9.2896L17.4853 0.097168Z" fill="currentColor" />
  </svg>
);

const DocumentManagementIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M17 0C17.5523 0 18 0.44772 18 1V4.757L9.0012 13.7562L8.995 17.995L13.2414 18.0012L18 13.242V19C18 19.5523 17.5523 20 17 20H1C0.44772 20 0 19.5523 0 19V1C0 0.44772 0.44772 0 1 0H17ZM18.7782 6.80761L20.1924 8.2218L12.4142 16L10.9979 15.9979L11 14.5858L18.7782 6.80761ZM9 10H4V12H9V10ZM12 6H4V8H12V6Z" fill="currentColor" />
  </svg>
);

const KnowledgeManagementIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M6 18.9811C2.64378 18.7257 0 15.9216 0 12.5C0 10.1716 1.22429 8.1291 3.06426 6.9812C3.56469 3.044 6.92686 0 11 0C15.0731 0 18.4353 3.044 18.9357 6.9812C20.7757 8.1291 22 10.1716 22 12.5C22 15.9216 19.3562 18.7257 16 18.9811V19H6V18.9811ZM12 11H15L11 6L7 11H10V15H12V11Z" fill="currentColor" />
  </svg>
);

const RecycleBinIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M17.5611 10.0985L19.0926 12.7501C20.0591 14.4241 19.4855 16.5647 17.8115 17.5312C17.2794 17.8384 16.6759 18.0001 16.0615 18.0001L13.9993 17.9995V20.0001L8.9993 16.5001L13.9993 13.0001V14.9995L16.0615 15.0001C16.1493 15.0001 16.2355 14.977 16.3115 14.9331C16.5241 14.8104 16.6124 14.5551 16.5325 14.332L16.4945 14.2501L14.9631 11.5985L17.5611 10.0985ZM5.73617 7.38407L6.26726 13.4642L4.53571 12.4645L3.50412 14.2501C3.46023 14.3261 3.43713 14.4123 3.43713 14.5001C3.43713 14.7456 3.614 14.9497 3.84725 14.992L3.93713 15.0001L6.99919 14.9997V17.9996L3.93713 18.0001C2.00413 18.0001 0.437128 16.4331 0.437128 14.5001C0.437128 13.8857 0.598848 13.2822 0.906038 12.7501L1.93763 10.9645L0.205078 9.9642L5.73617 7.38407ZM11.7493 0.969009C12.2814 1.2762 12.7232 1.71803 13.0304 2.2501L14.061 4.03629L15.7935 3.03599L15.2624 9.1161L9.7314 6.53599L11.4629 5.53629L10.4323 3.7501C10.3884 3.67409 10.3253 3.61097 10.2493 3.56708C10.0367 3.44435 9.7715 3.49546 9.6182 3.67629L9.5663 3.7501L8.0356 6.40209L5.4376 4.90216L6.96822 2.2501C7.93472 0.576069 10.0753 0.00250897 11.7493 0.969009Z" fill="currentColor" />
  </svg>
);

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 0L19.5 5.5V16.5L10 22L0.5 16.5V5.5L10 0ZM10 14C11.6569 14 13 12.6569 13 11C13 9.3431 11.6569 8 10 8C8.3431 8 7 9.3431 7 11C7 12.6569 8.3431 14 10 14Z" fill="currentColor" />
  </svg>
);

const TeamsIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 21C0 16.5817 3.58172 13 8 13C12.4183 13 16 16.5817 16 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM15.3628 14.2332C18.4482 15.0217 20.7679 17.7235 20.9836 21H18C18 18.3902 17.0002 16.0139 15.3628 14.2332ZM13.3401 11.9569C14.9728 10.4922 16 8.36607 16 6C16 4.58266 15.6314 3.25141 14.9849 2.09687C17.2753 2.55397 19 4.57465 19 7C19 9.7625 16.7625 12 14 12C13.7763 12 13.556 11.9853 13.3401 11.9569Z" fill="currentColor" />
  </svg>
);

const WorkflowIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4 20.5C2.067 20.5 0.5 18.933 0.5 17C0.5 15.067 2.067 13.5 4 13.5C5.5852 13.5 6.92427 14.5538 7.35481 15.9991L13 15.9993V14L15 13.9993V8.24332L12.757 5.99932H7V7.99996H1V1.99996H7V3.99932H12.757L16 0.757324L20.2426 4.99996L17 8.24132V13.9993L19 14V20H13V17.9993L7.35499 18.0002C6.92464 19.4458 5.58543 20.5 4 20.5ZM4 15.5C3.17157 15.5 2.5 16.1715 2.5 17C2.5 17.8284 3.17157 18.5 4 18.5C4.82843 18.5 5.5 17.8284 5.5 17C5.5 16.1715 4.82843 15.5 4 15.5ZM17 16H15V18H17V16ZM16 3.58575L14.5858 4.99996L16 6.41418L17.4142 4.99996L16 3.58575ZM5 3.99996H3V5.99996H5V3.99996Z" fill="currentColor" />
  </svg>
);

const Sidenav = () => {
  const [isDocMgmtOpen, setIsDocMgmtOpen] = useState(false);
  const pathname = usePathname();

  const toggleDocMgmt = () => {
    setIsDocMgmtOpen(!isDocMgmtOpen);
  };

  const isActive = (path: string) => pathname === path;
  const isDocMgmtActive = () => pathname.startsWith('/dashboard/doc-mgmt');

  const getLinkClasses = (path: string) => {
    const baseClasses = "cursor-pointer h-12 px-2 py-3 flex space-x-2 rounded-xl";
    const activeClasses = "text-primary bg-primary-light";
    const inactiveClasses = "text-gray hover:text-primary hover:bg-primary-light";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  const getSubLinkClasses = (path: string) => {
    const baseClasses = "block px-2 py-2 text-[16px] font-medium";
    const activeClasses = "text-primary";
    const inactiveClasses = "text-gray hover:text-primary";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <div className={`col-span-2 px-5 py-10 border-r-[.5px] border-r-gray flex flex-col space-y-8 ${poppins.className} bg-primary-lighter min-h-screen`}>
      <h2 className="h-[26px] flex items-center space-x-2">
        <Image src="/logo/c-logo.png" alt="Logo" width={27} height={26} />
        <Image src="/logo/CmAG.png" alt="Logo" width={45} height={20} />
      </h2>
      <ul className="flex flex-col space-y-4">
        <li>
          <Link href="/dashboard" className={getLinkClasses("/dashboard")}>
            <DashboardIcon className="text-current" />
            <span className="text-[16px]">Dashboard</span>
          </Link>
        </li>
        <li>
          <div>
            <button 
              onClick={toggleDocMgmt}
              className={`w-full cursor-pointer h-12 px-2 py-3 rounded-xl min-h-max ${isDocMgmtActive() ? 'text-primary bg-primary-light' : 'text-gray hover:text-primary hover:bg-primary-light'}`}
            >
              <Link href="/dashboard/doc-mgmt" className="flex space-x-2">
              <DocumentManagementIcon className="text-current" />
              <span className="text-[16px] w-fit">Document Management</span>
              {isDocMgmtOpen ? <ChevronDown width={24} height={24} /> : <ChevronUp width={24} height={24} />}
              </Link>
            </button>
            {isDocMgmtOpen && (
              <ul className="mt-2 px-4 py-2">
                <li>
                  <Link href="/dashboard/doc-mgmt" className={getSubLinkClasses("/dashboard/doc-mgmt")}>
                    <span>All Docs</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/doc-mgmt/keep-in-view" className={getSubLinkClasses("/dashboard/doc-mgmt/keep-in-view")}>
                    <span>Keep in View</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/doc-mgmt/assigned-to-me" className={getSubLinkClasses("/dashboard/doc-mgmt/assigned-to-me")}>
                    <span>Assigned To Me</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/doc-mgmt/ongoing-review" className={getSubLinkClasses("/dashboard/doc-mgmt/ongoing-review")}>
                    <span>Ongoing Review</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/doc-mgmt/document-templates" className={getSubLinkClasses("/dashboard/doc-mgmt/document-templates")}>
                    <span>Document Templates</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/doc-mgmt/due-today" className={getSubLinkClasses("/dashboard/doc-mgmt/due-today")}>
                    <span>Due Today</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/doc-mgmt/updated-docs" className={getSubLinkClasses("/dashboard/doc-mgmt/updated-docs")}>
                    <span>Updated Docs</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/doc-mgmt/completed-docs" className={getSubLinkClasses("/dashboard/doc-mgmt/completed-docs")}>
                    <span>Completed Docs</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/doc-mgmt/archived-docs" className={getSubLinkClasses("/dashboard/doc-mgmt/archived-docs")}>
                    <span>Archived Docs</span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <Link href="/dashboard/workflow" className={getLinkClasses("/dashboard/workflow")}>
            <WorkflowIcon className="text-current" />
            <span className="text-[16px]">Workflow</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/teams/departments" className={getLinkClasses("/dashboard/teams")}>
            <TeamsIcon className="text-current" />
            <span className="text-[16px]">Teams</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/access-management" className={getLinkClasses("/dashboard/access-management")}>
            <AccessManagementIcon className="text-current" />
            <span className="text-[16px]">Access Management</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/audit-log" className={getLinkClasses("/dashboard/audit-log")}>
            <AuditLogIcon className="text-current" />
            <span className="text-[16px]">Audit Log</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/settings" className={getLinkClasses("/dashboard/settings")}>
            <SettingsIcon className="text-current" />
            <span className="text-[16px]">Settings</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/recycle-bin" className={getLinkClasses("/dashboard/recycle-bin")}>
            <RecycleBinIcon className="text-current" />
            <span className="text-[16px]">Recycle Bin</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/knowledge-management" className={getLinkClasses("/dashboard/knowledge-management")}>
            <KnowledgeManagementIcon className="text-current" />
            <span className="text-[16px]">Knowledge Management</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidenav