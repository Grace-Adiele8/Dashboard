import React from "react";

import "./index.scss";
import ProfileStack from "../profilestack/ProfileStack";
import SvgMore from "../icon/SvgMore";
import SvgCheckList from "../icon/SvgCheckList";
import SvgChatDot from "../icon/SvgChatDot";
import SvgLink from "../icon/SvgLink";
import Slider from "../slider/Slider";

function TaskCard({ title, image, variant }) {
  return (
    <div className="task-card">
      {image ? (
        <img src={image} alt="image" className="task-card__image" />
      ) : null}

      <div className="task-card__content">
        <div className="task-card__content__holder">
          <p className="task-card__content__holder__title">{title}</p>
          <p className="task-card__content__holder__description">
            Make clear design and color
          </p>
        </div>
        <SvgMore />
      </div>
      <div className="task-card__content__progress">
        <div className="task-card__content__progress__status">
          <p className="progress">
            <span>
              <SvgCheckList />
            </span>
            Progress
          </p>
          <p className="completed-value">2/10</p>
        </div>
        <Slider {...{ variant }} />
        <div className="task-card__content__collarboration">
          <div className="task-card__content__collarboration__comments">
            <p className="chats">
              <span>
                <SvgChatDot />
              </span>
              7
            </p>
            <p className="chats">
              <span>
                <SvgLink />
              </span>
              2
            </p>
          </div>
          <ProfileStack size={24} className="task-profile" />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
