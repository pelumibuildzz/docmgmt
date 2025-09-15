'use client'
import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import GoBackButton from "@/components/go-back-button";
import Link from "next/link";
import { usePathname } from "next/navigation";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  const getLinkClassName = (href: string) => {
    const isActive = pathname === href;
    return `px-3 py-2 text-[16px] rounded-xl border-[.5px] border-gray-300 ${
      isActive 
        ? 'bg-primary-light text-primary' 
        : 'text-gray hover:bg-gray-50'
    }`;
  };

  return (
    <div className="col-span-7">
        <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
            <header className="flex bg-primary-lighter px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300">
              <h2 className="font-semibold text-[28px]">Settings</h2>
              <UserInfo/>
            </header>
            <main className="w-full py-6 px-10 flex flex-col relative">
                <GoBackButton />
                <div className="flex space-x-4 text-gray mt-8">
                    <Link href={"/dashboard/settings/"} className={getLinkClassName("/dashboard/settings/")}>Profile Settings</Link>
                    <Link href={"/dashboard/settings/change-password"} className={getLinkClassName("/dashboard/settings/change-password")}>Change Password</Link>
                    <Link href={"/dashboard/settings/2FA"} className={getLinkClassName("/dashboard/settings/2FA")}>Two Factor Authentication</Link>
                </div>
                {children}
            </main>
        </div>
    </div>
  )
}