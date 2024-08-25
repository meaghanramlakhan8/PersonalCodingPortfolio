import React from 'react';
import './Contact.css'; // Import the updated CSS

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>Feel free to reach out to me through the following methods:</p>

            {/* Contact Form */}
            <form className="contact-form">
                <input type="text" placeholder="Your Name" className="contact-input" />
                <input type="email" placeholder="Your Email" className="contact-input" />
                <textarea placeholder="Your Message" className="contact-textarea"></textarea>
                <button type="submit" className="contact-button">Send Message</button>
            </form>

            {/* Social Media Links */}
            <div className="social-media">
                <ul>
                    <li>
                        <a href="mailto:meaghan.c.ramlakhan@rice.edu" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-envelope"></i> Email
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/meaghan-ramlakhan/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/meaghanramlakhan8" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
