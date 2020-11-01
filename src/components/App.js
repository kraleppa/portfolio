import React from 'react'
import Header from "./Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";
import Footer from "./Footer";

class App extends React.Component {
    render() {
        return (
            <div className="all">
                <Header/>
                <AboutMe />
                <Projects />
                <Resume />
                <Footer />
            </div>

        )
    }
}

export default App;