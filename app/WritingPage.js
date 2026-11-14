const React = require('react');
const { Link } = require('react-router-dom');
const { setTitle, formatDate } = require('./helpers');
const blogs = require('../api/blogs.json').blogs;
const WritingPage = () => {
  setTitle('Writing');
  return <div className="writing-page">
    <header className="page-intro"><p className="eyebrow">From the archive</p><h1>Writing & talks</h1><p className="page-lead">A few notes on things I’ve built<br className="desktop-break" /> and ideas I’ve explored.</p></header>
    <section className="section-grid archive-section"><div><h2>Earlier writing</h2><p className="quiet">I don’t write here regularly. These older posts and talks are kept for reference.</p></div><div className="section-body">{blogs.map(blog => <div className="archive-entry" key={blog.id}><span className="note-meta">{formatDate(blog.date)}{blog.context ? ' · ' + blog.context : ''}</span><h3><Link to={'/blogs/' + blog.id}>{blog.title} <span aria-hidden="true">→</span></Link></h3></div>)}</div></section>
  </div>;
};
module.exports = WritingPage;
