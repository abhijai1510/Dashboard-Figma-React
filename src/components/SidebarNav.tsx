import './SidebarNav.css'

const SidebarNav = () => {
  const navItems = ["Dashboard", "Expenses", "Wallets", "Summary", "Accounts", "Settings"]

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile">
          <img 
            src="https://via.placeholder.com/96" 
            alt="Samantha" 
            className="avatar"
          />
          <h2 className="username">Samantha</h2>
          <p className="email">samantha@email.com</p>
        </div>
        
        <nav className="nav-menu">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-item"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default SidebarNav
