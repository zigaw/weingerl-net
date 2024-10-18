import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import logo from "../../assets/my-logo-light.png";
import menu_bars_light from "../../assets/menu-bars-light.png";
import menu_bars_dark from "../../assets/menu-bars-dark.png";
import menu_close_light from "../../assets/menu-close-light.png";
import menu_close_dark from "../../assets/menu-close-dark.png";
import my_logo_light from "../../assets/my-logo-light.png";
import my_logo_dark from "../../assets/my-logo-dark.png";
import toggle_light from "../../assets/light-mode.png";
import toggle_dark from "../../assets/dark-mode.png";
function Navbar({theme, setTheme}) {

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    const closeSidebar = () => {
        document.getElementById("sidebar-active").checked = false;
    };

    return (
        <nav className="navbar">
            <input type="checkbox" id={"sidebar-active"}/>
            <label htmlFor={"sidebar-active"} id={"overlay"}></label>
            <div className="navbar-content">
                <Link to={"/"} className="logo-container">
                    <img src={theme === 'light'? my_logo_light : my_logo_dark} alt={'weingerl-logo'} className={'logo'}/>
                </Link>
                <div className="links-container">
                    <label htmlFor={"sidebar-active"} className={"close-sidebar-button"}><img className={"sidebar-img"} src={theme === 'light' ? menu_close_light : menu_close_dark} alt={"sidebar-button-close"}/></label>
                    <img onClick={toggleTheme} src={theme === 'light' ? toggle_dark : toggle_light} alt={'toggle-icon'} className={'toggle-icon-mobile'}/>

                    <ul>
                        <li>
                            <Link to={"/"} onClick={closeSidebar}>About</Link>
                        </li>
                        <li>
                            <Link to={"/experience"} onClick={closeSidebar}>Experience</Link>
                        </li>
                        <li>
                            <Link to={"/projects"} onClick={closeSidebar}>Projects</Link>
                        </li>
                        <li>
                            <Link to={"/contact"} onClick={closeSidebar}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <label htmlFor={"sidebar-active"} className={"open-sidebar-button"}><img className={"sidebar-img"} src={theme === 'light' ? menu_bars_light : menu_bars_dark} alt={"sidebar-button-open"}/></label>
                <img onClick={toggleTheme} src={theme === 'light' ? toggle_dark : toggle_light} alt={'toggle-icon'} className={'toggle-icon-pc'}/>

            </div>
        </nav>
    );
}

export default Navbar;