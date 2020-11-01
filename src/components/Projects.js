import React from 'react';
import Project from "./Project";
import {projects} from '../static_data/projects'
import {language, parseString} from "../static_data/languages";


class Projects extends React.Component{
    constructor() {
        super();
        this.state = {
            filterLanguage: "",
            sortBy: (project1, project2) => project1.id - project2.id
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){

        let {name, value} = event.target;
        if (name === 'sortBy'){
            switch (value){
                case 'DEFAULT': value = (project1, project2) => project1.id - project2.id; break;
                case 'SIZE ASC': value = (project1, project2) => project1.size - project2.size; break;
                case 'SIZE DESC': value = (project1, project2) => project2.size - project1.size; break;
                case 'END DATE ASC': value = (project1, project2) => project1.end_date - project2.end_date; break;
                case 'END DATE DESC': value = (project1, project2) => project2.end_date - project1.end_date; break;
                default: value = (project1, project2) => project1.id - project2.id; break;
            }
        }

        this.setState({[name]: value})
    }

    render() {
        const htmlList = projects
            .filter(project => project.languages.includes(parseString(this.state.filterLanguage)) || this.state.filterLanguage === '')
            .sort(this.state.sortBy)
            .map(project => <Project project={project} key={project.id}/>)

        const optionsList = Object.entries(language)
            .map(language =>
                <option key={language[0]} value={language[0]}>
                    {language[1].name}
                </option>
            )

        return (
            <div className="projects pt-5">
                <div className="container">
                    <div className="row-cols-12 mb-4">
                        <h3>Projects</h3>
                    </div>
                    <div className="row mb-4">
                        <div className="col-12 col-md-3">
                            <label htmlFor="language-select">Language</label>
                            <select className="custom-select" id="language-select" name="filterLanguage" onChange={this.handleChange}>
                                <option value="">All</option>
                                {optionsList}
                            </select>
                        </div>
                        <div className="col-12 col-md-3">
                            <label htmlFor="sort-select">Sort by</label>
                            <select className="custom-select" id="sort-select" name="sortBy" onChange={this.handleChange}>
                                <option value="DEFAULT">Default</option>
                                <option value="SIZE DESC">Size descending</option>
                                <option value="SIZE ASC">Size ascending</option>
                                <option value="END DATE DESC">End date descending</option>
                                <option value="END DATE ASC">End date ascending</option>

                            </select>
                        </div>

                    </div>
                    <div className="row">
                        {htmlList}
                    </div>
                </div>
            </div>

        )
    }
}

export default Projects;