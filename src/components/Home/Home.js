import React from "react";
import "./index.css";
import "./home-image.png";

const Home = () => {
  return (
    <div className="label">
      <div className="page-image">
        <img src="home-image.png" alt="Page Image" />
      </div>
      <div className="text-wrapper">YOUR LINK TO</div>
      <div className="text-wrapper2">EXPERT SOLUTION</div>
      <div className="text-wrapper3">HIREPRO</div>
      <div className="label2">
        <div className="text-wrapper4">Experience the Difference with</div>
        <div className="text-wrapper4">HirePro's Trusted Experts</div>
      </div>
      <div className="download">
        <div className="text-wrapper5">Download App</div>
      </div>
    </div>
  );
};

export default Home;
