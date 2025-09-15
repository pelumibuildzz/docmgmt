
export default function UploadDocumentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen min-h-screen">
      {children}
    </div>
  );
}