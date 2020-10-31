import React from 'react'
import cernPhoto from '../static_data/cern.jpg'

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about_me pt-5">

                <div className="container">

                    <div className="row-cols-12">
                        <h3>About me</h3>
                    </div>

                    <div className="row-cols-12">
                        <div className="first-block">
                            Hi, my name is Krzysztof (Christopher) I am currently studying Computer Science at AGH University of Science and Technology.
                            I am a man of many interests with a head full of ideas and motivation to implement them.
                            Passionate about software development and solving problems.
                            Creative person in many different ways.
                        </div>
                    </div>


                    <div className="row-cols-12 ">
                        <div className="second-block p-3 mt-4 ml-md-5">
                            <img src={cernPhoto} alt="cernPhoto" className="d-none d-sm-none d-md-block"/>
                            <p>
                            I have been always interested in science and new technologies since primary school.
                            My first meeting with programming took place in high school during computer science classes.
                            Since that lesson I knew that this is my future.
                            My goal is to become full-stack developer by improving my skills from area of software development.
                            </p>
                        </div>
                    </div>

                    <div className="row-cols-12 ">

                        <div className="third-block p-3 mt-4 mr-md-5">
                            <img src={cernPhoto} alt="cernPhoto" className="d-none d-sm-none d-md-block"/>
                            <p>
                                Besides programming and science I have plenty of other hobbies, like swimming, video games or cycling,
                                but my biggest love is music.
                                I have been playing a guitar since high school and I am going to learn playing a piano.
                                I am also interested in music production and composition.
                                My adventure with music really improved my creativity.
                                <br/>
                                <br/>
                                By the way - big Pink Floyd fan! :)




                            </p>
                        </div>
                    </div>






                </div>
            </div>
        )
    }
}

export default AboutMe;