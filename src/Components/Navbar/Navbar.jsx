import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Bhoomika</div>
            {/* <span>toogle</span> */}
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={ {listStyleType: 'none', color: "#242849"} } >
                  <a style={{textDecoration: "none", color: "#242849"}} href='#intro'>  <li>Home </li></a>
                  <a  style={{textDecoration: "none", color: "#242849"}} href='#Services'>  <li>Skills</li> </a>
                  <a  style={{textDecoration: "none", color: "#242849"}} href='#Projects'>  <li>Portfolio</li></a>
                  <a  style={{textDecoration: "none", color: "#242849"}} href='#testimonial'>  <li>Testimonials</li></a>
                </ul>
            </div>
            <button className="button n-button">
              <a  style={{textDecoration: "none", color: "white"}} id='aa' href='#contact'>  Contact us</a>
            </button>
        </div>
    </div>
    
  )
}
export default Navbar;

