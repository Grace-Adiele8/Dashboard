import React from "react";
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
  return (
    <div className="side-bar">
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
  );
}

export default SideBar;
