import React from "react";

function TaskHeader({ title, number }) {
  return (
    <div className="task-header">
      <div className="task-header__content">
        <p className="task-header__content__title">{title}</p>
        <div className="task-header__content__number">
          <p className="number-text">{number}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskHeader;
