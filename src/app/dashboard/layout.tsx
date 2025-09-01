import Sidenav from "@/components/sidenav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen min-h-screen">
      <div className="grid grid-cols-9">
        <Sidenav />
        <div className="col-span-7">{children}</div>
      </div>
    </div>
  );
}
