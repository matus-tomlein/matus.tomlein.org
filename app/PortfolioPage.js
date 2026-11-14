const React = require('react');
const PortfolioSection = require('./PortfolioSection');
const { setTitle } = require('./helpers');
const PortfolioPage = () => {
  setTitle('Projects');
  return <div className="portfolio-page"><header className="page-intro"><p className="eyebrow">Things I’ve made</p><h1>Selected projects</h1><p className="page-lead">Personal tools, open-source software,<br className="desktop-break" /> and a few experiments from research.</p></header><PortfolioSection /></div>;
};
module.exports = PortfolioPage;
