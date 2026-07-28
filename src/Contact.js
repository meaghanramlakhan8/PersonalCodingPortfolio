import React,{useState} from 'react';
import './Contact.css';

export default function Contact(){
 const[form,setForm]=useState({name:'',email:'',message:''});
 const submit=e=>{e.preventDefault();window.location.href=`mailto:meaghan.c.ramlakhan@rice.edu?subject=${encodeURIComponent(`Portfolio message from ${form.name}`)}&body=${encodeURIComponent(`${form.message}\n\n${form.name} — ${form.email}`)}`};
 return <main className="contact-container page-shell">
  <span className="floating-emoji star-one">✦</span><span className="floating-emoji planet">🪐</span><span className="floating-emoji laptop">💻</span>
  <section className="contact-copy"><p className="eyebrow"><span className="status-dot"/> INBOX OPEN // SAY HELLO</p><h1>Let’s talk! <span>👋🏻</span></h1><p>Have a role, project, interesting problem, or restaurant recommendation? My inbox is open—I’d love to hear from you.</p>
   <div className="contact-links"><a href="mailto:meaghan.c.ramlakhan@rice.edu"><span>✉️ EMAIL</span>meaghan.c.ramlakhan@rice.edu <b>↗</b></a><a href="https://www.linkedin.com/in/meaghan-ramlakhan/" target="_blank" rel="noreferrer"><span>💼 NETWORK</span>LinkedIn <b>↗</b></a><a href="https://github.com/meaghanramlakhan8" target="_blank" rel="noreferrer"><span>💻 CODE</span>GitHub <b>↗</b></a></div>
   <p className="response-note">Usually orbiting back within 1–2 business days 🚀</p>
  </section>
  <form className="contact-form" onSubmit={submit}><div className="form-top"><span>NEW_MESSAGE.TXT</span><span>🔒 SECURE</span></div><label>01 / YOUR NAME<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="What should I call you?"/></label><label>02 / YOUR EMAIL<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Where can I reach you?"/></label><label>03 / MESSAGE<textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell me what’s on your mind..."/></label><button className="button button-primary">Send it into orbit <span>🚀</span></button></form>
 </main>
}
