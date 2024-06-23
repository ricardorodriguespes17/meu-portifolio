"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";

type HeaderProps = {
  children?: React.ReactNode;
  className?: string
}

const Header = ({ children, className }: HeaderProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className={`flex items-center gap-4 rounded-xl w-full px-5 py-3 ${className}`}>
      <nav className="hidden md:flex space-x-4 bg-white w-full py-5 px-10 rounded-full shadow-md">
        <a href="#home">Início</a>
        <a href="#about">Sobre</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contato</a>
      </nav>
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      {children}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  )
}

export default Header;