import React from "react";
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css';
import Sidebar from "../../img/sidebar.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"

export const Projects = () => {
  return (
    <div className="projects">
        {/* heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="projects-slider"
        
        >
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
        </Swiper>

    </div>
  )
}
export default Projects;
