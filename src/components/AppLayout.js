import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import NavigationBar from "./NavigationBar";

export default function AppLayout() {

  return (
    <>
        <NavigationBar />
        <SideBar />
        <Outlet />
    </>
  );
};
