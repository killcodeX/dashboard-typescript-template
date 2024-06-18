import React from "react";
import "./styles.css";

interface sideBar {
  sideBarOpen: boolean;
}

export default function Sidebar({ sideBarOpen }: sideBar) {
  return (
    <aside className={`side-bar ${sideBarOpen ? "side-bar-open" : null}`}>
      <div className="side-bar-logo-box">
        <div className="brand-box">Logo</div>
      </div>
      <div className="side-bar-navigation"></div>
    </aside>
  );
}
