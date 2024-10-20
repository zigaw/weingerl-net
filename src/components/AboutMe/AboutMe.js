import React from "react";
import {Link} from "react-router-dom";
import about from "../../assets/about-pfp.png";
import experience_light from "../../assets/experience-light.png";
import experience_dark from "../../assets/experience-light.png";
import education_light from "../../assets/education-light.png";
import education_dark from "../../assets/education-dark.png";
import arrow_light from "../../assets/arrow-down-light.png";
import arrow_dark from "../../assets/arrow-down-dark.png";
function AboutMe({theme}) {

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
                <img src={theme === 'light' ? arrow_light : arrow_dark} alt={"Arrow icon"} alt={"Arrow icon"} className={"icon arrow"} />
        </section>
    );
}

export default AboutMe;