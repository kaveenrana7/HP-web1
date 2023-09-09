import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Card2 from "./Card-2";
import DashNavbar from "./DashNavbar";

const ServiceProvider = () => {
  return (
    <div className="dashboard">
      <div className="slideBar">
        <img src="logo.png" alt="logo" className="dashboard--logo" />
        <ul className="ulContent">
          <Link to="/dashboard">
            <li>
              <div className="active--link">
                <div className="yellow--mark"></div>
                <ld>
                  <ld>
                    <img src="dashboard--icon1.png" alt="icon" />
                  </ld>
                </ld>
                <ld className="active1">Dashboard</ld>
              </div>
            </li>
          </Link>
          <li>
            <ld>
              <ld>
                <img src="dashboard--icon2.png" alt="icon" />
              </ld>
            </ld>
            <ld>Finance</ld>
          </li>
          <li>
            <ld>
              <ld>
                <img src="dashboard--icon3.png" alt="icon" />
              </ld>
            </ld>
            <ld>Chat</ld>
          </li>
          <li>
            <ld>
              <ld>
                <img src="dashboard--icon4.png" alt="icon" />
              </ld>
            </ld>
            <ld>Calender</ld>
          </li>
        </ul>
      </div>
      <div className="dashboard-navbar">
        <DashNavbar
          firstName="Kaveen"
          avatar="Avatar.png"
          name="Kaveen Kalhara"
          role="Manager"
        />
      </div>
      <div className="cards-2">
        <Link to="/serviceprovider">
          <Card2 heading="Service Provider" active="card-2-active" />
        </Link>
        <Card2 heading="Customer" active="card-2" />
        <Card2 heading="Category" active="card-2" />
      </div>

      <div className="stat"></div>
    </div>
  );
};

export default ServiceProvider;
