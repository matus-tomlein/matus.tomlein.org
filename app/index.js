const React = require('react');
const ReactDOM = require('react-dom');
const { BrowserRouter, Switch, Route, Link } = require('react-router-dom');
const SiteLayout = require('./SiteLayout');
const ScrollToTop = require('./ScrollToTop');
const IndexPage = require('./IndexPage');
const CVPage = require('./CVPage');
const PortfolioPage = require('./PortfolioPage');
const WritingPage = require('./WritingPage');
const ResearchPage = require('./ResearchPage');
const PhDVideosPage = require('./PhDVideosPage');
const BlogPage = require('./BlogPage');
const PublicationPage = require('./PublicationPage');
const ARModelingPaperPage = require('./ARModelingPaperPage');
const { setTitle } = require('./helpers');
const NoMatch = () => {
  setTitle('Page not found');
  return <div className="page-intro"><p className="eyebrow">404</p><h1>Nothing here.</h1><p>The link may be out of date. <Link to="/">Head back home</Link> or explore the <Link to="/writing">writing archive</Link>.</p></div>;
};
const LegacyPage = Component => props => <div className="legacy-page"><Component {...props} /></div>;
const Application = () => <BrowserRouter><ScrollToTop><SiteLayout><Switch>
  <Route exact path="/" component={IndexPage} />
  <Route exact path="/cv" component={CVPage} />
  <Route exact path="/portfolio" component={PortfolioPage} />
  <Route exact path="/writing" component={WritingPage} />
  <Route exact path="/research" component={ResearchPage} />
  <Route exact path="/phd/videos" component={LegacyPage(PhDVideosPage)} />
  <Route exact path="/phd" component={LegacyPage(PhDVideosPage)} />
  <Route exact path="/papers/ar_modeling" component={LegacyPage(ARModelingPaperPage)} />
  <Route exact path="/blogs/:blogId" component={LegacyPage(BlogPage)} />
  <Route exact path="/publications/:publicationId" component={LegacyPage(PublicationPage)} />
  <Route component={NoMatch} />
</Switch></SiteLayout></ScrollToTop></BrowserRouter>;
ReactDOM.render(<Application />, document.getElementById('app-container'));
