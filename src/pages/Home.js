import React from "react";
import ButtonsBottom from "../components/ButtonsBottom";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";

const Home = () => {
  return (
    <div>
      <Mouse />
      <div className="home">
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <h1>Développeur Web</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
        <ButtonsBottom right="/project-1" />
      </div>
    </div>
  );
};

export default Home;
