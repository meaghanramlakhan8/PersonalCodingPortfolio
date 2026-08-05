import React,{useEffect,useMemo,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './CommandPalette.css';

export default function CommandPalette(){
 const[open,setOpen]=useState(false);
 const[query,setQuery]=useState('');
 const[selected,setSelected]=useState(0);
 const navigate=useNavigate();
 const actions=useMemo(()=>[
  {icon:'⌂',label:'Go home',hint:'Home',run:()=>navigate('/')},
  {icon:'◎',label:'About Meaghan',hint:'About',run:()=>navigate('/about')},
  {icon:'⌁',label:'View experience',hint:'Work',run:()=>navigate('/work')},
  {icon:'◇',label:'Browse projects',hint:'Projects',run:()=>navigate('/projects')},
  {icon:'▤',label:'Read publications',hint:'Research',run:()=>navigate('/publications')},
  {icon:'✉',label:'Start a conversation',hint:'Contact',run:()=>navigate('/contact')},
  {icon:'↓',label:'Download résumé',hint:'PDF',run:()=>{window.location.href='/MRResume.pdf'}},
  {icon:'⌘',label:'Open GitHub',hint:'External',run:()=>window.open('https://github.com/meaghanramlakhan8','_blank')},
  {icon:'◐',label:'Toggle color mode',hint:'Theme',run:()=>{const theme=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=theme;localStorage.setItem('portfolio-theme',theme);window.dispatchEvent(new CustomEvent('themechange',{detail:theme}))}},
 ],[navigate]);
 const results=actions.filter(action=>`${action.label} ${action.hint}`.toLowerCase().includes(query.toLowerCase()));
 useEffect(()=>{const key=e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();setOpen(value=>!value)}if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[]);
 useEffect(()=>setSelected(0),[query]);
 const choose=action=>{action.run();setOpen(false);setQuery('')};
 const keys=e=>{if(e.key==='ArrowDown'){e.preventDefault();setSelected(i=>(i+1)%results.length)}if(e.key==='ArrowUp'){e.preventDefault();setSelected(i=>(i-1+results.length)%results.length)}if(e.key==='Enter'&&results[selected])choose(results[selected])};
 return <><button className="command-trigger" onClick={()=>setOpen(true)} aria-label="Open command palette"><span>⌘</span><b>COMMAND</b><kbd>⌘ K</kbd></button>{open&&<div className="palette-backdrop" onMouseDown={()=>setOpen(false)}><section className="command-palette" role="dialog" aria-modal="true" aria-label="Command palette" onMouseDown={e=>e.stopPropagation()}><div className="palette-input"><span>›_</span><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={keys} placeholder="Type a command or search…"/><kbd>ESC</kbd></div><p className="palette-label">AVAILABLE COMMANDS // {results.length}</p><div className="palette-results">{results.map((action,index)=><button className={index===selected?'selected':''} onMouseEnter={()=>setSelected(index)} onClick={()=>choose(action)} key={action.label}><i>{action.icon}</i><span>{action.label}</span><small>{action.hint}</small><b>↵</b></button>)}{!results.length&&<div className="no-command">Command not found. Try “projects” or “theme”.</div>}</div><footer><span>↑↓ NAVIGATE</span><span>↵ SELECT</span><span>ESC CLOSE</span></footer></section></div>}</>
}
