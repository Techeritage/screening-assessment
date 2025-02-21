import SideNav from "@/components/navigation/SideNav";
import "../public/Satoshi_Complete/Fonts/WEB/css/satoshi.css";
import "./globals.css";
import Header from "@/components/navigation/Header";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sato antialiased">
        <SideNav />
        <Suspense>
          <Header />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
