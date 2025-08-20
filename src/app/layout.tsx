import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Document Management System",
  description: "A comprehensive document management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="w-screen min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
