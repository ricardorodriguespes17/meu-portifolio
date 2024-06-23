import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ricardo Rodrigues",
  description: "Portifólio de Ricardo Rodrigues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className + " flex flex-col gap-8 justify-center items-center bg-primary bg-wallpapper bg-cover h-full p-8"}>
        {children}
      </body>
    </html>
  );
}
