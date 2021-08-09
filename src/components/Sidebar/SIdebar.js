import React from "react";
import peopleIcon from "./people.png";

const Sidebar = () => {
  return (
    <div id="navbar">
      <ul>
        <li>
          <div className="navbar-item">
            <img className="navbar-icon" src={peopleIcon} />
            <p>Employee list</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
