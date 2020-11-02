import React from 'react'
import Header from "./Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";
import Footer from "./Footer";
import MyNavbar from "./MyNavbar";

class App extends React.Component {
    render() {
        return (
            <div className="all" id="Home">
                <MyNavbar />
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