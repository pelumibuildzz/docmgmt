import SideProgressBar from "@/upload-edit-components/side-progressbar";

export default function UploadDocumentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen min-h-screen">
      <div className="grid grid-cols-9">
        <SideProgressBar/>
        <div className="col-span-7">{children}</div>
      </div>
    </div>
  );
}