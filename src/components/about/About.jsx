import './about.css';
import photo from '../../images/about.jpg';

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card  bg"></div>
                <div className="a-card">
                    <img src={photo} alt="" className='a-img' />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, excepturi quos debitis quisquam laborum distinctio eos architecto</p>
                <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea minima perferendis dolorum sit adipisci libero. Alias, hic reiciendis cum repellendus ipsa inventore nesciunt illo consequatur fuga accusantium optio porro, quam molestias expedita soluta vero quod repellat perspiciatis. Quasi, culpa?</p>

            </div>
        </div>
    );
}

export default About;