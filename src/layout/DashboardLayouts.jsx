import SideBar from "../components/sideBar/SideBar";
import { useState } from "react";
import Header from "../components/header/Header";
import MainContent from "../components/mainContent/mainContent";
import { useNavigate } from "react-router-dom";

function DashboardLayouts({ setIsLoggedIn }) {
  const [showSideBar, setShowSideBar] = useState(true);
  const [activePage, setActivePage] = useState("Home");

  const navigate = useNavigate();

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="layout">
      <div className={`sidebar-wrapper ${showSideBar ? "" : "closed"}`}>
        {showSideBar && (
          <SideBar
            activePage={activePage}
            onPageChange={setActivePage}
            onLogout={handleLogout}
          />
        )}
      </div>
      <div className={`main-area ${showSideBar ? "" : "sidebar-closed"}`}>
        <Header onToggleSideBar={toggleSideBar} />
        <MainContent activePage={activePage} />
      </div>
    </div>
  );
}

export default DashboardLayouts;
