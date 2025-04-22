import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import NavigationBar from "./NavigationBar";
import '../styles/AppLayout.css'

export default function AppLayout() {

  return (
    <div className="layout-wrapper">
          <NavigationBar />
          <div className="under-navbar">
            <SideBar />
            <div className="main-content">
              <Outlet />
            </div>
          </div>
    </div>
  );
};
