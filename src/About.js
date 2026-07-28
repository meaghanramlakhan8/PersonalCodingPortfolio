import React from 'react';
import './About.css';

const facts=[['🇹🇹','Born & raised','Trinidad and Tobago'],['🚀','Currently orbiting','Houston, Space City'],['🔭','Certified nerd about','Space & exploration'],['🍜','Always seeking','The best food spots'],['🧩','Favorite problems','The complicated kind']];
const stackGroups=[
 {icon:'⌨️',title:'Languages',items:['Python','Java','JavaScript','TypeScript','Go','SQL','C','R']},
 {icon:'🖥️',title:'Frontend',items:['React','HTML5','CSS3','Responsive UI','Data Visualization']},
 {icon:'⚙️',title:'Backend & Systems',items:['Node.js','REST APIs','Concurrency','Networking','Server-Sent Events']},
 {icon:'🧠',title:'Data & ML',items:['TensorFlow','PyTorch','Pandas','NumPy','Scikit-learn','Matplotlib','ggplot2']},
 {icon:'🗄️',title:'Databases',items:['MySQL','MongoDB','DynamoDB','NoSQL Design','Data Pipelines']},
 {icon:'☁️',title:'Cloud & Tools',items:['AWS Lambda','API Gateway','S3','RDS','Git','Linux']},
];

export default function About(){return <main className="about-container page-shell">
 <header className="about-intro page-header">
  <p className="eyebrow">ABOUT.ME // 01</p>
  <div className="about-title"><h1>Engineer, educator,<br/>curious human.</h1><span>3.8 GPA<br/>RICE ’26</span></div>
  <div className="intro-layout">
   <p className="intro-lead">I’m Meaghan Ramlakhan, an Associate Software Engineer at Omniscience and recent Rice computer science graduate who likes turning complicated ideas into software people can actually use.</p>
   <p>I currently work on the Data Ingestion Team, building software around clinical data. More broadly, I work across full-stack development, systems, data, and machine learning. I grew up in Trinidad and Tobago and now call Houston home. Whether I’m designing a database, improving a data workflow, or helping a student untangle an algorithm, I care about clarity, reliability, and building with people in mind.</p>
  </div>
 </header>

 <section className="about-section">
  <article className="about-card"><h2>01</h2><h3>How I got here</h3><p>At Rice, I paired a <strong>B.S. in Computer Science</strong> with minors in Data Science and Statistics. Along the way, I explored everything from concurrent systems and machine learning to full-stack product development.</p><p>That curiosity led me to RiceApps, the CPRIT BIG-TCR Cancer & AI internship, NASA L’SPACE, and several years of teaching computer science.</p></article>
  <article className="about-card"><h2>02</h2><h3>How I work</h3><p>I like asking the extra question: Who uses this? What breaks? How can we make it clearer? I’m happiest moving between architecture diagrams, code, data, and conversation.</p><p>I’ve guided engineering teams, supported 800+ students, and collaborated across research, education, and product environments.</p></article>
  <article className="about-card"><h2>03</h2><h3>What I build</h3><p><strong>Current focus:</strong> Reliable ingestion workflows that transform complex clinical data for downstream use.</p><p><strong>Languages:</strong> Python, Java, JavaScript/TypeScript, Go, SQL, C, and R.</p><p><strong>Toolkit:</strong> React, Node.js, TensorFlow, PyTorch, Pandas, NumPy, MySQL, MongoDB, AWS, Git, and Linux.</p><p>My sweet spot is software that combines thoughtful interfaces with interesting technical depth.</p></article>
  <article className="about-card"><h2>04</h2><h3>What matters</h3><p>I care about technology that is reliable, understandable, and genuinely useful. Mentorship matters just as much—I enjoy making intimidating technical ideas feel approachable.</p><p>I’m looking for teams where curiosity is encouraged, people learn from one another, and good engineering serves a real purpose.</p></article>
 </section>

 <section className="tech-stack-section"><div className="stack-heading"><div><p className="eyebrow">TECH_STACK.YAML // CAPABILITIES</p><h2>Tools I build with.</h2></div><p>A practical toolkit shaped by full-stack products, concurrent systems, machine learning, clinical-data ingestion, and research.</p></div><div className="stack-groups">{stackGroups.map((group,index)=><article className="stack-group" key={group.title}><header><span>{group.icon}</span><small>0{index+1}</small></header><h3>{group.title}</h3><div>{group.items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div></section>

 <section className="fun-facts"><div className="facts-heading"><p className="eyebrow">OFFLINE MODE // FUN FACTS</p><h2>Beyond the terminal.</h2></div><div className="facts-grid">{facts.map(([emoji,label,value])=><div className="fact" key={label}><span>{emoji}</span><small>{label}</small><strong>{value}</strong></div>)}</div></section>

 <section className="side-quests">
  <div className="side-quest-copy"><p className="eyebrow">SIDE_QUESTS.LOG // CLASSIFIED-ISH</p><h2>Curiosity encouraged.</h2><p>I’m a longtime space and exploration nerd—living in Houston only made that stronger. That interest inspired the mission-control details, orbital graphics, coordinates, and a few hidden surprises throughout this site.</p></div>
  <div className="quest-console">
   <header><span>●</span><span>●</span><span>●</span><b>easter_eggs.md</b></header>
   <p><strong>01</strong><span>Try the homepage terminal.</span><small>Some commands are undocumented.</small></p>
   <p><strong>02</strong><span>Old-school gamers know the sequence.</span><small>↑ ↑ ↓ ↓ ← → ← → B A</small></p>
   <p><strong>03</strong><span>Inspect the system.</span><small>Developers always check the console.</small></p>
   <a href="/#engineering-console">BEGIN SIDE QUEST <span>↗</span></a>
  </div>
 </section>
 </main>}
