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
    </div>
    </>
  )
}
