import React from 'react'
import Header from "./Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

class App extends React.Component {
    render() {
        return (
            <div className="all">
                <Header/>
                <AboutMe />
                <Projects />
            </div>

        )
    }
}

export default App;