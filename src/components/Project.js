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
                    {this.props.project.hasOwnProperty("badge") &&
                        <figure>
                            <a href={this.props.project.badge.url} target="_blank" rel="noreferrer">
                                <img className="badge-image" src={this.props.project.badge.image_url} alt={this.props.project.badge.image_url}/>
                            </a>
                            <figcaption>{this.props.project.badge.description}</figcaption>
                        </figure>

                    }
                    <img className="card-img-top" src={this.props.project.image_url} alt={this.props.project.id} />
                    <div className="card-body">
                        <p className="card-text description">{this.props.project.description}</p>

                    </div>
                    <div className="card-body text-center">
                        {this.props.project.github_urls.length === 1 &&
                            <a type="button" className="btn btn-primary mt-1" href={this.props.project.github_urls[0]} target="_blank" rel="noreferrer">Code</a>
                        }

                        {this.props.project.github_urls.length === 2 &&
                            <div>
                                <a type="button" className="btn btn-primary mr-md-5 mr-1 mt-1" href={this.props.project.github_urls[0]} target="_blank" rel="noreferrer">Backend code</a>
                                <a type="button" className="btn btn-primary mt-1" href={this.props.project.github_urls[1]} target="_blank" rel="noreferrer">Frontend code</a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;