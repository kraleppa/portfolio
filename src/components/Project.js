import React from 'react'
import Language from "./Language";

class Project extends React.Component {
    render() {
        const languagesList = this.props.project.languages.map(language => <Language language = {language} key={language.name} />)
        return (
            <div className="col-md-6 project mb-4">
                <div className="card" >
                    <div className="card-header mb-4">
                        {this.props.project.name} <br/>
                        {languagesList}
                    </div>
                    <img className="card-img-top" src={this.props.project.image_url} alt={this.props.project.id} />
                        <div className="card-body">
                            <p className="card-text description">{this.props.project.description}</p>
                        </div>
                </div>
            </div>
        )
    }
}

export default Project;