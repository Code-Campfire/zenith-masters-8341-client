import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Marketplace</div>
      <input className="search-bar" placeholder="Search Marketplace" />
      <div className="nav-icons">
        <span role="img" aria-label="user">
          👤
        </span>
        <span role="img" aria-label="chat">
          💬
        </span>
        <span role="img" aria-label="bell">
          🔔
        </span>
      </div>
    </header>
  );
}

export default Header;
