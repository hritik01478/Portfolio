import './contact.css';
import Phone from '../../images/phone.png';
import Email from '../../images/email.png';
import Address from '../../images/address.png';
import Linkedin from '../../images/linkedin.png';
import Github from '../../images/github.png';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from 'react'
import { ThemeContext } from '../../context'

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
                    <h1 className='c-title'>Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            (+91) 7564970051
                        </div>
                        <a href="https://www.linkedin.com/in/hritik01478/">
                            <div className="c-info-item">

                                <img src={Linkedin} alt="" className="c-icon" />
                                hritik01478
                            </div>
                        </a>
                        <a href="https://github.com/hritik01478">
                            <div className="c-info-item">
                                <img src={Github} alt="" className="c-icon" />
                                hritik01478
                            </div>
                        </a>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            hritikkumar01478@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Raj Labadhi Heritage, Ambapur, Koba approach road, Gandhinagar, Gujarat <br />
                            Pin - 382421
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b style={{ fontfamily: 'Merienda' }}>What's your story? </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptatibus sunt ullam sit alias odit vero deleniti dolore autem distinctio.
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