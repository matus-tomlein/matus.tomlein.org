const React = require('react'),

  PortfolioSection = require('./PortfolioSection'),
  setTitle = require('./helpers').setTitle,

  Link = require('react-router-dom').Link;


const PortfolioPage = () => {
  setTitle('Portfolio');

  return <article>
    <h1>
      Portfolio
    </h1>
    <p className="subtitle"><Link to='/'>Matúš Tomlein</Link></p>

    <PortfolioSection />

  </article>;
};

module.exports = PortfolioPage;
