const React = require('react');
const { Link } = require('react-router-dom');
const { setTitle } = require('./helpers');
const publications = require('../api/publications.json').publications;
const ResearchPage = () => {
  setTitle('Research');
  return <div className="research-page">
    <header className="page-intro"><p className="eyebrow">An earlier chapter</p><h1>Research</h1><p className="page-lead">Industrial IoT, activity recognition,<br className="desktop-break" /> and misinformation.</p></header>
    <div className="reading-intro"><p>My research has covered industrial IoT, visual programming, activity recognition, recommendation systems, and misinformation. Much of it asks how people can understand and adapt the systems they use.</p><p>I completed my PhD at Aarhus University, with a research visit to Carnegie Mellon, and later worked on misinformation research at STU and the Kempelen Institute.</p><Link className="text-link" to="/phd/videos">PhD prototypes & videos ↗</Link></div>
    <section className="publications-list"><div className="section-heading"><h2>Publications</h2><span className="quiet">2012–2021</span></div>{publications.map(pub => <div className="publication-entry" key={pub.id}><p className="entry-date">{pub.published}</p><div><h3><Link to={'/publications/' + pub.id}>{pub.title} <span aria-hidden="true">→</span></Link></h3><p className="quiet">{pub.venue}{pub.id === 'recsys21-youtube-audit' ? ' · Best Paper Award' : ''}</p><p className="publication-authors">{pub.authors}</p></div></div>)}</section>
  </div>;
};
module.exports = ResearchPage;
