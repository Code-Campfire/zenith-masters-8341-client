/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import '../styles/SideBar.css'
import { NavLink as SideBarLink } from 'react-router-dom'
import { FaCog, FaBookmark, FaSignOutAlt } from 'react-icons/fa'

export default function SideBar() {
    const resetSideBar = 894
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= resetSideBar);

    const toggleSideBar = () => {
        setIsCollapsed(!isCollapsed)
    }

    useEffect(() => {
        const handleResize = () => {
            const isNowMobile = window.innerWidth <= resetSideBar
            setIsMobile(isNowMobile)
            if (!isNowMobile) {
                setIsCollapsed(false)
            }
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
        <div className={`sideBar ${isCollapsed ? "collapsed" : ""}`}>
            <button className="sideBarToggle" onClick={toggleSideBar}>☰</button>
            <ul style={{marginLeft: "2.0rem", marginRight: "0.4rem", padding: "0", listStyleType: "none"}} className="d-flex flex-column">
                <li>
                    <SideBarLink to="savedPosts" className={({ isActive }) => isActive ? "sideBar-link active" : "sideBar-link"}><FaBookmark /> Saved Posts</SideBarLink>
                </li>
                <li>
                    <SideBarLink to="settings" className={({ isActive }) => isActive ? "sideBar-link active" : "sideBar-link"}><FaCog /> Settings</SideBarLink>
                </li>
                <li>
                    <SideBarLink to="logout" className={({ isActive }) => isActive ? "sideBar-link active" : "sideBar-link"}><FaSignOutAlt /> Logout</SideBarLink>
                </li>
            </ul>
        </div>
    )
}
