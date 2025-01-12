import './SidebarNav.css'

const SidebarNav = () => {
  const navItems = ["Dashboard", "Expenses", "Wallets", "Summary", "Accounts", "Settings"]

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile">
          <img 
            src="https://media.licdn.com/dms/image/v2/D5603AQGM5pMCtnT4Gw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725103002572?e=1742428800&v=beta&t=WI7Q27lqER8qraPpR5FpuKc3mPEFJALBgolF4QmWRVw" 
            alt="Abhijai" 
            className="avatar"
          />
          <h2 className="username">Abhijai</h2>
          <p className="email">xyz@email.com</p>
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
