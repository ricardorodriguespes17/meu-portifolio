import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import ToolBar from "@/components/ToolBar";
import { notFound } from "next/navigation";

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
      <body className={inter.className}>
        <main className="flex flex-col gap-8 justify-center items-center bg-primary bg-wallpapper bg-cover flex-1 p-8">
          {children}
        </main>
        <ToolBar />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  notFound();
}
