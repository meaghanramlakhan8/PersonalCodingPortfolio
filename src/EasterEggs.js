import React, {useEffect, useState} from 'react';
import './EasterEggs.css';

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
const EGGS = {
  konami:{level:'ACCESS_LEVEL // COSMIC',icon:'🎮',title:'Sequence accepted.',message:'You found the classic developer handshake. Curiosity is an engineering skill.',command:'konami.execute --player=one',output:'CHEAT MODE ENABLED // +30 NERD CRED ✓',achievement:'01 / KEYBOARD ASTRONAUT'},
  launch:{level:'MISSION_CONTROL // HOUSTON',icon:'🚀',title:'We have liftoff.',message:'Launch clearance granted from Houston, Space City. Your curiosity is officially in orbit.',command:'launch --origin=houston --destination=unknown',output:'T–0 // TRAJECTORY NOMINAL // LIFTOFF ✓',achievement:'02 / SPACE CITY PILOT'},
  coffee:{level:'RUNTIME // CAFFEINATED',icon:'☕',title:'Java initialized.',message:'Emergency developer fuel compiled successfully. Side effects may include shipping excellent code.',command:'brew coffee --strength=max',output:'CAFFEINE BUFFER ██████████ 100% ✓',achievement:'03 / PRODUCTION BREWER'},
  trinidad:{level:'ORIGIN_NODE // CARIBBEAN',icon:'🇹🇹',title:'Island mode online.',message:'A little Trinidad and Tobago energy has entered the system—from the Caribbean to Space City.',command:'locate --home --verbose',output:'TRINIDAD & TOBAGO // SIGNAL STRONG ✓',achievement:'04 / ISLAND PACKET'},
  rice:{level:'CAMPUS_PROTOCOL // RICE',icon:'🦉',title:'Owl protocol active.',message:'Rice University credentials verified. The system is now operating at maximum hoot capacity.',command:'sudo awaken-owl',output:'HOOT HOOT // RICE CS MODE ENABLED ✓',achievement:'05 / CODE OWL'},
  'meaning-of-life':{level:'DEEP_THOUGHT // COMPLETE',icon:'42',title:'Answer computed.',message:'After 7.5 million years of processing, the system has reached a completely unsurprising result.',command:'universe.query --everything',output:'RESULT: 42 // QUESTION STILL PENDING',achievement:'06 / GALACTIC DEBUGGER'},
  'sudo hire me':{level:'PERMISSION // GRANTED',icon:'💼',title:'Excellent decision.',message:'Root access approved. Collaborative software-engineering mode is ready to deploy.',command:'sudo hire meaghan --immediately',output:'CANDIDATE STATUS // ABSOLUTELY ✓',achievement:'07 / TALENT ACQUISITION HACKER'}
};

export default function EasterEggs(){
  const [unlocked,setUnlocked]=useState(null);

  useEffect(()=>{
    let position=0;
    const listen=event=>{
      if(event.key.toLowerCase()===KONAMI[position].toLowerCase()){
        position+=1;
        if(position===KONAMI.length){
          setUnlocked('konami');
          position=0;
        }
      }else{
        position=event.key===KONAMI[0]?1:0;
      }
    };

    console.log(
      '%c🚀 MEAGHAN.OS',
      'color:#35d9ff;font-size:22px;font-weight:bold;background:#030816;padding:8px 12px;'
    );
    console.log('%cYou found the developer console. Hint: ↑ ↑ ↓ ↓ ← → ← → B A', 'color:#2df2b0;font-size:13px;');
    console.log('%cThe homepage terminal may know more commands than it admits…', 'color:#8ca5bb;font-size:12px;');
    const reveal=event=>setUnlocked(EGGS[event.detail?.command]?event.detail.command:'konami');
    window.addEventListener('keydown',listen);
    window.addEventListener('mcr:easter-egg',reveal);
    return()=>{
      window.removeEventListener('keydown',listen);
      window.removeEventListener('mcr:easter-egg',reveal);
    };
  },[]);

  useEffect(()=>{
    if(!unlocked)return undefined;
    const close=event=>{if(event.key==='Escape')setUnlocked(null);};
    const previousOverflow=document.body.style.overflow;
    document.body.style.overflow='hidden';
    window.addEventListener('keydown',close);
    return()=>{
      document.body.style.overflow=previousOverflow;
      window.removeEventListener('keydown',close);
    };
  },[unlocked]);

  if(!unlocked)return null;
  const egg=EGGS[unlocked];
  return <div className={`mission-unlocked egg-${unlocked.replaceAll(' ','-')}`} role="dialog" aria-modal="true" aria-label={`${egg.title} easter egg`} onMouseDown={()=>setUnlocked(null)}>
    <div className="mission-stars" aria-hidden="true">✦　·　✧　·　✦</div>
    <section onMouseDown={event=>event.stopPropagation()}>
      <button onClick={()=>setUnlocked(null)} aria-label="Close easter egg">×</button>
      <span>{egg.level}</span>
      <div className="mission-badge" aria-label="MCR logo"><span>&lt;MCR/</span><b>&gt;</b><i>{egg.icon}</i></div>
      <h2>{egg.title}</h2>
      <p>{egg.message}</p>
      <code>meaghan@space-city:~$ {egg.command}<br/><b>{egg.output}</b></code>
      <small>ACHIEVEMENT {egg.achievement}</small>
    </section>
  </div>;
}
