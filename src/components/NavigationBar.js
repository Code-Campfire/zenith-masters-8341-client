import React from "react";


export default function NavigationBar() {

  return (
    <>
    <div id="navBar">
      <div className="logo">
          <picture>
            <source 
              media="(min-width: 375px)" 
              srcSet="/fb-logo-96.svg"
              width={55}
            />
            <img src="/fb-logo-96.svg" alt="Facebook Logo" />
          </picture>
      </div>
      <div className="navButtons-mid">
        <a className="links-mid" href="/">
          <picture>
            <source 
              media="(min-width: 375px)" 
              srcSet="/home-icon.svg"
              width={25}
            />
            <img src="/home-icon.svg" alt="Home Icon" />
          </picture>
        </a>
        <a class="links-mid" href="/Video">
          <picture>
            <source 
              media="(min-width: 375px)" 
              srcSet="/video-icon.png"
              width={25}
            />
            <img src="/video-icon.png" alt="Video Icon" />
          </picture>
        </a>
        <a class="links-mid" href="/Marketplace">
          <picture>
            <source 
              media="(min-width: 375px)" 
              srcSet="/marketplace-icon.png"
              width={25}
            />
            <img src="/marketplace-icon.png" alt="Marketplace Icon" />
          </picture>
        </a>
        <a class="links-mid" href="/Groups"> 
          <picture>
            <source 
              media="(min-width: 375px)" 
              srcSet="/group.png"
              width={25}
            />
            <img src="/group.png" alt="Marketplace Icon" />
          </picture>
        </a>
        <a class="links-mid" href="/Gaming">
          <picture>
            <source 
              media="(min-width: 375px)" 
              srcSet="/game-controller.png"
              width={25}
            />
            <img src="/game-controller.png" alt="Marketplace Icon" />
          </picture>
        </a>
      </div>
      <div className="navButtons-right">
        <div className="settings-links">
          <div className="bg">
            <a class="links-right" href="/Menu">
              <img src="/bento-icon.svg" style={{ 
                width: '20px',
                height: '20px',
              }} alt="Menu Icon" />
            </a>
          </div>
          <div className="bg">
            <a class="links-right" href="/Messenger">
              <img src="/messenger-icon.svg" style={{ 
                  width: '20px',
                  height: '20px',
                }} alt="Messenger Icon" />
            </a>
          </div>
          <div className="bg">
            <a class="links-right" href="/Notifications">
              <img src="/bell.svg" style={{ 
                  width: '20px',
                  height: '20px',
                }} alt="Bell Icon" />
            </a>
          </div>
          <div className="bg">
            <a class="links-right" href="/Account">
              <img src="/account-icon.png" style={{ 
                  width: '25px',
                  height: '25px',
                }} alt="Account Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
