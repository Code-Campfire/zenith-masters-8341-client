import React from "react";

export default function NavigationBar() {
  
  return (
    <>
    <div id="navBar">
        {/* Left section of the NavBar for (375/430) and (540/768) screen sizes */}
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
                <input type="text" placeholder="Search Facebook" className="searchbar-xl" />
            </div>
        </div>
        {/* Mid section of the NavBar for min-width: 375-430px */}
        <div className="navButtons-mid">
          <a className="links-mid" href="/">
            <picture>
              <source 
                media="(min-width: 375px)"
                srcSet="/home-icon.svg"
              />
              <img src="/home-icon.svg" alt="Home Icon" style={{ width: '25px' }} />
            </picture>
          </a>
          <a class="links-mid" href="/Video">
            <picture>
              <source 
                media="(min-width: 375px)" 
                srcSet="/video-icon.png"
              />
              <img src="/video-icon.png" alt="Video Icon"  style={{ width: '25px' }} />
            </picture>
          </a>
          <a class="links-mid" href="/Marketplace">
            <picture>
              <source 
                media="(min-width: 375px)" 
                srcSet="/marketplace-icon.png"
              />
              <img src="/marketplace-icon.png" alt="Marketplace Icon"  style={{ width: '25px' }} />
            </picture>
          </a>
          <a class="links-mid" href="/Groups"> 
            <picture>
              <source 
                media="(min-width: 375px)" 
                srcSet="/group.png"
              />
              <img src="/group.png" alt="Marketplace Icon"  style={{ width: '25px' }} />
            </picture>
          </a>
          <a class="links-mid" href="/Gaming">
            <picture>
              <source 
                media="(min-width: 375px)" 
                srcSet="/game-controller.png"
              />
              <img src="/game-controller.png" alt="Marketplace Icon"  style={{ width: '25px' }} />
            </picture>
          </a>
        </div>
        {/* Right section of the NavBar for all screen sizes (375/430, 540/768, 820/2560) */}
        <div className="navButtons-right">
          <div className="settings-links">
            <div className="bg-sm">
              <a class="links-right" href="/Search">
                <img src="/eye-glass.svg" style={{ 
                        width: '25px',
                        height: '25px',
                      }} alt="Search Icon" />
              </a>
            </div>
            <div className="bg-sm">
              <a class="links-right" href="/Menu">
                <img src="/hamburger-menu.svg" style={{ 
                  width: '15px',
                  height: '15',
                }} alt="Menu Icon" />
              </a>
            </div>
            <div className="bg-lg">
              <a class="lg-screen" href="/Menu">
                <img src="/bento-icon.svg" style={{ 
                        width: '17px',
                        height: '17px',
                      }} alt="Search Icon" />
              </a>
            </div>
            <div className="bg-xlg">
              <a class="xlg-screen" href="/Menu">
                <img src="/bento-icon.svg" style={{ 
                        width: '20px',
                        height: '20px',
                      }} alt="bento Icon" />
              </a>
            </div>
            <div className="bg-lg">
              <a class="lg-screen" href="/messenger">
                <img src="/messenger-icon.svg" style={{ 
                        width: '17px',
                        height: '17px',
                      }} alt="messenger Icon" />
              </a>
            </div>
            <div className="bg-xlg">
              <a class="xlg-screen" href="/messenger">
                <img src="/messenger-icon.svg" style={{ 
                        width: '20px',
                        height: '20px',
                      }} alt="messenger Icon" />
              </a>
            </div>
            <div className="bg-lg">
              <a class="lg-screen" href="/notifications">
                <img src="/bell.svg" style={{ 
                        width: '17px',
                        height: 'px',
                      }} alt="notifications Icon" />
              </a>
            </div>
            <div className="bg-xlg">
              <a class="xlg-screen" href="/notifications">
                <img src="/bell.svg" style={{ 
                        width: '20px',
                        height: '20px',
                      }} alt="notifications Icon" />
              </a>
            </div>
            <div className="bg-lg">
              <a class="lg-screen" href="/account">
                <img src="/account-icon.png" style={{ 
                        width: '30px',
                        height: '30px',
                      }} alt="Acct Icon" />
              </a>
            </div>
            <div className="bg-xlg">
              <a class="xlg-screen" href="/account">
                <img src="/account-icon.png" style={{ 
                        width: '30px',
                        height: '30px',
                      }} alt="Acct Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
