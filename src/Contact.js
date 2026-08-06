import React from 'react';
import './Contact.css';

export default function Contact(){
 return <main className="contact-container page-shell">
  <span className="floating-emoji star-one">✦</span><span className="floating-emoji planet">🪐</span><span className="floating-emoji laptop">💻</span>
  <section className="contact-copy"><p className="eyebrow"><span className="status-dot"/> INBOX OPEN // SAY HELLO</p><h1>Let’s talk! <span>👋🏻</span></h1><p>Have a role, project, interesting problem, or restaurant recommendation? My inbox is open and I’d love to hear from you.</p>
   <div className="contact-links"><a href="mailto:meaghanramlakhan@gmail.com"><span>✉️ EMAIL</span>meaghanramlakhan@gmail.com <b>↗</b></a><a href="https://www.linkedin.com/in/meaghan-ramlakhan/" target="_blank" rel="noreferrer"><span>💼 NETWORK</span>LinkedIn <b>↗</b></a><a href="https://github.com/meaghanramlakhan8" target="_blank" rel="noreferrer"><span>💻 CODE</span>GitHub <b>↗</b></a></div>
   <p className="response-note">Usually orbiting back within 1–2 business days 🚀</p>
  </section>
  <aside className="contact-card"><div className="form-top"><span>DIRECT_CHANNEL.TXT</span><span>● ONLINE</span></div><div className="contact-card-body"><span className="contact-card-icon">✉</span><p className="contact-card-label">READY TO CONNECT</p><h2>Let’s start a conversation.</h2><p>Have a question, want to connect, or just feel like saying hello? I’d be happy to hear from you.</p><a className="button button-primary contact-email-button" href="mailto:meaghanramlakhan@gmail.com?subject=Hello%20from%20your%20portfolio">Email me <span>↗</span></a><small>meaghanramlakhan@gmail.com</small></div></aside>
 </main>
}
