/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import '../styles/SideBar.css'
import { NavLink as SideBarLink } from 'react-router-dom'
import { FaCog, FaBookmark, FaSignOutAlt } from 'react-icons/fa'


export const SideBar = () => {
    const resetSideBar = 894
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= resetSideBar);
    const [isLinkActive, setIsLinkActive] = useState({
        savedPosts: false,
        settings: false,
        logout: false
    })

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


    const handleLinkActivation = (e) => {
        const linkName = e.target.name
        Object.keys(isLinkActive).forEach(item => {
            setIsLinkActive(prev => item !== linkName ? ({...prev, [item]: false}) : ({...prev, [item]: true}))
        })
    }

    return (
        <div className={`sideBar ${isCollapsed ? "collapsed" : ""}`}>
            <button className="sideBarToggle" onClick={toggleSideBar}>|</button>
            <ul style={{marginLeft: "3.0rem", marginRight: "0.4rem", padding: "0", listStyleType: "none"}} className="d-flex flex-column">
                {/*Temporary links until Routes are in place. The commented out SideBarLinks below  */}
                <li>
                    <a 
                        onClick={handleLinkActivation} 
                        className={isLinkActive.savedPosts ? "sideBar-link active" : "sideBar-link"}
                        style={{whiteSpace: "nowrap", visibility: isCollapsed ? "hidden" : "visible"}}
                        name="savedPosts" 
                    >
                        <FaBookmark /> Saved Posts
                    </a>
                </li>

                <li>
                    <a 
                        onClick={handleLinkActivation}
                        className={isLinkActive.settings ? "sideBar-link active" : "sideBar-link"}
                        style={{visibility: isCollapsed ? "hidden" : "visible"}}
                        name="settings"
                    >
                        <FaCog /> Settings
                    </a>
                </li>


                <li>
                    <a 
                        onClick={handleLinkActivation} 
                        className={`${isLinkActive.logout ? "sideBar-link active" : "sideBar-link"}`}
                        style={{visibility: isCollapsed ? "hidden" : "visible"}}
                        name="logout"
                    >
                        <FaSignOutAlt /> Logout
                    </a>
                </li>

                {/* <li>
                    <SideBarLink className={({ isActive }) => isActive ? "sideBar-link active" : "sideBar-link"}><FaBookmark /> Saved Posts</SideBarLink>
                </li>
                <li>
                    <SideBarLink className={({ isActive }) => isActive ? "sideBar-link active" : "sideBar-link"}><FaCog /> Settings</SideBarLink>
                </li>
                <li>
                    <SideBarLink className={({ isActive }) => isActive ? "sideBar-link active" : "sideBar-link"}><FaSignOutAlt /> Logout</SideBarLink>
                </li> */}
            </ul>
        </div>
    )
}