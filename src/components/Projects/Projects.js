import React from "react";
import {Link} from "react-router-dom";
import project1 from "../../assets/project-1.png";
import arrow_light from "../../assets/arrow-down-light.png";
import arrow_dark from "../../assets/arrow-down-dark.png";
function Projects({theme}) {
    return (
        <section id={"projects"}>
            <p className={"section__text__p1"}>View My</p>
            <h1 className={"title"}>Projects</h1>
            <div className={"experience-details-container"}>
                <div className={"about-containers"}>
                <div className={"details-container color-container"}>
                    <div className={"article-container"}>
                        <img src={project1} alt={"Project 1"} className={"project-img"}/>
                    </div>
                    <h2 clasName={"experience-sub-title project-title"}>Project One</h2>
                    {/*
                    <Link to={"/https://github.com/"}>
                    <div className={"btn btn-color-2 project-btn"} >GitHub</div>
                    </Link>
                                        <Link to={"/https://github.com/"}>
                    <div className={"btn btn-color-2 project-btn"} >Live Demo</div>
                    </Link>
                    */}
                </div>
                <div className={"details-container color-container"}>
                    <div className={"article-container"}>
                        <img src={project1} alt={"Project 1"} className={"project-img"}/>
                    </div>
                    <h2 clasName={"experience-sub-title project-title"}>Project Two</h2>
                    {/*
                    <Link to={"/https://github.com/"}>
                    <div className={"btn btn-color-2 project-btn"} >GitHub</div>
                    </Link>
                                        <Link to={"/https://github.com/"}>
                    <div className={"btn btn-color-2 project-btn"} >Live Demo</div>
                    </Link>
                    */}
                </div>
                <div className={"details-container color-container"}>
                    <div className={"article-container"}>
                        <img src={project1} alt={"Project 1"} className={"project-img"}/>
                    </div>
                    <h2 clasName={"experience-sub-title project-title"}>Project Three</h2>
                    {/*
                    <Link to={"/https://github.com/"}>
                    <div className={"btn btn-color-2 project-btn"} >GitHub</div>
                    </Link>
                                        <Link to={"/https://github.com/"}>
                    <div className={"btn btn-color-2 project-btn"} >Live Demo</div>
                    </Link>
                    */}
                </div>
                </div>
            </div>
            <Link to={"/#contact"}>
                <img src={theme === 'light' ? arrow_light : arrow_dark} alt={"Arrow icon"} alt={"Arrow icon"} className={"icon arrow"}/>
            </Link>
        </section>
    );
}

export default Projects;