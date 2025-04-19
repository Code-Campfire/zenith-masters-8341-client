import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import '../styles/index.css'
import SearchBar from "./SearchBar";

export default function NavigationBar() {
  const [userInput, setUserInput] = useState('');
  
  const { pathname } =  useLocation()

  function isActiveLink(path) {
    return pathname === path
  }

  
  return (
    <>
    <div id="navBar">
        {/* Left section of the NavBar for all screen sizes */}
        <div className="logo">
          <picture>
            <source  
              srcSet="/facebook.svg"
              media="(min-width: 374px) and (max-width: 430px)"
              style={{ width: '100px' }} 
            />
            <source  
              srcSet="/fb-logo-48.svg"
              media="(min-width: 540px)"
              style={{ width: '50px' }} 
            />
            <img src="/facebook.svg" alt="Facebook Logo"/>
          </picture>
          <div className="bg-lg">
            <div className="searchbar-lg">
              <picture>
                <source
                  media="(min-width: 540px)"
                  srcSet="/eye-glass.svg"
                />
                <img src="/eye-glass.svg" alt="Search Icon" style={{ width: '25px' }} />
              </picture>
            </div>
          </div>
          <div className="search-bar">
            <SearchBar searchInput={userInput} />
            </div>
        </div>
        {/* Mid section of the NavBar for min-width: 375-430px */}
        <div className="navButtons-mid">
          <Link className={`links-mid ${isActiveLink("/") ? "active" : ""}`} to="/">
            <picture>
              <source 
                media="(min-width: 375px)"
                srcSet="/home-icon.svg"
              />
              <img src="/home-icon.svg" alt="Home Icon" style={{ width: '25px' }} />
            </picture>
          </Link>
          <Link className={`links-mid ${isActiveLink("/video") ? "active" : " "}`} to="/video">
            <picture>
              <source 
                media="(min-width: 375px)" 
                srcSet="/video-icon.png"
              />
              <img src="/video-icon.png" alt="Video Icon"  style={{ width: '25px' }} />
            </picture>
          </Link>
          <Link className={`links-mid ${isActiveLink("/marketplace") ? "active" : ""}`} to="/marketplace">
            <picture>
              <source 
                media="(min-width: 375px)" 
                srcSet="/marketplace-icon.png"
              />
              <img src="/marketplace-icon.png" alt="Marketplace Icon"  style={{ width: '25px' }} />
            </picture>
          </Link>
          <Link className={`links-mid ${isActiveLink("/groups") ? "active" : ""}`} to="/groups"> 
            <picture>
              <source 
                media="(min-width: 375px)" 
                srcSet="/group.png"
              />
              <img src="/group.png" alt="Marketplace Icon"  style={{ width: '25px' }} />
            </picture>
          </Link>
          <Link className={`links-mid ${isActiveLink("/gaming") ? "active" : ""}`} to="/gaming">
            <picture>
              <source 
                media="(min-width: 375px)" 
                srcSet="/game-controller.png"
              />
              <img src="/game-controller.png" alt="Marketplace Icon"  style={{ width: '25px' }} />
            </picture>
          </Link>
        </div>
        {/* Right section of the NavBar for all screen sizes (375/430, 540/768, 820/2560) */}
        <div className="navButtons-right">
          <div className="settings-links">
            <div className="bg-sm">
              <Link className="links-right" to="/search">
                <img src="/eye-glass.svg" style={{ 
                        width: '25px',
                        height: '25px',
                      }} alt="Search Icon" />
              </Link>
            </div>
            <div className="bg-sm">
              <Link className="links-right" to="/menu">
                <img src="/hamburger-menu.svg" style={{ 
                  width: '15px',
                  height: '15',
                }} alt="Menu Icon" />
              </Link>
            </div>
            <div className="bg-lg">
              <Link className="lg-screen" to="/menu">
                <img src="/bento-icon.svg" style={{ 
                        width: '17px',
                        height: '17px',
                      }} alt="Search Icon" />
              </Link>
            </div>
            <div className="bg-xlg">
              <Link className="xlg-screen" to="/menu">
                <img src="/bento-icon.svg" style={{ 
                        width: '20px',
                        height: '20px',
                      }} alt="bento Icon" />
              </Link>
            </div>
            <div className="bg-lg">
              <Link className="lg-screen" to="/messenger">
                <img src="/messenger-icon.svg" style={{ 
                        width: '17px',
                        height: '17px',
                      }} alt="messenger Icon" />
              </Link>
            </div>
            <div className="bg-xlg">
              <Link className="xlg-screen" to="/messenger">
                <img src="/messenger-icon.svg" style={{ 
                        width: '20px',
                        height: '20px',
                      }} alt="messenger Icon" />
              </Link>
            </div>
            <div className="bg-lg">
              <Link className="lg-screen" to="/notifications">
                <img src="/bell.svg" style={{ 
                        width: '17px',
                        height: 'px',
                      }} alt="notifications Icon" />
              </Link>
            </div>
            <div className="bg-xlg">
              <Link className="xlg-screen" to="/notifications">
                <img src="/bell.svg" style={{ 
                        width: '20px',
                        height: '20px',
                      }} alt="notifications Icon" />
              </Link>
            </div>
            <div className="bg-lg">
              <Link className="lg-screen" to="/account">
                <img src="/account-icon.png" style={{ 
                        width: '30px',
                        height: '30px',
                      }} alt="Acct Icon" />
              </Link>
            </div>
            <div className="bg-xlg">
              <Link className="xlg-screen" to="/account">
                <img src="/account-icon.png" style={{ 
                        width: '30px',
                        height: '30px',
                      }} alt="Acct Icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
