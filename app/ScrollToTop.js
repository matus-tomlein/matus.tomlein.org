const React = require('react'),
    withRouter = require('react-router-dom').withRouter;

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (!this.props.location.hash) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }
  }

  render() {
    return this.props.children;
  }
}

module.exports = withRouter(ScrollToTop);
