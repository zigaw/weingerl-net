import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
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
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contacts/>}/>
                </Routes>
                <Footer theme={theme}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
