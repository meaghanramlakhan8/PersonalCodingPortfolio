import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

const stack=['PYTHON','JAVA','TYPESCRIPT','GO','REACT','NODE.JS','TENSORFLOW','MYSQL','AWS','C','R'];

export default function Home(){
 const[command,setCommand]=useState('');
 const[history,setHistory]=useState([{command:'help',output:'Commands: who_am_i · skills · projects · resume · contact · clear · sudo hire me · (some commands are undocumented)'}]);
 const[historyIndex,setHistoryIndex]=useState(-1);
 const[activeTerminalTab,setActiveTerminalTab]=useState('terminal');
 const[scriptOutput,setScriptOutput]=useState('');
 const[selectedNode,setSelectedNode]=useState('BACKEND');
 const[identityMode,setIdentityMode]=useState('engineer');
 const nodes={SOURCES:'Python · APIs · event-driven ingestion',INGESTION:'Python · validation and transformation',STORAGE:'PostgreSQL · Google Cloud Storage',BACKEND:'Django · Python · REST APIs',FRONTEND:'React · TypeScript · responsive interfaces',ML:'TensorFlow · PyTorch · model inference'};
 const nodeLabels={SOURCES:'SOURCE DATA',INGESTION:'DATA PIPELINE',STORAGE:'DATA LAYER',BACKEND:'BACKEND SERVICE',FRONTEND:'WEB APPLICATION',ML:'ML SERVICE'};
const identities = {
  engineer:
    'Associate Software Engineer at Omniscience, building reliable data-ingestion workflows for complex clinical data.',

  graduate:
    'Recent Rice University computer science graduate with minors in Data Science and Statistics and a 3.9 GPA.',

  human:
    'Originally from Trinidad and Tobago, now based in Houston, with a love for mentoring, exploring great food spots, and solving challenging problems.',
};
 const runCommand=e=>{e.preventDefault();const typedCommand=command.trim().toLowerCase();if(!typedCommand)return;const cmd=typedCommand==='whoami'||typedCommand==='whoami()'?'who_am_i':typedCommand;const outputs={help:'Commands: who_am_i · skills · projects · resume · contact · ls · clear · sudo hire me · help --all',who_am_i:'Meaghan Ramlakhan — software engineer, Rice CS graduate, always ready to learn.',skills:'Python  Java  TypeScript  Go  React  Node.js  TensorFlow  SQL  AWS',projects:'7 projects indexed. Use ⌘K and choose “Browse projects” →',resume:'Opening MRResume.pdf in a new tab… ✓',contact:'Channel open: meaghan.c.ramlakhan@rice.edu',ls:'about.md  experience/  projects/  MRResume.pdf  contact.txt','sudo hire me':'Permission granted. Excellent decision. 🚀','help --all':'CLASSIFIED: launch · coffee · trinidad · rice · meaning-of-life','launch':'T–3… 2… 1… Liftoff from Houston, Space City! 🚀','coffee':'Compiling caffeine… ██████████ 100%  ☕','trinidad':'Home coordinates acquired. Trinidad & Tobago mode activated. 🇹🇹','rice':'Owl protocol online. Hoot hoot! 🦉','meaning-of-life':'42. Obviously.'};const secretCommands=['launch','coffee','trinidad','rice','meaning-of-life','sudo hire me'];if(cmd==='resume')window.open('/MRResume.pdf','_blank','noopener,noreferrer');if(cmd==='clear'){setHistory([])}else{setHistory(items=>[...items,{command:cmd,output:outputs[cmd]||`zsh: command not found: ${cmd}. Try "help".`}])}setCommand('');setHistoryIndex(-1);if(secretCommands.includes(cmd))window.setTimeout(()=>window.dispatchEvent(new CustomEvent('mcr:easter-egg',{detail:{command:cmd}})),120)};
 const terminalKeys=e=>{const commands=['help','who_am_i','skills','projects','resume','contact','ls','clear','sudo hire me','help --all','launch','coffee','trinidad','rice','meaning-of-life'];const past=history.map(item=>item.command);if(e.key==='Tab'){e.preventDefault();const match=commands.find(item=>item.startsWith(command.toLowerCase()));if(match)setCommand(match)}if(e.key==='ArrowUp'&&past.length){e.preventDefault();const next=Math.min(historyIndex+1,past.length-1);setHistoryIndex(next);setCommand(past[past.length-1-next])}if(e.key==='ArrowDown'){e.preventDefault();const next=historyIndex-1;setHistoryIndex(next);setCommand(next<0?'':past[past.length-1-next])}};
 const terminalTabs=[['terminal','terminal'],['readme','README.md'],['fun','fun_stuff.sh']];
 const runFunScript=()=>{setScriptOutput('Scanning portfolio… 7 projects found. Curiosity level: 100%. Status: ready to build something great 🚀');window.setTimeout(()=>window.dispatchEvent(new CustomEvent('mcr:easter-egg',{detail:{command:'fun_stuff.sh'}})),120)};
 return <main className="home page-shell">
 <section className="hero">
  <div className="hero-copy">
   <p className="eyebrow"><span className="status-dot"/> HELLO, WORLD — I’M</p>
   <h1>Meaghan<br/><em>Ramlakhan.</em></h1>
   <div className="whoami"><div className="whoami-prompt"><span>$ who_am_i --{identityMode}</span><i/></div><p key={identityMode}>{identities[identityMode]}</p><div className="identity-switcher" role="group" aria-label="Choose identity view">{Object.keys(identities).map(mode=><button className={identityMode===mode?'active':''} onClick={()=>setIdentityMode(mode)} key={mode}><span>{identityMode===mode?'●':'○'}</span>{mode}</button>)}</div></div>
   <div className="hero-actions"><Link className="button button-primary" to="/about">More about me <span>↗</span></Link><a className="button" href="/MRResume.pdf" download>Download résumé <span>↓</span></a></div>
   <div className="signal-grid"><div className="signal"><strong>Omniscience</strong><span>Associate Software Engineer</span></div><div className="signal"><strong>Data Ingestion</strong><span>Current engineering team</span></div><div className="signal"><strong>Clinical Data</strong><span>Current domain</span></div></div>
  </div>
  <aside className="portrait-side">
   <div className="portrait-orbit"><i/><i/><span>01</span></div>
   <div className="portrait-frame"><img src="/photo.webp" alt="Meaghan Ramlakhan" width="801" height="1200" decoding="async" fetchpriority="high"/><div className="portrait-scan"/></div>
   <div className="portrait-caption"><span>MEAGHAN.RAMLAKHAN</span><b>SOFTWARE ENGINEER</b><small>RECENT RICE GRADUATE</small></div>
   <span className="portrait-coordinate top">29.7604° N</span><span className="portrait-coordinate bottom">095.3698° W</span>
  </aside>
  <svg className="houston-skyline" viewBox="0 0 1400 180" preserveAspectRatio="none" aria-hidden="true"><path d="M0 166H95V147H132V160H190V126H218V160H290V143H321V160H380V112H399V160H454V135H478V160H536V72H555V44H574V160H617V129H639V160H699V92H715V160H761V122H784V160H847V105H866V160H925V138H949V160H1008V62H1021V26H1035V62H1053V160H1092V118H1117V160H1178V86H1199V160H1265V130H1290V160H1400"/><path className="skyline-ground" d="M0 166H1400"/><circle cx="1028" cy="17" r="4"/><text x="1050" y="22">HOUSTON // SPACE CITY</text></svg>
 </section>

 <section className="stack-strip"><span>TECH STACK</span><div className="stack-window"><div className="stack-track">{[...stack,...stack].map((item,i)=><React.Fragment key={`${item}-${i}`}><strong>{item}</strong><b>✦</b></React.Fragment>)}</div></div></section>

 <section className="tech-lab" id="engineering-console">
  <div className="deck-heading"><div><p className="eyebrow">ENGINEERING CONSOLE // LIVE</p><h2>A peek under the hood.</h2></div><span className="lab-status"><i/> ALL SYSTEMS NOMINAL</span></div>
  <div className="lab-grid">
   <div className="architecture clean-architecture">
    <div className="architecture-heading"><p className="panel-label">REPRESENTATIVE SYSTEM ARCHITECTURE // CLICK A NODE</p><small>EXAMPLE FULL-STACK DATA FLOW</small></div>
    <div className="architecture-flow">
     <button onClick={()=>setSelectedNode('SOURCES')} className={`flow-node source-node ${selectedNode==='SOURCES'?'selected':''}`}><small>01 / SOURCES</small><strong>SOURCE DATA</strong><span>Files · APIs · Events</span></button>
     <span className="flow-arrow horizontal source-flow"><i/>RAW INPUT</span>
     <button onClick={()=>setSelectedNode('INGESTION')} className={`flow-node ingestion-node ${selectedNode==='INGESTION'?'selected':''}`}><small>02 / PROCESSING</small><strong>DATA PIPELINE</strong><span>Validate · Normalize · Transform</span></button>
     <span className="flow-arrow horizontal storage-flow"><i/>PERSIST</span>
     <button onClick={()=>setSelectedNode('STORAGE')} className={`flow-node storage-node ${selectedNode==='STORAGE'?'selected':''}`}><small>03 / STORAGE</small><strong>DATA LAYER</strong><span>Relational DB · Object Storage</span></button>
     <span className="flow-arrow vertical storage-api-flow"><i/>READ / WRITE</span>
     <button onClick={()=>setSelectedNode('BACKEND')} className={`flow-node backend-node ${selectedNode==='BACKEND'?'selected':''}`}><small>04 / SERVER</small><strong>BACKEND SERVICE</strong><span>Application Logic · REST APIs</span></button>
     <span className="flow-arrow horizontal client-flow"><i/>API REQUEST / RESPONSE</span>
     <button onClick={()=>setSelectedNode('FRONTEND')} className={`flow-node frontend-node ${selectedNode==='FRONTEND'?'selected':''}`}><small>05 / CLIENT</small><strong>WEB APPLICATION</strong><span>Responsive UI · TypeScript</span></button>
     <span className="flow-arrow vertical model-flow"><i/>INFERENCE REQUEST / RESPONSE</span>
     <button onClick={()=>setSelectedNode('ML')} className={`flow-node ml-node ${selectedNode==='ML'?'selected':''}`}><small>OPTIONAL SERVICE</small><strong>ML SERVICE</strong><span>Model Serving · Inference</span></button>
    </div>
    <div className="flow-inspector"><small>SELECTED_NODE</small><strong>{nodeLabels[selectedNode]}</strong><span>{nodes[selectedNode]}</span></div>
   </div>
   <div className="mini-terminal interactive-terminal"><div className="terminal-title"><div><i/><i/><i/></div><span>meaghan@portfolio: ~</span><b>INTERACTIVE</b></div><div className="terminal-tabs" role="tablist" aria-label="Terminal files">{terminalTabs.map(([id,label])=><button type="button" role="tab" id={`terminal-tab-${id}`} aria-controls={`terminal-panel-${id}`} aria-selected={activeTerminalTab===id} className={activeTerminalTab===id?'active':''} onClick={()=>setActiveTerminalTab(id)} key={id}>{label}</button>)}</div>
   <div className="terminal-screen" role="tabpanel" id={`terminal-panel-${activeTerminalTab}`} aria-labelledby={`terminal-tab-${activeTerminalTab}`}>
    {activeTerminalTab==='terminal'&&<><span className="terminal-comment">{'// ↑↓ history · TAB autocomplete · “help” commands 🤓'}</span>{history.map((item,index)=><div className="history-line" key={`${item.command}-${index}`}><p><b>➜</b> <em>~</em> {item.command}</p><span>{item.output}</span></div>)}<form onSubmit={runCommand}><b>➜</b><em>~</em><input autoComplete="off" spellCheck="false" value={command} onKeyDown={terminalKeys} onChange={e=>setCommand(e.target.value)} aria-label="Terminal command" placeholder="type a command…"/><i className="cursor"/></form></>}
    {activeTerminalTab==='readme'&&<article className="terminal-document"><span className="terminal-comment"># README.md</span><h3>Welcome to my engineering console.</h3><p>This little terminal is a quick way to explore my work, skills, and background.</p><p><b>Try:</b> <code>help</code>, <code>who_am_i</code>, <code>projects</code>, or <code>resume</code>.</p><p>Use ↑ and ↓ for command history and Tab to autocomplete.</p></article>}
    {activeTerminalTab==='fun'&&<div className="terminal-document fun-script"><span className="terminal-comment">#!/bin/zsh</span><p><b>$</b> ./fun_stuff.sh</p><p>Runs a highly scientific portfolio diagnostic.</p><button type="button" onClick={runFunScript}>RUN SCRIPT <span>▶</span></button>{scriptOutput&&<p className="script-output" aria-live="polite">{scriptOutput}</p>}</div>}
   </div></div>
  </div>
 </section>

 <section className="talk-dock">
  <div>
  <p className="eyebrow">
    <span className="status-dot" />
    ALWAYS LEARNING, ALWAYS BUILDING
  </p>

  <h2>Say hello.</h2>

  <p>
    I’m always glad to connect over software, data, teaching, or a good Houston
    activity recommendation.
  </p>
</div>
  <Link to="/contact">LET’S TALK <span>↗</span></Link>
  <div className="dock-orbit" aria-hidden="true"><i/><i/><i/></div>
 </section>
 </main>}
