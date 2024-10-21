import React from "react";
import {Link} from "react-router-dom";
import checkmark_light from "../../assets/checkmark-light.png";
import arrow_light from "../../assets/arrow-down-light.png";
import arrow_dark from "../../assets/arrow-down-dark.png";

function Experience({theme, showImage}) {
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
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>React</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Material UI</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Expo</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>React Native</h3>
                                    <p>Intermediate</p>
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
                                    <h3>Node JS</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Express JS</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>SQL</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
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
                                    <h3>NoSQL</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>MongoDB</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Routing</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Git</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className={"details-container"}>
                        <h2 className={"experience-sub-title"}>Mobile Development</h2>
                        <div className={"article-container"}>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Java</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Kotlin</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Android Development</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className={"details-container"}>
                        <h2 className={"experience-sub-title"}>System Administration & Other Technologies</h2>
                        <div className={"article-container"}>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Linux</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Unix</h3>
                                    <p>Intermidiate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Bash</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Windows</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>WordPress</h3>
                                    <p>Intermidiate</p>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className={"details-container"}>
                        <h2 className={"experience-sub-title"}>Additional Programming Languages</h2>
                        <div className={"article-container"}>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>Python</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>C</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>C#</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>C++</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmark_light} alt={"Experience icon"} className={"icon"}/>
                                <div>
                                    <h3>PHP</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            {showImage && (
                <img src={theme === 'light' ? arrow_light : arrow_dark} alt={"Arrow icon"} className={"icon arrow"} />
            )}        </section>
    )
}

export default Experience;

