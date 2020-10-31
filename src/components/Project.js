import React from 'react'
import Language from "./Language";

class Project extends React.Component {
    render() {
        const languagesList = this.props.project.languages.map(language => <Language language = {language} />)
        return (
            <div className="col-md-6 project">
                <div className="card" >
                    <div className="card-header mb-4">
                        {this.props.project.name} <br/>
                        {languagesList}
                    </div>
                    <img className="card-img-top" src={this.props.project.image_url} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                        </div>
                </div>
            </div>
        )
    }
}

export default Project;