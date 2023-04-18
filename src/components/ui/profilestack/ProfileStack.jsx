import React from "react";
import avatar from "../../../assets/images/avatar.png";
import "./index.scss";

function ProfileStack({ size, className = "" }) {
  return (
    <div className={`profile-stack ${className}`}>
      <img
        src={avatar}
        alt="avatar"
        {...{ height: size, width: size }}
        className="profile-stack__avatar"
      />
      <img
        src={avatar}
        alt="avatar"
        {...{ height: size, width: size }}
        className="profile-stack__avatar"
      />
      <img
        src={avatar}
        alt="avatar"
        {...{ height: size, width: size }}
        className="profile-stack__avatar"
      />
    </div>
  );
}

export default ProfileStack;
