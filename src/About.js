import React from 'react';
import './About.css';

const facts=[['🇹🇹','Born & raised','Trinidad and Tobago'],['🚀','Currently orbiting','Houston (Space City), TX'],['🔭', 'Certified nerd about', 'Space exploration, books, LEGO, video games, and superheroes'],['🍜', 'Always exploring', 'Food spots, coffee shops, museums, and hidden gems'],['🧩', 'What keeps me curious', 'Problems that require both logic and creativity']];
const stackGroups = [
  {
    icon: '⌨️',
    title: 'Languages',
    items: ['Python', 'Java', 'TypeScript', 'Go', 'SQL', 'C', 'R'],
  },
  {
    icon: '🖥️',
    title: 'Frontend',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
  icon: '⚙️',
  title: 'Backend & Systems',
  items: [
    'Django',
    'Node.js',
    'REST APIs',
    'Concurrency',
    'Server-Sent Events',
    'Data Pipelines',
  ],
},
{
  icon: '🗄️',
  title: 'Databases',
  items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'NoSQL'],
},
{
  icon: '☁️',
  title: 'Cloud, DevOps & Tools',
  items: [
    'AWS',
    'Google Cloud Platform',
    'Google Cloud Storage',
    'Docker',
    'Git',
    'Linux',
    'Jira',
  ],
},
];

export default function About() {
  return (
    <main className="about-container page-shell">
      <header className="about-intro page-header">
        <p className="eyebrow">ABOUT.ME // 01</p>

        <div className="about-title">
          <h1>
            Engineer, educator,
            <br />
            always learning.
          </h1>
        </div>

        <div className="intro-layout">
          <p className="intro-lead">
            I’m Meaghan Ramlakhan, an Associate Software Engineer at
            Omniscience and a recent Rice University computer science graduate.
            I enjoy building thoughtful, reliable technology that can make a
            meaningful difference in people’s lives.
          </p>

          <p>
            I work on the Data Ingestion Team, building software that transforms
            complex clinical data for downstream use. My broader experience
            spans full-stack development, data engineering, and machine
            learning. I grew up in Trinidad and Tobago and now call Houston
            home. Whether I’m designing a database, improving a data workflow,
            or helping a student work through an algorithm, I care about
            clarity, reliability, and building with people in mind.
          </p>
        </div>
      </header>

      <section className="about-section">
        <article className="about-card">
          <h2>01</h2>
          <h3>How I got here</h3>

          <p>
            At Rice, I earned a  <strong> Bachelor's of Science in Computer Science</strong> with
            minors in <strong>Data Science and Statistics</strong>. Along the way, I explored
            everything from concurrent systems and machine learning to
            full-stack product development.
          </p>

          <p>
            That curiosity led me to RiceApps, the CPRIT BIG-TCR Cancer & AI
            internship, NASA L’SPACE academy, and several years of teaching and
            mentoring computer science students as a teaching assistant.
          </p>
        </article>

        <article className="about-card">
          <h2>02</h2>
          <h3>How I work</h3>

          <p>
            I like asking the extra questions: Who will use this? What could
            break? How can we make it scalable? I’m happiest moving between
            architecture diagrams, code, data, and conversation.
          </p>

          <p>
            I’ve helped lead teams, supported more than 800
            students, and collaborated across research, education, and product
            environments.
          </p>
        </article>

        <article className="about-card">
          <h2>03</h2>
          <h3>What I build</h3>

          <p>
            <strong>Current focus:</strong> Reliable ingestion workflows that
            transform complex clinical data into consistent, usable formats.
          </p>

          <p>
            <strong>Languages:</strong> Python, Java, JavaScript/TypeScript, Go,
            SQL, C, and R.
          </p>

          <p>
            <strong>Toolkit:</strong> React, Node.js, TensorFlow, PyTorch,
            Pandas, NumPy, MySQL, MongoDB, AWS, Git, and Linux.
          </p>

          <p>
            My sweet spot is building software that combines thoughtful user
            experiences with interesting technical challenges.
          </p>
        </article>

        <article className="about-card">
          <h2>04</h2>
          <h3>What matters</h3>

          <p>
            I care about technology that is reliable, understandable, and
            genuinely useful. Mentorship matters just as much to me as I genuinely enjoy
            making intimidating technical ideas feel approachable.
          </p>

          <p>
            I value teams where curiosity is encouraged, people learn from one
            another, and thoughtful engineering serves a meaningful purpose.
          </p>
        </article>
      </section>

      <section className="tech-stack-section">
        <div className="stack-heading">
          <div>
            <p className="eyebrow">TECH_STACK.YAML // CAPABILITIES</p>
            <h2>Tools I build with.</h2>
          </div>

          <p>
            A practical toolkit shaped by full-stack products, concurrent
            systems, machine learning, clinical-data ingestion, and research.
          </p>
        </div>

        <div className="stack-groups">
          {stackGroups.map((group, index) => (
            <article className="stack-group" key={group.title}>
              <header>
                <span>{group.icon}</span>
                <small>0{index + 1}</small>
              </header>

              <h3>{group.title}</h3>

              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="fun-facts">
        <div className="facts-heading">
          <p className="eyebrow">OFFLINE MODE // FUN FACTS</p>
          <h2>Beyond the terminal.</h2>
        </div>

        <div className="facts-grid">
          {facts.map(([emoji, label, value]) => (
            <div className="fact" key={label}>
              <span>{emoji}</span>
              <small>{label}</small>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="side-quests">
        <div className="side-quest-copy">
          <p className="eyebrow">SIDE_QUESTS.LOG // CLASSIFIED-ISH</p>
          <h2>Curiosity encouraged.</h2>

          <p>
            I’ve always been fascinated by space and exploration, and living in Houston 
            has only deepened that interest. It inspired the mission-control details, 
            orbital graphics, coordinates, and a few hidden surprises scattered 
            throughout this site.

          </p>
        </div>

        <div className="quest-console">
          <header>
            <span>●</span>
            <span>●</span>
            <span>●</span>
            <b>easter_eggs.md</b>
          </header>

          <p>
            <strong>01</strong>
            <span>Try the homepage terminal.</span>
            <small>Some commands are undocumented.</small>
          </p>

          <p>
            <strong>02</strong>
            <span>Old-school gamers may recognize the sequence.</span>
            <small>↑ ↑ ↓ ↓ ← → ← → B A</small>
          </p>

          <p>
            <strong>03</strong>
            <span>Inspect the system.</span>
            <small>Developers always check the console.</small>
          </p>

          <a href="/#engineering-console">
            BEGIN SIDE QUEST <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}