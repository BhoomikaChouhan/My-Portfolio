import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png"
import Card from '../Card/Card';

import Resume from './Resume.pdf'
const Services = () => {
  return (
    <div className="services" id='Services'>

        {/* left side */}
        <div className="awesome">
         <span>My Technical</span>
         <span>Skills</span>
         <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus optio facere quam laborum, 
            <br />
            ipsum quos reprehenderit harum qui cupiditate repellat nemo fuga porro </span> <a href={Resume} download={Resume}>
            <button className='button s-button' >
             Download CV </button></a>  
             <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="cards">
        <div style={{left: '14rem'}} >
          <Card
          emoji={HeartEmoji}
          heading = {'Web Development'}
          detail = {"Html, CSS, JS, Bootstrap, React.js, MySql"}
          />
        </div>
        {/* 2nd card */}
        <div style={{top:"12rem",left:"-4rem"}} >
         <Card
          emoji={Glasses}
          heading={"Java Development"}
          detail={"Java, JSP Pages,Java Servlets"}
         />
        </div>

         {/* 3rd card */}
         <div style={{top:"19rem",left:"12rem"}} >
         <Card
          emoji={Humble}
          heading={"Programming languages"}
          detail={"Java, C++, C, PHP"}
         />
        </div>
        <div className="blur s-blur2" style={{ background: "var(--purple)"}} ></div>

        </div>

    </div>
  )
}

export default Services