import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>Feel free to reach out to me through the following methods:</p>
            <ul>
                <li>Email: meaghan.c.ramlakhan@rice.edu</li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/meaghan-ramlakhan/" target="_blank" rel="noopener noreferrer">Meaghan Ramlakhan</a></li>
                <li>GitHub: <a href="https://github.com/meaghanramlakhan8" target="_blank" rel="noopener noreferrer">Meaghan's GitHub</a></li>
            </ul>
        </div>
    );
}

export default Contact;
