import React from "react";
import "./HomePage.css";
import {Link} from "react-router-dom";
import linkedin_light from "../../assets/linkedin-light.png";
import github_light from "../../assets/github-light.png";
import insta_light from "../../assets/instagram-icon-light.png";
import linkedin_dark from "../../assets/linkedin-dark.png";
import github_dark from "../../assets/github-dark.png";
import insta_dark from "../../assets/instagram-icon-dark.png";
import profile_pic from "../../assets/profile-pic.png"
import about from "../../assets/about-pfp.png";
import experience_light from "../../assets/experience-light.png";
import experience_dark from "../../assets/experience-light.png";
import education_light from "../../assets/education-light.png";
import education_dark from "../../assets/education-dark.png";
import arrow_light from "../../assets/arrow-down-light.png";
import arrow_dark from "../../assets/education-dark.png";

function HomePage({theme}) {
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
                        <button className={"btn btn-color-2"}>Download CV</button>
                        <Link to={"/contact"}>
                            <button className={"btn btn-color-1"}>Contact me</button>
                        </Link>
                    </div>
                    <div id={"socials-container"}>
                        <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
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
            <section id={"about"}>
                <p className={"section__text__p1"}>Get To Know More</p>
                <h1 className={"title"}>About Me</h1>
                <div className={"section-container"}>
                    <div className={"section__pic-container"}>
                        <img src={about} alt={"About picture"} className={"about-pic"}/>
                    </div>
                    <div className={"about-details-container"}>
                        <div className={"about-containers"}>
                            <div className={"details-container"}>
                                <img src={experience_light} alt="experience icon" className={"icon"}/>
                                <h3>Experience</h3>
                                <p>2+ years <br/> Full Stack Development</p>
                            </div>
                            <div className={"details-container"}>
                                <img src={education_light} alt="Education icon" className={"icon"}/>
                                <h3>Education</h3>
                                <p>Currently studying: 3rd year Computer Science and Information Technologies,
                                    FERI <br/>2021: High School Graduate </p>
                            </div>
                        </div>
                        <div className={"text-container"}>
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                                cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
                                galería de textos y los mezcló de tal manera que logró hacer un libro de textos
                                especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno
                                en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado
                                en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de
                                Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus
                                PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
                <Link to={"#experience"}>
                <img src={arrow_light} alt={"Arrow icon"} className={"icon arrow"}/>
                </Link>
            </section>
        </>
    );
}

export default HomePage;