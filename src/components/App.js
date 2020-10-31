import React from 'react'
import Header from "./Header";
import AboutMe from "./AboutMe";

class App extends React.Component {
    render() {
        return (
            <div className="all">
                <Header/>
                <AboutMe />
            </div>

        )
    }
}

export default App;