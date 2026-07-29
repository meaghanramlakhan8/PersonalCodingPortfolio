import React,{useEffect,useState} from 'react';
import {Link,NavLink} from 'react-router-dom';
import './navbar.css';

const links=[['/','Home'],['/about','About'],['/work','Experiences'],['/projects','Projects'],['/contact','Contact']];
const spaceItems=[['◉','HOUSTON, SPACE CITY'],['✦','29.7604° N'],['⌁','SYSTEMS ONLINE'],['◌','UTC −05:00'],['↗','OPEN TO CONNECT']];

export default function Navbar(){
 const[open,setOpen]=useState(false);
 const[theme,setTheme]=useState(()=>localStorage.getItem('portfolio-theme')||'dark');
 useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('portfolio-theme',theme)},[theme]);
 useEffect(()=>{const sync=e=>setTheme(e.detail);window.addEventListener('themechange',sync);return()=>window.removeEventListener('themechange',sync)},[]);
 useEffect(()=>{
  const closeMenu=e=>{if(e.key==='Escape'||window.innerWidth>850)setOpen(false)};
  window.addEventListener('keydown',closeMenu);
  window.addEventListener('resize',closeMenu);
  document.body.classList.toggle('menu-open',open);
  return()=>{window.removeEventListener('keydown',closeMenu);window.removeEventListener('resize',closeMenu);document.body.classList.remove('menu-open')};
 },[open]);
 return <nav className="navbar">
  <div className="space-taskbar"><div className="space-taskbar-track">{[...spaceItems,...spaceItems].map(([icon,text],i)=><span key={`${text}-${i}`}><b>{icon}</b>{text}</span>)}</div></div>
  <div className="nav-container">
   <Link className="nav-logo" to="/" onClick={()=>setOpen(false)}>meaghan<span>.</span>ramlakhan<small>_</small></Link>
   <button className={`menu-toggle ${open?'open':''}`} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="primary-navigation" onClick={()=>setOpen(value=>!value)}><span/><span/></button>
   <div id="primary-navigation" className={`nav-menu ${open?'open':''}`}>{links.map(([to,label],i)=><NavLink key={to} to={to} onClick={()=>setOpen(false)} className={({isActive})=>isActive?'active':''}><small>0{i+1}</small>{label}</NavLink>)}<button className="theme-toggle" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label={`Switch to ${theme==='dark'?'light':'dark'} mode`}><span>{theme==='dark'?'☼':'☾'}</span>{theme==='dark'?'LIGHT':'DARK'}</button></div>
  </div>
 </nav>
}
