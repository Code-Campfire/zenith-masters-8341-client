/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import '../styles/SideBar.css'
import { Link, NavLink as SideBarLink, useLocation } from 'react-router-dom'
import { FaCog, FaBookmark, FaSignOutAlt } from 'react-icons/fa'

export default function SideBar() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const toggleSideBar = () => {
        setIsCollapsed(!isCollapsed)
    }

    const location = useLocation()

    function activeLink(path) {
        return location.pathname === path
    }

    return (
        <div className={`sideBar ${isCollapsed ? "collapsed" : ""}`}>
            <button className="sideBarToggle" onClick={toggleSideBar}>☰</button>
            <ul style={{marginLeft: "2.0rem", marginRight: "0.4rem", padding: "0", listStyleType: "none"}} className="d-flex flex-column">
                <li>
                    {/* <SideBarLink to="savedPosts" className={({ isActive }) => isActive ? "sideBar-link active" : "sideBar-link"}><FaBookmark /> Saved Posts</SideBarLink> */}
                    <Link to="savedPosts" className={ activeLink("/savedPosts") ? "sideBar-link active" : "sideBar-link"}><FaBookmark /> Saved Posts</Link>
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
