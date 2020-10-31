import React from 'react';
import Project from "./Project";
import {projects} from '../static_data/projects'


class Projects extends React.Component{
    render() {
        const htmlList = projects.map(project => <Project project={project} key={project.id}/>)
        return (
            <div className="projects pt-5">
                <div className="container">
                    <div className="row-cols-12 mb-4">
                        <h3>Projects</h3>
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