const React = require('react'),

	Loading = require('./Loading'),

	httpRequest = require('../helpers').httpRequest;


class FetchData extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.reload = this.reload.bind(this);
	}

	componentDidMount() {
		this.reload();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.api != this.props.api) {
			this.reload();
		}
	}

	reload() {
		httpRequest('GET', this.props.api, {
			crossDomain: this.props.crossDomain,
      contentType: this.props.contentType || 'application/json'
		}, (res) => {
      if (res.data && typeof res.data === 'string') {
        this.setState({ data: { content: res.data } });
      } else {
        this.setState(res);
      }
		});
	}

	render() {
		if (this.state.htmlError) {
			return <div dangerouslySetInnerHTML={{__html: this.state.htmlError}} />;
    } else if (this.state.error) {
      return <div>{this.state.error}</div>;
    }

		if (this.state.data) {
			const Component = this.props.component;
			return <Component {...this.props.pass} {...this.state.data} reload={this.reload} />;
		} else {
			return <Loading />;
		}
	}
}

module.exports = FetchData;
