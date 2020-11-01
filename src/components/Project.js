import React from 'react'
import Language from "./Language";

class Project extends React.Component {
    render() {
        const languagesList = this.props.project.languages.map(language => <Language language = {language} key={language.name} />)
        return (
            <div className="col-md-6 project mb-4">
                <div className="card" >
                    <div className="card-header mb-4">
                        <div className="name">{this.props.project.name}</div>
                        <div className="date">{this.props.project.end_date.toISOString().substring(0, 10)}</div>
                        <br/>
                        {languagesList}
                    </div>
                    <img className="card-img-top" src={this.props.project.image_url} alt={this.props.project.id} />
                    <div className="card-body">
                        <p className="card-text description">{this.props.project.description}</p>

                    </div>
                    <div className="card-body text-center">
                        {this.props.project.github_urls.length === 1 &&
                            <a type="button" className="btn btn-primary" href={this.props.project.github_urls[0]}>Code</a>
                        }

                        {this.props.project.github_urls.length === 2 &&
                            <div>
                                <a type="button" className="btn btn-primary mr-5" href={this.props.project.github_urls[0]}>Backend code</a>
                                <a type="button" className="btn btn-primary" href={this.props.project.github_urls[1]}>Frontend code</a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;