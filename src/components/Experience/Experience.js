import React from "react";
import {Link} from "react-router-dom";
import checkmark_light from "../../assets/checkmark-light.png";
import checkmark_dark from "../../assets/checkmark-dark.png";
import arrow_light from "../../assets/arrow-down-light.png";

function Experience() {
    return (
        <section id={"experience"}>
            <p className={"section__text__p1"}>Check Out My</p>
            <h1 className={"title"}>Experience</h1>
            <div className={"experience-details-ontainer"}>
                <div className={"about-containers"}>
                    <div className={"details-container"}>
                        <h2 className={"experience-sub-title"}>Frontend Development</h2>
                        <div className={"article-container"}>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>HTML</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>CSS</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>SASS</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>JavaScript</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>TypeScript</h3>
                                    <p>Intermidiate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Material UI</h3>
                                    <p>Intermidiate</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className={"details-container"}>
                        <h2 className={"experience-sub-title"}>Backend Development</h2>
                        <div className={"article-container"}>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>MySQL</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Node JS</h3>
                                    <p>Intermidiate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Express JS</h3>
                                    <p>Intermidiate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Git</h3>
                                    <p>Intermidiate</p>
                                </div>
                            </article>
                        </div>
                    </div>

                </div>
            </div>

            <Link to={"/#projects"}>
                <img src={arrow_light} alt={"Arrow icon"} className={"icon arrow"}/>
            </Link>
        </section>
    )
}

export default Experience;

