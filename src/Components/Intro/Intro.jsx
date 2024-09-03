import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesemoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
// import Pic from "../../img/pic.png"

export const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I am</span>
          <span>Bhoomika Chouhan</span>
          <span>
            Frontend Developer with high level of efficient skills in web
            designing and development, producing the Quality work
          </span>
        </div>

        <button className="button i-button">Hire me</button>

        <div className="i-icons">
        <a href="https://github.com/BhoomikaChouhan">  <img src={Github} alt="" /> </a>
        <a href="https://github.com/BhoomikaChouhan">  <img src={Linkedin} alt="" /></a>
        <a href="">  <img src={Instagram} alt="" /></a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={glassesemoji} alt="" />
        {/* <img src={Pic} alt="" /> */}
        <div hidden style={{top: '-8%',left: '55%' }}>
          <FloatingDiv  image={Crown} txt1='Web' txt2='Developer' />
        </div>
        <div  style={{top: '-8%',left: '55%' }}>
          <FloatingDiv className="floating-div" image={Crown} txt1='Web' txt2='Developer' />
        </div>

        <div  style={{top: '18rem',left: '0rem' }}>
          <FloatingDiv className="floating-div" image={thumbup} txt1='Java' txt2='Programmer' />
        </div>
        
      </div>
{/* blur divs */}
{/* <div className="blur" style={{background:"rgb(238 210 255)"}} ></div>
<div className="blur"
style={{
  background: '#C1F5FF',
  top:'27rem',
  width:'21rem',
  height:'11rem',
  left:'21rem'
}} ></div> */}
    </div>
  );
};
export default Intro;
