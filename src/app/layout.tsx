import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WrapperSession from "./components/WrapperSession";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soul Cafe App",
  description: "Welcomebek my app mamankkkk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <WrapperSession>
          {children}
        </WrapperSession>
      </body>
    </html>
  );
}
