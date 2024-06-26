import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer'id='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nisi.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 735101</li>
                    <li>contact@tomato.com</li>
                    <a href='https://tomato-admin-theta.vercel.app' target='_blank'>Admin</a>
                </ul>
            </div>
           </div>
           <hr />
            <p className="footer-copyright">Copyright 2024 @ sohambose80@gmail.com - All Rights Reserved</p>

    </div>
  )
}

export default Footer