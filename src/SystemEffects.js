import React,{useEffect,useRef,useState} from 'react';
import {useLocation} from 'react-router-dom';
import './SystemEffects.css';

export default function SystemEffects(){
 const canvasRef=useRef(null);
 const firstRoute=useRef(true);
 const location=useLocation();
 const[progress,setProgress]=useState(0);
 const[transition,setTransition]=useState(null);

 useEffect(()=>{const scroll=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setProgress(max>0?window.scrollY/max*100:0)};scroll();window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('resize',scroll);return()=>{window.removeEventListener('scroll',scroll);window.removeEventListener('resize',scroll)}},[]);
 useEffect(()=>{if(firstRoute.current){firstRoute.current=false;return}setTransition(location.pathname);const timer=setTimeout(()=>setTransition(null),650);return()=>clearTimeout(timer)},[location.pathname]);
 useEffect(()=>{
  if(navigator.userAgent.toLowerCase().includes('jsdom'))return;
  if(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)return;
  const canvas=canvasRef.current,ctx=canvas.getContext('2d');let frame;
  const pointer={x:-1000,y:-1000};let nodes=[];
  const resize=()=>{const ratio=Math.min(window.devicePixelRatio||1,2);canvas.width=window.innerWidth*ratio;canvas.height=window.innerHeight*ratio;canvas.style.width=`${window.innerWidth}px`;canvas.style.height=`${window.innerHeight}px`;ctx.setTransform(ratio,0,0,ratio,0,0);nodes=Array.from({length:Math.min(75,Math.floor(window.innerWidth/20))},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12,r:Math.random()*1.2+.5}))};
  const move=e=>{pointer.x=e.clientX;pointer.y=e.clientY};const leave=()=>{pointer.x=-1000;pointer.y=-1000};
  const draw=()=>{ctx.clearRect(0,0,window.innerWidth,window.innerHeight);const light=document.documentElement.dataset.theme==='light';nodes.forEach((node,i)=>{node.x+=node.vx;node.y+=node.vy;if(node.x<0||node.x>window.innerWidth)node.vx*=-1;if(node.y<0||node.y>window.innerHeight)node.vy*=-1;const mouseDistance=Math.hypot(node.x-pointer.x,node.y-pointer.y);ctx.beginPath();ctx.arc(node.x,node.y,node.r+(mouseDistance<150?1:0),0,Math.PI*2);ctx.fillStyle=light?'rgba(0,90,160,.22)':'rgba(93,188,255,.26)';ctx.fill();for(let j=i+1;j<nodes.length;j++){const other=nodes[j],distance=Math.hypot(node.x-other.x,node.y-other.y);if(distance<105||(mouseDistance<145&&Math.hypot(other.x-pointer.x,other.y-pointer.y)<145)){ctx.beginPath();ctx.moveTo(node.x,node.y);ctx.lineTo(other.x,other.y);ctx.strokeStyle=light?`rgba(0,100,175,${Math.max(0,.12-distance/900)})`:`rgba(53,180,255,${Math.max(0,.13-distance/850)})`;ctx.lineWidth=.5;ctx.stroke()}}});frame=requestAnimationFrame(draw)};
  resize();draw();window.addEventListener('resize',resize);window.addEventListener('pointermove',move);document.documentElement.addEventListener('mouseleave',leave);return()=>{cancelAnimationFrame(frame);window.removeEventListener('resize',resize);window.removeEventListener('pointermove',move);document.documentElement.removeEventListener('mouseleave',leave)}
 },[]);
 return <><div className="tech-background" aria-hidden="true">
  <div className="tech-grid"/>
  <div className="tech-scan"/>
 </div><canvas ref={canvasRef} className="constellation-canvas" aria-hidden="true"/><div className="scroll-process"><span>SCROLL</span><i><b style={{height:`${progress}%`}}/></i><small>{String(Math.round(progress)).padStart(3,'0')}%</small></div>{transition&&<div className="route-transition"><div><span>meaghan@portfolio:~$</span> cd {transition==='/'?'~/home':`~${transition}`}<br/><small>compiling route... <b>done ✓</b></small></div></div>}</>
}
