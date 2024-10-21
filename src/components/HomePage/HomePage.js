import React, {useState, useRef} from "react";
import {Link} from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Contacts from "../Contact/Contacts";
import linkedin_light from "../../assets/linkedin-light.png";
import github_light from "../../assets/github-light.png";
import insta_light from "../../assets/instagram-icon-light.png";
import linkedin_dark from "../../assets/linkedin-dark.png";
import github_dark from "../../assets/github-dark.png";
import insta_dark from "../../assets/instagram-icon-dark.png";
import profile_pic from "../../assets/profile-pic.png"
import arrow_light from "../../assets/arrow-down-light.png";
import arrow_dark from "../../assets/arrow-down-dark.png";
import my_cv from "../../assets/ziga-weingerl-cv.pdf";

function HomePage({theme}) {
    const [showImage, setShowImage] = useState(true);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const contactsRef = useRef(null);
    return (
        <>
        <section id={"profile"}>
            <div className={"section__pic-container"}>
                <img className={"profile-pic"} src={profile_pic} alt={"Žiga Weingerl profile picture"}/>
            </div>
            <div className={"section__text"}>
                <p className={"section__text__p1"}>Hi, I'm...</p>
                <h1 className={"title"}>Žiga Weingerl</h1>
                <p className={"section__text__p2"}>Full Stack Developer</p>
                <div className={"btn-container"}>
                    <a href={my_cv} target="_blank" rel="noopener noreferrer">
                        <button className={"btn btn-color-2"}>Download CV</button>
                    </a>
                    <Link to={"/contact"}>
                        <button className={"btn btn-color-1"}>Contact me</button>
                    </Link>
                </div>
                <div id={"socials-container"}>
                    <Link to="https://www.linkedin.com/in/ziga-weingerl-219778334/" target="_blank" rel="noopener noreferrer">
                        <img src={theme === 'light' ? linkedin_light : linkedin_dark} alt="linkedin"
                             className="icon"/>
                    </Link>
                    <Link to="https://github.com/zigaw" target="_blank" rel="noopener noreferrer">
                        <img src={theme === 'light' ? github_light : github_dark} alt="github" className="icon"/>
                    </Link>
                    <Link href="https://www.instagram.com/zigaweingerl/" target="_blank" rel="noopener noreferrer">
                        <img src={theme === 'light' ? insta_light : insta_dark} alt="instagram" className="icon"/>
                    </Link>
                </div>
            </div>
        </section>
            <AboutMe theme={theme} showImage={showImage} experienceRef={experienceRef} />
            <Experience theme={theme} showImage={showImage} experienceRef={experienceRef} projectsRef={projectsRef}/>
            <Projects theme={theme} showImage={showImage} projectsRef={projectsRef} contactsRef={contactsRef}/>
            <Contacts contactsRef={contactsRef}/>
</>
)
    ;
}

export default HomePage;