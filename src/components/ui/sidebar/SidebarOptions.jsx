import React from "react";

function SidebarOptions({ Icon, text }) {
  return (
    <div className="sidebar-options">
      {Icon}
      <p>{text}</p>
    </div>
  );
}

export default SidebarOptions;
