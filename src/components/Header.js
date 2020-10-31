import React from 'react'
import {myPhoto, githubIcon, linkedinIcon, gmailIcon} from '../static_data/data'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="container pb-4">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <figure>
                                <img src={myPhoto} alt="myPhoto" className="rounded-circle mx-auto d-block myPhoto"/>
                                <figcaption className="text-center mt-4"><h1>Krzysztof Nalepa</h1></figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="offset-md-3 col-md-2 col-4">
                            <a href="https://github.com/kraleppa" target="_blank" rel="noreferrer">
                                <img src={githubIcon} alt="githubIcon" className="icon mx-auto d-block" />
                            </a>
                        </div>
                        <div className="col-md-2 col-4">
                            <a href="https://www.linkedin.com/in/krzysztof-nalepa-9071211b3/" target="_blank" rel="noreferrer">
                                <img src={linkedinIcon} alt="linkedinIcon" className="icon mx-auto d-block" />
                            </a>
                        </div>
                        <div className="col-md-2 col-4">
                            <a href="mailto:krzysiek.nalepa68@gmail.com">
                                <img src={gmailIcon} alt="gmailIcon" className="icon mx-auto d-block"/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Header;