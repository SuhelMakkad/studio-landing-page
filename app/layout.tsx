import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";

import "@/styles/globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="wrapper">{children}</main>
      </body>
    </html>
  );
}
