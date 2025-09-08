import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="col-span-7">
        <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
            <header className="flex bg-primary-lighter px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300">
              <h2 className="font-semibold text-[28px]">Settings</h2>
              <UserInfo/>
            </header>
            <main className="w-full py-6 px-10 flex flex-col relative">
                <Link href={"/dashboard"} className="flex space-x-4 rounded-xl border-gray border-[.5px] p-2 items-center text-gray w-fit">
                    <ChevronLeft className="" width={24} height={24} />
                    <span className="text-[16px] font-medium">Go Back</span>
                </Link>
                <div className="flex space-x-4 text-gray mt-8">
                    <Link href={"/dashboard/settings/"} className="px-3 py-2 text-[16px] rounded-xl border-[.5px] border-gray bg-primary-light text-primary">Profile Settings</Link>
                    <Link href={"/dashboard/settings/change-password"} className="px-3 py-2 text-[16px] rounded-xl border-[.5px] border-gray">Change Password</Link>
                    <Link href={"/dashboard/settings/2FA"} className="px-3 py-2 text-[16px] rounded-xl border-[.5px] border-gray">Two Factor Authentication</Link>
                </div>
                {children}
            </main>
        </div>
    </div>
  )
}