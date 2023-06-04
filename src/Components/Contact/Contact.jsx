import React from 'react'
import "./Contact.css";



const Contact = () => {
  return (
    <div className="contact-form" id='contact'>
        <div className="c-left">
            <div className="awesome">
                <span>Get in Touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>
        {/* right side */}
        <div className="c-right">
            <form action="">
                <input type="text" name='user_name' className='user' placeholder='Name'/>

                <input type="email" name='user_email' className='user' placeholder='Email'/>

                <textarea name="message" className='user' placeholder='Message'/>

                <input type="submit" value="Send" className='button' />

                <div className="blur c-blur1" style={{background:"var(--purple)"}}></div>
                
            </form>
        </div>
    </div>
  )
}

export default Contact