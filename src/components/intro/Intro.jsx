import './intro.css';
import Me from '../../images/nobackintro1.png'
const Intro = () => {
    return (
        <div className="i" id='intro'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hey, Welcome</h2>
                    <h1 className="i-name">Hritik Kumar</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Competitive Coder</div>
                            <div className="i-title-item">Full Stack Developer</div>
                            <div className="i-title-item">GDSC DSA Volunteer</div>
                            <div className="i-title-item">Artist</div>
                            <div className="i-title-item">5 star coder</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Undergraduate at <b>Indian Institute of Information Technology, Vadodara</b>
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