import { useState } from 'react'
import '../styles/SideBar.css'
import { Button, ButtonToggle, Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { Link, NavLink as RRNavLink } from 'react-router-dom'



export const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const toggleSideBar = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div className={`col-2 sideBar ${isCollapsed ? "collapsed" : ""}`}>
            <button className="sideBarToggle" onClick={toggleSideBar}>|</button>
            <Nav className="d-flex flex-column">
                <li>
                    <Link>Saved Posts</Link>
                </li>
                <li>Settings</li>
                <li>Logout</li>
            </Nav>
        </div>
    )
}