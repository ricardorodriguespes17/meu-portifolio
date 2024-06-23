type SidebarProps = {
  isOpen?: boolean
  toggleSidebar: () => void
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <aside
      className={`fixed inset-0 z-40 flex bg-white text-primary transform 
        p-6
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        transition-transform duration-300 ease-in-out md:hidden`}
    >
      <button
        className="absolute top-4 right-4 text-4xl focus:outline-none"
        onClick={toggleSidebar}
      >
        ×
      </button>
      <nav className="space-y-4 text-2xl">
        <a href="#home" className="block" onClick={toggleSidebar}>Início</a>
        <a href="#about" className="block" onClick={toggleSidebar}>About</a>
        <a href="#portfolio" className="block" onClick={toggleSidebar}>Portfolio</a>
        <a href="#contact" className="block" onClick={toggleSidebar}>Contact</a>
      </nav>
    </aside>
  )
}

export default Sidebar;