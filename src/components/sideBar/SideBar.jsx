function SideBar({ activePage, onPageChange, onLogout }) {
  const navItems = [
    { id: "Dashboard", label: "Dashboard" },
    { id: "Products", label: "Products" },
    { id: "Orders", label: "Orders" },
    { id: "WeatherApi", label: "WeatherApi" },
  ];
  return (
    <div>
      <aside className="sidebar">
        <h2 className="brand">Admin</h2>
        <nav>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`nav-item ${activePage === item.id ? "active" : ""}`}
                onClick={() => onPageChange(item.id)}
              >
                {item.label}
              </li>
            ))}
            <button className="logout-btn" onClick={onLogout}>
              Log out
            </button>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default SideBar;
