function Header({onToggleSideBar}) {

    return (
        <div className="header-container">
            <button onClick={onToggleSideBar} className="sidebar-btn">☰</button>
        </div>
    );
}

export default Header;