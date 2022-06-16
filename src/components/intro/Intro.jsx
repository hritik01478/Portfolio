import './intro.css';
import Me from '../../images/Hritik.png'
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Hritik</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Competitive Coder</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">GDSC DSA Volunteer</div>
                            <div className="i-title-item">Artist</div>
                            <div className="i-title-item">5 star coder</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I am a Competitive Coder and Web Developer. I am a student and not working for any company or organisation.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className='i-img' />
            </div>
        </div>
    );
}

export default Intro;