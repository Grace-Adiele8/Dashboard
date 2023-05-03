import React, { useState } from "react";
import "./index.scss";
import SidebarOptions from "./SidebarOptions";
import SvgDashboard from "../icon/SvgDashboard";
import SvgLightening from "../icon/SvgLightening";
import SvgSetting from "../icon/SvgSetting";
import SvgUsers from "../icon/SvgUsers";
import SvgAffilate from "../icon/SvgAffilate";
import SvgbarAddedUsers from "../icon/SvgAddedUsers";
import BaseButton from "../basebutton/BaseButton";
import SvgPlus from "../icon/SvgPlus";

function SideBar() {
  const [nav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!nav);
  };

  const handleDashboardBackground = () => {
    setNav(!nav);
  };

  return (
    <>
      <button
        onClick={handleDashboardBackground}
        className={`dashboard-background ${nav ? "blur" : ""}`}
      ></button>

      <div className={`mobile-nav ${nav ? "mobile-active" : "mobile-nav"}`}>
        <button
          onClick={handleToggle}
          className={`menu ${nav ? "handleToggle" : ""}`}
        >
          <svg
            width="40"
            height="32"
            viewBox="0 0 40 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect opacity="0.1" width="40" height="32" rx="5" fill="#0C204C" />
            <path
              className="line top"
              d="M11 22H29"
              stroke="#0C204C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="line middle"
              d="M11 16H29"
              stroke="#0C204C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="line bottom"
              d="M11 10H29"
              stroke="#0C204C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <BaseButton variant="alternate" className="mobile-nav__button">
          ADD MEMBERS
        </BaseButton>
        <div className="add-members">
          <button className="add-button">
            <SvgPlus />
          </button>
          <div className="add-tool-tip">ADD MEMBERS</div>
        </div>
      </div>
      <div className={`side-bar ${nav ? "mobile" : ""}`}>
        <div className="side-bar__content">
          <div className="side-bar__content__welcome">
            <span>
              <SvgLightening />
            </span>
            Welcome Keerthi
          </div>
          <div className="side-bar__content__menu first">
            <a href="/">
              <SidebarOptions Icon={<SvgDashboard />} text="Dashboard" />
            </a>
            <a href="/">
              <SidebarOptions Icon={<SvgSetting />} text="Settings" />
            </a>
            <a href="/">
              <SidebarOptions Icon={<SvgLightening />} text="Activities" />
            </a>
            <a href="/">
              <SidebarOptions Icon={<SvgUsers />} text="Users" />
            </a>
            <a href="/">
              <SidebarOptions Icon={<SvgbarAddedUsers />} text="Added user" />
            </a>
            <a href="/">
              <SidebarOptions Icon={<SvgAffilate />} text="Affiliate" />
            </a>
          </div>
          <div className="side-bar__content__menu second">
            <a href="/">
              <SidebarOptions Icon={<SvgLightening />} text="Profile" />
            </a>
            <a href="/">
              <SidebarOptions Icon={<SvgUsers />} text="Logout" />
            </a>
          </div>
        </div>
        <BaseButton className="base-button--primary">
          <SvgPlus />
          NEW PROJECT
        </BaseButton>
      </div>
    </>
  );
}

export default SideBar;
