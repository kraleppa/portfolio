import React from 'react';
import resume from '../static_data/Resume.pdf'
class Resume extends React.Component {
    render() {
        return (
            <div className="resume mb-5" id="Resume">
                <div className="container">
                    <div className="row-cols-12 mb-4">
                        <h3>Resume</h3>
                    </div>
                    <div className="row-cols-12 mb-4 text-center">
                        Feel free to download my resume
                    </div>
                    <div className="row-cols-12 text-center">
                        <a type="button" className="btn btn-primary" href={resume} download>Download</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;