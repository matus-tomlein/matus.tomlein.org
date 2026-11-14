const React = require('react');
const { Link, NavLink } = require('react-router-dom');

const SiteLayout = ({ children }) => <div className="site-shell">
  <a className="skip-link" href="#main">Skip to content</a>
  <header className="site-header">
    <Link className="wordmark" to="/" aria-label="Matúš Tomlein, home">mt<span>.</span></Link>
    <nav aria-label="Main navigation">
      <NavLink to="/cv" activeClassName="is-active">About</NavLink>
      <NavLink to="/writing" activeClassName="is-active">Writing</NavLink>
      <NavLink to="/research" activeClassName="is-active">Research</NavLink>
    </nav>
  </header>
  <main id="main" tabIndex="-1">{children}</main>
  <footer className="site-footer">
    <div><Link to="/">Matúš Tomlein</Link><span>Software engineer · Bratislava, Slovakia</span></div>
    <div className="footer-links">
      <a href="mailto:matus@tomlein.org">Email ↗</a>
      <a href="https://github.com/matus-tomlein">GitHub ↗</a>
      <a href="https://www.linkedin.com/in/matustomlein/">LinkedIn ↗</a>
    </div>
  </footer>
</div>;
module.exports = SiteLayout;
