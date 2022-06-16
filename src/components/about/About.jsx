import './about.css';
import photo from '../../images/hritik-about3.jpg';

const About = () => {
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
                <div className="a-data"></div>
                <div className="a-data"></div>
                <div className="a-data"></div>

            </div>
        </div>
    );
}

export default About;