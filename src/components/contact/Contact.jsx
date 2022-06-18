import './contact.css';
import Phone from '../../images/phone.png';
import Email from '../../images/email.png';
import Address from '../../images/address.png';
import Linkedin from '../../images/linkedin.png';
import Instagram from '../../images/instagram.png';
import Github from '../../images/github.png';
import Codeforces from '../../images/codeforces.png';
import Codechef from '../../images/codechef.png'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_nvny3k2', 'template_h7xby0d', formRef.current, 'vy3D399ZwKZj-EUq9')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="c" id='contact'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className='c-title'>Let's discuss</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <h2 className="c-info-title" style={{ borderBottom: darkMode && "1px solid white" }}>ADDRESS</h2>
                            <div className="c-box">
                                <img src={Address} alt="" className="c-icon" />
                                Raj Labadhi Heritage,<br /> Ambapur, Koba approach road,<br /> Gandhinagar, Gujarat <br />
                                Pin - 382421
                            </div>
                        </div>
                        <div className="c-info-item">
                            <h2 className="c-info-title" style={{ borderBottom: darkMode && "1px solid white" }}>EMAIL</h2>
                            <div className="c-box">
                                <img src={Email} alt="" className="c-icon" />
                                hritikkumar01478@gmail.com
                            </div>
                        </div>
                        <div className="c-info-item">
                            <h2 className="c-info-title" style={{ borderBottom: darkMode && "1px solid white" }}>PHONE</h2>
                            <div className="c-box">
                                <img src={Phone} alt="" className="c-icon" />
                                (+91) 7564970051
                            </div>
                        </div>
                        <div className="c-info-item" style={{ color: darkMode && "white" }}>
                            <h2 className="c-info-title" style={{ borderBottom: darkMode && "1px solid white" }}>CONNECT</h2>
                            <div className="c-box">
                                <a href="https://github.com/hritik01478">
                                    <img src={Github} alt="" className="c-icon" />
                                </a>
                                <a href="https://www.linkedin.com/in/hritik01478/">
                                    <img src={Linkedin} alt="" className="c-icon" />
                                </a>
                                <a href="https://codeforces.com/profile/hritik_01478">
                                    <img src={Codeforces} alt="" className="c-icon" />
                                </a>
                                <a href="https://www.codechef.com/users/hritik_01478">
                                    <img src={Codechef} alt="" className="c-icon" />
                                </a>
                                <a href="https://www.instagram.com/hritikkumar01478/">
                                    <img src={Instagram} alt="" className="c-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b style={{ fontfamily: 'Merienda' }}>What's your story? </b>Want to talk about topic of intrest. Work on a new project. Contribute on existing project. Or just chit-chat.Feel free to connect with me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333", borderBottom: darkMode && "1px solid grey" }} type="text" placeholder='Name' name='user_name' />
                        <input style={{ backgroundColor: darkMode && "#333", borderBottom: darkMode && "1px solid grey" }} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{ backgroundColor: darkMode && "#333", borderBottom: darkMode && "1px solid grey" }} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} name="message" placeholder='Message' cols="30" rows="6"></textarea>
                        <button type='submit'>Submit</button>
                        {done && <div className='greet'>Thank You...</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;