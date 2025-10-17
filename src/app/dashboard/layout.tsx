import Sidenav from "@/components/sidenav";
import { Suspense } from "react";

function SidenavFallback() {
  return (
    <div className="col-span-2 bg-primary-lighter border-r border-gray-300 min-h-screen">
      <div className="p-4">
        <div className="h-8 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-6 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen min-h-screen">
      <div className="grid grid-cols-9">
        <Suspense fallback={<SidenavFallback />}>
          <Sidenav />
        </Suspense>
        <div className="col-span-7">{children}</div>
      </div>
    </div>
  );
}
