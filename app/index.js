const React = require('react'),
    ReactDOM = require('react-dom'),
    PropTypes = require('prop-types'),

    IndexPage = require('./IndexPage'),
    PhdVideosPage = require('./PhDVideosPage'),
    CVPage = require('./CVPage'),

    BrowserRouter = require('react-router-dom').BrowserRouter,
    Switch = require('react-router-dom').Switch,
    Route = require('react-router-dom').Route,

    $ = require('jquery');

const NoMatch = () => {
    return <div>
        <h1>
            404 Page not found
		</h1>
    </div>;
};

const Application = () => {
    return <BrowserRouter>
        <Switch>
            <Route path='/phd/videos' component={PhdVideosPage} />
            <Route path='/phd' component={PhdVideosPage} />
            <Route path='/cv' component={CVPage} />
            <Route path='/' component={IndexPage} />

            <Route path='*' component={NoMatch} />
        </Switch>
    </BrowserRouter>;
};

ReactDOM.render(<Application />, document.getElementById('app-container'));
