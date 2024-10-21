import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";
import linkedin_light from "../../assets/linkedin-light.png";
import github_light from "../../assets/github-light.png";
import insta_light from "../../assets/instagram-icon-light.png";
import linkedin_dark from "../../assets/linkedin-dark.png";
import github_dark from "../../assets/github-dark.png";
import insta_dark from "../../assets/instagram-icon-dark.png";

function Footer({theme}) {


    return (


        <div className="footer">

            <div className="footer-first-row">
            {/* Info Section with Links */}
            <div className="info">
                <h4>Info</h4>
                <Link to="/" className="info-link">About</Link>
                <Link to="/project" className="info-link">Project</Link>
                <Link to="/contact" className="info-link">Contact</Link>
            </div>

            {/* Contact Section */}
            <div className="contact">
                <h1 className="contact-title">Want to reach out?</h1>
                <Link to={"/contact"} className="contact-button">
                    Click Me
                </Link>

                <a href="mailto:ziga@weingerl.net" className="contact-email">ziga@weingerl.net</a>
            </div>


            {/* Social Media Section with Title */}
            <div className="social-media">
                <h4>Socials</h4>
                <div className="social-media-links">
                    <Link to="https://www.linkedin.com/in/ziga-weingerl-219778334/" target="_blank" rel="noopener noreferrer">
                        <img src={theme === 'light' ? linkedin_light : linkedin_dark} alt="linkedin" className="icon"/>
                    </Link>
                    <Link to="https://github.com/zigaw" target="_blank" rel="noopener noreferrer">
                        <img src={theme === 'light' ? github_light : github_dark} alt="github" className="icon"/>
                    </Link>
                    <Link to="https://www.instagram.com/zigaweingerl/" target="_blank" rel="noopener noreferrer">
                        <img src={theme === 'light' ? insta_light : insta_dark} alt="instagram" className="icon"/>
                    </Link>
                </div>
            </div>
            </div>
            {/* Copyright Section */}
            <div className="copyright">
                <p>©{new Date().getFullYear()} Weingerl Žiga. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;
