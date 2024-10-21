import React from "react";
import {Link} from "react-router-dom";
import about from "../../assets/about-pfp.png";
import experience_light from "../../assets/experience-light.png";
import experience_dark from "../../assets/experience-light.png";
import education_light from "../../assets/education-light.png";
import education_dark from "../../assets/education-dark.png";
import arrow_light from "../../assets/arrow-down-light.png";
import arrow_dark from "../../assets/arrow-down-dark.png";

function AboutMe({theme, showImage}) {

    return (
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
                        <p>Hi, I’m Žiga Weingerl, a final-year Computer Science student at FERI (Faculty of Electrical
                            Engineering and Computer Science) University of Maribor, Slovenia, currently pursuing a
                            degree in Computer Science and Information Technologies. Upon graduation, I will earn the
                            title of Bachelor of Science in Computer Science and Information Technologies.<br/>I’m
                            constantly learning and experimenting with new technologies, and I enjoy the process of
                            turning complex problems into elegant, efficient solutions. Whether it's building responsive
                            web apps or diving into mobile development, I thrive on creating software that is both
                            functional and user-friendly.</p>
                    </div>
                </div>
            </div>
            {showImage && (
                <img src={theme === 'light' ? arrow_light : arrow_dark} alt={"Arrow icon"} className={"icon arrow"} />
            )}
        </section>
    );
}

export default AboutMe;