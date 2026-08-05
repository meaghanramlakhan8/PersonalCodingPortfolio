import React from 'react';
import './Publications.css';

const publications = [
  {
    title: 'BRAINCELL-AID: An Agentic AI Created Brain Cell Type Resource for Community Annotation',
    authors: 'Rongbin Li, Wenbo Chen, Zhao Li, Rodrigo Munoz-Castaneda, Jinbo Li, Neha S. Maurya, Arnav Solanki, Huan He, Hanwen Xing, Meaghan Ramlakhan, Zachary Wise, Nelson Johansen, Zhuhao Wu, Hua Xu, Michael Hawrylycz, and W. Jim Zheng',
    year: '2026',
    status: 'Published',
    venue: 'arXiv:2510.17064',
    description: 'A multi-agent AI system that combines free-text descriptions, ontology labels, and retrieval-augmented generation to improve brain cell gene-set annotation and support community-driven research.',
    link: 'https://arxiv.org/abs/2510.17064',
    linkLabel: 'Read on arXiv',
    tags: ['Agentic AI', 'RAG', 'Single-cell RNA', 'Ontologies'],
  },
  {
    title: 'A Structural Antibody Benchmark of AlphaFold3 reveals Hallucinated Epitopes and a Bias for Orderness',
    authors: 'Arnav Solanki, Neha Shree Maurya, Meaghan Ramlakhan, Rongbin Li, Wenbo Chen, Zhuhao Wu, and Wenjin Jim Zheng',
    year: '2026',
    status: 'Under peer review',
    venue: 'bioRxiv preprint',
    description: 'A large-scale benchmark of AlphaFold3 for antibody–antigen binding prediction, characterizing its recall, false-positive behavior, structural biases, and potential use in computational drug discovery.',
    link: 'https://www.biorxiv.org/content/10.64898/2026.07.30.741792v1',
    linkLabel: 'Read on bioRxiv',
    tags: ['AlphaFold3', 'Antibodies', 'Benchmarking', 'Drug discovery'],
  },
  {
    title: 'Forced Vital Capacity Study',
    authors: 'Meaghan Ramlakhan and collaborators',
    year: '2026',
    status: 'In progress',
    venue: 'Work in progress',
    description: 'An ongoing bioinformatics study investigating forced vital capacity through research data analysis and computational methods.',
    tags: ['Bioinformatics', 'Clinical data', 'Data analysis'],
  },
];

const statusClass = status => status.toLowerCase().replaceAll(' ', '-');

export default function Publications() {
  return <main className="publications-container page-shell">
    <header className="publications-header page-header">
      <div className="publication-hero-copy">
        <p className="eyebrow">RESEARCH.LOG // {String(publications.length).padStart(2, '0')} ENTRIES</p>
        <h1>Research<br/>in motion.</h1>
        <p>Published work and manuscripts exploring questions across computing, data, and technology.</p>
        <div className="research-stats" aria-label="Research summary">
          <div><strong>03</strong><span>Total works</span></div>
          <div><strong>02</strong><span>Public preprints</span></div>
          <div><strong>01</strong><span>In development</span></div>
        </div>
      </div>
      <div className="research-orbit" aria-hidden="true">
        <div className="research-stars">
          <svg viewBox="0 0 500 410" role="presentation">
            <path d="M92 96L222 172L401 82L350 285L135 326L222 172L350 285" />
          </svg>
          {Array.from({length: 18}, (_, index) => <i className={`field-star star-${index + 1}`} key={index}/>)}
          <span className="feature-star feature-one"><b>✦</b><small>01 / PUBLISHED</small></span>
          <span className="feature-star feature-two"><b>✦</b><small>02 / IN REVIEW</small></span>
          <span className="feature-star feature-three"><b>✦</b><small>03 / IN PROGRESS</small></span>
          <span className="shooting-star" />
        </div>
        <div className="orbit-readout"><span>RESEARCH SIGNAL</span><b>ACTIVE</b><small>03 OBJECTS TRACKED</small></div>
      </div>
    </header>

    <div className="research-console"><span><i/> PUBLICATION SYSTEM ONLINE</span><span>FIELD // COMPUTATIONAL BIOMEDICINE</span><span>UPDATED // 2026</span></div>

    <section className="publication-list" aria-label="Publications and manuscripts">
      {publications.map((publication, index) => <article className="publication-card" key={publication.title} style={{'--card-index': `'0${index + 1}'`}}>
        <div className="publication-index">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <i aria-hidden="true" />
        </div>
        <div className="publication-content">
          <div className="publication-meta">
            <span className={`publication-status ${statusClass(publication.status)}`}><i />{publication.status}</span>
            <span>{publication.year}</span>
            <span>{publication.venue}</span>
          </div>
          <h2>{publication.title}</h2>
          <p className="publication-authors">{publication.authors}</p>
          <p className="publication-description">{publication.description}</p>
          <div className="publication-tags">{publication.tags.map(tag => <span key={tag}>#{tag}</span>)}</div>
          {publication.link && <a href={publication.link} target="_blank" rel="noreferrer">{publication.linkLabel}<span>↗</span></a>}
        </div>
      </article>)}
    </section>
  </main>;
}
