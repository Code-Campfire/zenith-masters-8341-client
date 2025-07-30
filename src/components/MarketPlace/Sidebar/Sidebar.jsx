import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <button className="browse">Browse all</button>
      <ul className="menu">
        <li>Notifications</li>
        <li>Inbox</li>
        <li>Marketplace Access</li>
        <li>Buying</li>
        <li>Selling</li>
      </ul>
      <button className="new-listing">+ Create new listing</button>
    </aside>
  );
}

export default Sidebar;
