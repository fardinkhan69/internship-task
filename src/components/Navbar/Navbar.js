import React from "react";
import HomeIcon from "../../images/home_black_24dp.svg";
import PeopleIcon from "../../images/people_black_24dp.svg";
import CardIcon from "../../images/credit_card_black_24dp.svg";
import StarIcon from "../../images/star_black_24dp.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <div className="nav-item">
            <div className="nav-icon">
              <img src={HomeIcon} alt="" />
            </div>
            <div className="nav-text">Add KeyWords</div>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <div className="nav-icon">
              <img src={PeopleIcon} alt="" />
            </div>
            <div className="nav-text">Matches</div>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <div className="nav-icon">
              <img src={CardIcon} alt="" />
            </div>
            <div className="nav-text">Manage Sources</div>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <div className="nav-icon">
              <img src={CardIcon} alt="" />
            </div>
            <div className="nav-text">Intigration</div>
          </div>
        </li>
        <li>
          <div className="nav-item">
            <div className="nav-icon">
              <img src={CardIcon} alt="" />
            </div>
            <div className="nav-text">Alerts</div>
          </div>
        </li>
      </ul>

      <ul>
        <div className="nav-item">
          <div className="nav-icon">
            <img src={StarIcon} alt="" />
          </div>
          <div className="nav-text">Settings</div>
        </div>
        <li className="dropdown">
            <a href="#">Billings</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
