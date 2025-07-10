import { useRef } from 'react';
import "../styles/css/ContactUs.css";
import '../styles/css/Image.css';
import lucgiac from '../styles/images/lucgiac.png';
import ProgressBarComponent from './Progress-bar.Component';

const ContactUsComponent = () => {
    const containerRef = useRef(null);

    return (
        <div className="contact-container" ref={containerRef}>
            <header className="contact-header">
                <h2>06</h2>
                <p>Contact Us</p>
                <ProgressBarComponent containerRef={containerRef} />
            </header>
            <main>
                <div className="contact-card">
                    <div className="contact-image-container">
                        <img className='image-one'
                            src={lucgiac}
                            alt="Contact"
                        />
                        <img className='image-two'
                            src={lucgiac}
                            alt="Contact"
                        />
                    </div>
                    <form className="contact-form">
                        <h3>
                        Ready to Partner with Us? <br />
                        Contact us today.
                        </h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First name *</label>
                                <input type="text" id="firstName" name="firstName" required className='input-type'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name *</label>
                                <input type="text" id="lastName" name="lastName" required className='input-type'/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input type="email" id="email" name="email" required className='input-type'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <div className="phone-input">
                                    <select className="phone-select" id="countryCode" name="countryCode" >
                                        <option value="+1">🇺🇸 +1</option>
                                        <option value="+44">🇬🇧 +44</option>
                                        <option value="+91">🇮🇳 +91</option>
                                    </select>
                                    <input type="tel" id="phone" name="phone" className='input-type'/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="3" className='input-type'></textarea>
                        </div>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default ContactUsComponent;
