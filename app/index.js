const React = require('react'),
    ReactDOM = require('react-dom'),

    IndexPage = require('./IndexPage'),
    PhdVideosPage = require('./PhDVideosPage'),
    CVPage = require('./CVPage'),
    PortfolioPage = require('./PortfolioPage'),
    BlogPage = require('./BlogPage'),
    PublicationPage = require('./PublicationPage'),
    ARModelingPaperPage = require('./ARModelingPaperPage'),
    ScrollToTop = require('./ScrollToTop'),

    BrowserRouter = require('react-router-dom').BrowserRouter,
    Switch = require('react-router-dom').Switch,
    Route = require('react-router-dom').Route;

const NoMatch = () => {
  return <div>
    <h1>
      404 Page not found
    </h1>
  </div>;
};

const Application = () => {
  return <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route path='/phd/videos' component={PhdVideosPage} />
        <Route path='/phd' component={PhdVideosPage} />
        <Route path='/cv' component={CVPage} />
        <Route path='/portfolio' component={PortfolioPage} />
        <Route path='/papers/ar_modeling' component={ARModelingPaperPage} />
        <Route path='/blogs/:blogId' component={BlogPage} />
        <Route path='/publications/:publicationId' component={PublicationPage} />
        <Route path='/' component={IndexPage} />

        <Route path='*' component={NoMatch} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>;
};

ReactDOM.render(<Application />, document.getElementById('app-container'));
