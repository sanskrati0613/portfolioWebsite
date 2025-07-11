import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import About from "./components/About/about";
import Skills from './components/Skills/skills';
import Education from './components/Education/education';
import Training from './components/Training/training';
// import Certifications from './components/Certifications/certifications';
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";


function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <About />
            <Skills/>
            <Education/>
            <Training/>
            {/* <Certifications/> */}
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
