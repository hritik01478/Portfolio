import './about.css';
import photo from '../../images/hritik-about3.jpg';
import Education from '../../images/education.png';
import Skills from '../../images/skills.png';
import Hobbies from '../../images/hobbies.png';
import { useContext } from 'react';
import { ThemeContext } from "../../context";

const About = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="a" id='about'>
            <div className="a-left">
                <div className="a-card  bg"></div>
                <div className="a-card">
                    <img src={photo} alt="" className='a-img' />
                </div>
            </div>
            <div className="a-center"></div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <div className="a-box">
                    <div className="a-data">
                        <div className="data-title">
                            <img src={Hobbies} alt="" />
                            <h1>Hobbies and Interests</h1>
                        </div>
                        <hr className='odd' style={{ backgroundColor: darkMode && "#333", borderTop: "1px solid black", borderBottom: "1px solid white" }} />
                        <div className="data-desc">
                            <ul className='a-list'>
                                <li className='a-list-item even'>Learning new softwares and Making Websites</li>
                                <li className='a-list-item odd' style={{ backgroundColor: darkMode && "#333" }}>Artistic activities such as painting or drawing</li>
                                <li className='a-list-item even'>Running, GYM and Exercises</li>
                                <li className='a-list-item odd' style={{ backgroundColor: darkMode && "#333" }}>Cooking and baking</li>
                            </ul>
                        </div>
                    </div>
                    <div className="a-data">
                        <div className="data-title">
                            <img src={Education} alt="" />
                            <h1>Education</h1>
                        </div>
                        <hr className='odd' style={{ backgroundColor: darkMode && "#333", borderTop: "1px solid black", borderBottom: "1px solid white" }} />
                        <div className="data-desc">
                            <table>
                                <tr>
                                    <th>Year</th>
                                    <th>Institute</th>
                                    <th>Qualification</th>
                                </tr>
                                <tr className='odd' style={{ backgroundColor: darkMode && "#333" }}>
                                    <td>2020 - Present</td>
                                    <td>IIIT Vadodara</td>
                                    <td>B.Tech in CSE (Ongoing)</td>
                                </tr>
                                <tr >
                                    <td>2017 - 2019</td>
                                    <td>JVM shayamali, Ranchi</td>
                                    <td>Senior Secondary Education</td>
                                </tr>
                                <tr className='odd' style={{ backgroundColor: darkMode && "#333" }}>
                                    <td>2006 - 2017</td>
                                    <td>Creane Memorial School, Gaya</td>
                                    <td>Secondary Education</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="a-data">
                        <div className="data-title">
                            <img src={Skills} alt="" />
                            <h1>Skills</h1>
                        </div>
                        <hr className='odd' style={{ backgroundColor: darkMode && "#333", borderTop: "1px solid black", borderBottom: "1px solid white" }} />
                        <div className="data-desc">
                            <ul className='a-list'>
                                <li className='a-list-item even'>
                                    <b>Expertise : </b>Competitive Coding, DSA, Algorithm Optimization, Frontend Developer
                                </li>
                                <li className='a-list-item odd' style={{ backgroundColor: darkMode && "#333" }}>
                                    <b>Languages : </b>C, C++, JAVA, HTML, CSS, JAVASCRIPT
                                </li>
                                <li className='a-list-item even'>
                                    <b>Framework : </b>React, Node
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;