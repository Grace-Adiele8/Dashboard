import React, { useState } from "react";
import BaseButton from "../../../ui/basebutton/BaseButton";
import ProfileStack from "../../../ui/profilestack/ProfileStack";
import SvgUsers from "../../../ui/icon/SvgUsers";
import SvgBoard from "../../../ui/icon/SvgBoard";
import SvgLightening from "../../../ui/icon/SvgLightening";
import SvgList from "../../../ui/icon/SvgList";
import SvgPlus from "../../../ui/icon/SvgPlus";
import "./index.scss";
import TaskHeader from "../../../ui/taskcard/TaskHeader";
import TaskCard from "../../../ui/taskcard/TaskCard";
import dribble from "../../../../assets/images/dribble.png";
import camplog from "../../../../assets/images/camplog.png";
import anais from "../../../../assets/images/Anais.png";
import SvgDropDown from "../../../ui/icon/SvgDropDown";

function DashBoardContent() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <div className="dash-board">
      <div className="dash-board__content">
        <div className="dash-board__content__campaign">
          <div className="dash-board__content__campaign__info">
            <h1 className=" dash-board__content__campaign__info__title">
              New Campaign Run{" "}
            </h1>
            <p className="dash-board__content__campaign__info__description">
              A new campaign launch work for brand new featur in May month
            </p>
          </div>
          <BaseButton className="base-button--alternate dashboard-button">
            ADD MEMBERS
          </BaseButton>
        </div>
        <div className="dash-board__content__profile">
          <div className="dash-board__content__profile__members">
            <ProfileStack size={32} className="profile-image" />
            <p className="members">8 member</p>
          </div>
          <div className="dash-board__content__profile__option">
            <button
              onClick={handleClick}
              className={`${menu ? handleClick : ""}`}
            >
              Menu
              <span>
                <SvgDropDown />
              </span>
            </button>
            <div className={`options-menu ${menu ? "active" : ""}`}>
              <a href="/" className="menu-links">
                <span>
                  <SvgUsers />
                </span>
                Participants View
              </a>

              <a href="/" className="menu-links">
                <span>
                  <SvgBoard />
                </span>
                Board View
              </a>
              <a href="/" className="menu-links">
                <span>
                  <SvgList />
                </span>
                List View
              </a>
              <a href="/" className="menu-links">
                <span>
                  <SvgLightening />
                </span>
                Power View
              </a>
              <SvgPlus className="menu-links" />
            </div>
          </div>
          <div className="dash-board__content__profile__menu">
            <a href="/" className="menu-links">
              <span>
                <SvgUsers />
              </span>
              Participants View
            </a>

            <a href="/" className="menu-links">
              <span>
                <SvgBoard />
              </span>
              Board View
            </a>
            <a href="/" className="menu-links">
              <span>
                <SvgList />
              </span>
              List View
            </a>
            <a href="/" className="menu-links">
              <span>
                <SvgLightening />
              </span>
              Power View
            </a>
            <SvgPlus className="menu-links" />
          </div>
        </div>
      </div>

      <div className="dash-board__content__task">
        <div className="dash-board__content__task__progress">
          <TaskHeader title="To Do" number="3" />
          <TaskCard
            image={dribble}
            title="Highfidelity Design"
            variant="to-Do"
          />
          <TaskCard title="Usability testing" variant="to-Do" />
          <BaseButton className="base-button--secondary">
            <SvgPlus />
            Add Task
          </BaseButton>
        </div>
        <div className="dash-board__content__task__progress">
          <TaskHeader title="Inprogress" number="1" />
          <TaskCard
            image={anais}
            title="Highfidelity Design"
            variant="inprogress"
          />
          <BaseButton className="base-button--secondary">
            <SvgPlus />
            Add Task
          </BaseButton>
        </div>
        <div className="dash-board__content__task__progress">
          <TaskHeader title="Completed" number="2" />
          <TaskCard title="Usability testing" variant="completed" />
          <TaskCard
            image={camplog}
            title="Highfidelity Design"
            variant="completed"
          />

          <BaseButton className="base-button--secondary">
            <SvgPlus />
            Add Task
          </BaseButton>
        </div>
      </div>
    </div>
  );
}

export default DashBoardContent;
