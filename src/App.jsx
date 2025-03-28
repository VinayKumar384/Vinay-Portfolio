import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {
    return (
        <div> {/* <Header/>

            <About />
            <Contact/>
            <Projects />
            <Footer/>*/}

        <div/>
        <Header/>
        <div id="about">
            <About/>
        </div>
            <div id="projects">
                <Projects/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
            <div >
                <Footer/>
            </div>
        </div>
    )
}
export default App
