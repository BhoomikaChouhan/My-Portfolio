import React from "react";
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css';
import Sidebar from "../../img/sidebar.png"
import Hotel from "../../img/hotel.PNG"
import Codetranslator from "../../img/code trans.PNG"

export const Projects = () => {
  return (
    <div className="projects" id="Projects" style={{marginLeft: "3rem"}}>
        {/* heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={10}
        slidesPerView={2}
        grabCursor={true}
        className="projects-slider" 
        sp       
        >
            <SwiperSlide
            >
               <img src={Codetranslator} alt="" /></SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Hotel} alt="" />
            </SwiperSlide>
            
        </Swiper>

    </div>
  )
}
export default Projects;
