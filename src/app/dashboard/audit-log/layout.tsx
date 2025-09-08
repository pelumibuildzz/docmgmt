import { Poppins } from "next/font/google";
import UserInfo from "@/components/user-info";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function AuditLogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="col-span-7">
        <div className={`${poppins.className} bg-white w-full flex flex-col min-h-screen`}>
            <header className="flex bg-primary-lighter px-10 pt-6 pb-4 w-full justify-between items-center border-b border-gray-300">
              <h2 className="font-semibold text-[28px]">Audit Log</h2>
              <UserInfo/>
            </header>
            {children}
        </div>
    </div>
  )
}