import React from "react";
import {Link} from "react-router-dom";
import project1 from "../../assets/project-1.png";
import project2 from "../../assets/project-2.png";
import project3 from "../../assets/project-3.png";
import arrow_light from "../../assets/arrow-down-light.png";
import arrow_dark from "../../assets/arrow-down-dark.png";
function Projects({theme, showImage, projectsRef, contactsRef}) {
    const scrollToContacts = () => {
        if (contactsRef.current) {
            contactsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (

        <section id={"projects"} ref={projectsRef}>
            <p className={"section__text__p1"}>View My</p>
            <h1 className={"title"}>Projects</h1>
            <div className={"experience-details-container"}>
                <div className={"about-containers"}>
                <div className={"details-container color-container"}>
                    <div className={"article-container"}>
                        <img src={project1} alt={"Project 1"} className={"project-img"}/>
                    </div>
                    <h2 clasName={"experience-sub-title project-title"}>My Website</h2>
                    <p>This responsive website, built using React.js, was developed to demonstrate my expertise and skills. The project features a modern, visually appealing design with smooth animations and an intuitive, user-friendly interface. Key sections include a portfolio, an about me page, and a contact form, all fully optimized for seamless performance across different devices and screen sizes.</p>
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
                        <img src={project2} alt={"Project 2"} className={"project-img"}/>
                    </div>
                    <h2 clasName={"experience-sub-title project-title"}>Shopping List Website</h2>
                    <p>During my second year at university, I collaborated with two other students to develop a website that allowed users to add groceries to a shopping list and calculate which local store offered the lowest total price. We built Python web scrapers to collect product data from various grocery stores and stored this information in a MongoDB database. The project was successfully deployed on Azure, providing users with real-time price comparisons.</p>
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
                        <img src={project3} alt={"Project 3"} className={"project-img"}/>
                    </div>
                    <h2 clasName={"experience-sub-title project-title"}>Small School Projects</h2>
                    <p>Over the past two years, I have worked on a variety of projects for different courses, ranging from websites to games and automation scripts. These include games developed with LibGDX, mobile apps built using React Native and Kotlin, and projects exploring how RAM works through locking and unlocking processes in an Operating Systems class. Each project helped me deepen my understanding of key technologies like web development, game design, mobile development, and system architecture.</p>

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
            {showImage && (
                <img
                    src={theme === 'light' ? arrow_light : arrow_dark}
                    alt={"Arrow icon"}
                    className={"icon arrow"}
                    onClick={scrollToContacts}
                />
            )}
        </section>
);
}

export default Projects;