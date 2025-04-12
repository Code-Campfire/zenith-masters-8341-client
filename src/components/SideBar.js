/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import '../styles/SideBar.css'
import { Link, NavLink as SideBarLink, useLocation } from 'react-router-dom'
import { FaCog, FaBookmark, FaSignOutAlt } from 'react-icons/fa'

export default function SideBar() {
    const resetSideBar = 768
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= resetSideBar);

    const toggleSideBar = () => {
        setIsCollapsed(!isCollapsed)
    }

    const { pathname } = useLocation()

    function activeLink(path) {
        return pathname === path
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= resetSideBar) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
        <div className={`sideBar ${isCollapsed ? "collapsed" : ""}`}>
            <button className={`sideBarToggle ${isMobile ? "isMobile" : ""}`} onClick={toggleSideBar}>☰</button>
            <ul className="d-flex flex-column">
                <li className={activeLink("/posts/saved") ? "active" : ""}>
                    <Link to="posts/saved" className="sideBar-link"><FaBookmark /> Saved Posts</Link>
                </li>
                <li className={activeLink("/settings") ? "active" : ""}>
                    <Link to="settings" className="sideBar-link"><FaCog /> Settings</Link>
                </li>
                <li className={activeLink("/logout") ? "active" : ""}>
                    <Link to="logout"  className="sideBar-link"><FaSignOutAlt /> Logout</Link>
                </li>
            </ul>
        </div>
    )
}
