import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
const inter = Inter({ subsets: ["latin"] });

import '@/styles/global.css'

export const metadata: Metadata = {
  title: "Anhtuan Kckt | Home Page",
  description: "Danh sach anhtuan kckt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
