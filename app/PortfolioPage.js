const React = require('react'),

    PortfolioSection = require('./PortfolioSection'),

    Link = require('react-router-dom').Link;


const PortfolioPage = ({ circuit, database, openAction }) => {
    return <article>
        <h1>
            Portfolio
        </h1>
        <p class="subtitle"><Link to='/'>Matúš Tomlein</Link></p>

        <PortfolioSection />

    </article>;
};

module.exports = PortfolioPage;
