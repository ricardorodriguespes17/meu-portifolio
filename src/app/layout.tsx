import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import ToolBar from "@/components/ToolBar";
import { notFound } from "next/navigation";
import classNames from "classnames";

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
      <body className={classNames(inter.className, "flex flex-col bg-primary bg-wallpapper bg-cover relative")}>
        <main className="flex flex-col h-screen justify-center items-center px-8 pt-4 pb-16 overflow-hidden overflow-y-auto">
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
