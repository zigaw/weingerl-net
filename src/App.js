import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contact/Contacts";
import Footer from "./components/Footer/Footer";
import {useState,useEffect} from "react";

function App() {
    const current_theme = localStorage.getItem('current_theme');
    const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

    useEffect(() => {
        localStorage.setItem('current_theme',theme);
    },[theme]);

    return (
        <BrowserRouter>
            <div className={`App ${theme}`}>
                <Navbar theme={theme} setTheme={setTheme}/>
                <Routes>
                    <Route path="/" element={<HomePage theme={theme}/>}/>
                    <Route path="/experience" element={<Experience theme={theme}/>}/>
                    <Route path="/projects" element={<Projects theme={theme}/>}/>
                    <Route path="/contact" element={<Contacts/>}/>
                    <Route path="*" element={<HomePage theme={theme}/>}/>
                </Routes>
                <Footer theme={theme}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
