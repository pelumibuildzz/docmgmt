'use client'
import { EllipsisVertical, InfoIcon, MessageCircle, Send } from "lucide-react"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import DocDropdown from "@/app/view/doc/[documentId]/doc-dropdown";
import Image from "next/image";

const ViewFilePage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
        <div className="ps-6 pe-10 flex justify-between">
            <div className="flex space-x-3">
                <Link href={"/"} className="text-[16px] font-semibold text-primary flex space-x-[10px] items-center py-3 px-4 border-[.5px] border-gray-300 rounded-xl">
                    <InfoIcon width={24} height={24} />
                    <span>View Document Details</span>
                </Link>
                <Link href={"/"} className="text-[16px] font-semibold text-primary flex space-x-[10px] items-center py-3 px-4 border-[.5px] border-gray-300 rounded-xl">
                    <MessageCircle width={24} height={24} />
                    <span>View Document Minutes</span>
                </Link>
                <button className="text-[16px] font-semibold text-primary flex space-x-[10px] items-center py-3 px-4 border-[.5px] border-gray-300 rounded-xl">
                    <Send width={24} height={24} />
                    <span>Assign Document</span>
                </button>
                {/* Button should open a modal to Assign the document but first open the 2FA Modal */} 
            </div>

            <div className="relative" ref={dropdownRef}>
                <button 
                    className="flex space-x-1 items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <span>More</span>
                    <EllipsisVertical width={24} height={24} className="cursor-pointer"/>
                </button>
                
                {isDropdownOpen && (
                    <DocDropdown />
                )}
            </div>
        </div>

        <main className="py-7 w-screen px-[214px] flex flex-col space-y-7">
            <div className="border border-gray">
                {/* PDF Viewer By page Here */}
                {/* Page Switcher Here */}
            </div>
            <div className="flex justify-end space-x-4">
                <button className="text-[16px] font-semibold text-primary flex space-x-[10px] items-center py-3 px-4 border-[.5px] border-gray-300 rounded-xl">
                    <Image src="/feather.png" alt="Add Comment" width={24} height={24} />
                    <span>Add Minutes</span>
                </button>
                <button className="text-[16px] font-semibold text-primary flex space-x-[10px] items-center py-3 px-4 border-[.5px] border-gray-300 rounded-xl">
                    <Image src="/sign.png" alt="Add Comment" width={24} height={24} />
                    <span>Approve and Sign</span>
                </button>
            </div>
        </main>
    </>
  )
}

export default ViewFilePage