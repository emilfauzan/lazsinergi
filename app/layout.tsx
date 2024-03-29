import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin-ext"], weight: ["400"] });

export const metadata: Metadata = {
  title: "LAZ Sinergi",
  description: "Organization profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
