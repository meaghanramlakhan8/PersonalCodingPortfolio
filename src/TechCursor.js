import React,{useEffect,useRef} from 'react';
import './TechCursor.css';

export default function TechCursor(){
 const dotRef=useRef(null);
 const ringRef=useRef(null);

 useEffect(()=>{
  if(typeof window.matchMedia!=='function')return undefined;
  const finePointer=window.matchMedia('(pointer: fine)');
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(!finePointer.matches||reducedMotion.matches)return undefined;

  const dot=dotRef.current;
  const ring=ringRef.current;
  let mouseX=-100,mouseY=-100,ringX=-100,ringY=-100,frame;
  const render=()=>{
   ringX+=(mouseX-ringX)*.18;
   ringY+=(mouseY-ringY)*.18;
   dot.style.transform=`translate3d(${mouseX}px,${mouseY}px,0)`;
   ring.style.transform=`translate3d(${ringX}px,${ringY}px,0)`;
   frame=requestAnimationFrame(render);
  };
  const move=event=>{
   mouseX=event.clientX;
   mouseY=event.clientY;
   document.documentElement.classList.add('cursor-visible');
  };
  const hover=event=>{
   const interactive=event.target.closest('a,button,input,textarea,[role="button"]');
   ring.classList.toggle('cursor-lock',Boolean(interactive));
   dot.classList.toggle('cursor-lock',Boolean(interactive));
  };
  const down=()=>ring.classList.add('cursor-click');
  const up=()=>ring.classList.remove('cursor-click');
  const leave=()=>document.documentElement.classList.remove('cursor-visible');

  render();
  window.addEventListener('pointermove',move);
  document.addEventListener('pointerover',hover);
  window.addEventListener('pointerdown',down);
  window.addEventListener('pointerup',up);
  document.documentElement.addEventListener('mouseleave',leave);
  return()=>{
   cancelAnimationFrame(frame);
   document.documentElement.classList.remove('cursor-visible');
   window.removeEventListener('pointermove',move);
   document.removeEventListener('pointerover',hover);
   window.removeEventListener('pointerdown',down);
   window.removeEventListener('pointerup',up);
   document.documentElement.removeEventListener('mouseleave',leave);
  };
 },[]);

 return <div className="tech-cursor" aria-hidden="true"><i ref={ringRef}/><b ref={dotRef}>🚀</b></div>;
}
