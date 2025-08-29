import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });


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
        className={`${poppins.className} w-screen min-h-screen overflow-x-clip`}
      >
        {children}
      </body>
    </html>
  );
}
