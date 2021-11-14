const React = require('react'),

  Abstract = require('./Abstract'),
  Posts = require('./Posts'),

  setTitle = require('./helpers').setTitle,

  Link = require('react-router-dom').Link;


class EmailLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.showEmail = this.showEmail.bind(this);
  }

  showEmail(e) {
    e.preventDefault();
    this.setState({ open: true });
    return false;
  }

  render() {
    if (this.state.open) {
      return <a style={{fontSize: 'x-large'}} href='mailto:matus@tomlein.org'>matus@tomlein.org</a>;
    }

    return <Link to='#' style={{ 'textDecoration': 'underline', 'cursor': 'pointer' }} onClick={this.showEmail}>
      <i className="fas fa-envelope"></i>
    </Link>;
  }
}

const IndexPage = () => {
  setTitle();

  return <article>
    <figure>
      <img src="/images/banner.jpg" style={{ maxWidth: '400px' }} />
    </figure>

    <h1>
      Matúš Tomlein
    </h1>

    <p className="subtitle">
      Software engineer and researcher.
    </p>

    <h2>
      <a href='https://www.instagram.com/matustomlein/'>
        <i className="fab fa-instagram"></i>
      </a>
      {' '}
      <a href='https://github.com/matus-tomlein/'>
        <i className="fab fa-github"></i>
      </a>
      {' '}
      <a href='https://twitter.com/matus_tomlein'>
        <i className="fab fa-twitter"></i>
      </a>
      {' '}
      <a href='https://medium.com/@matus_tomlein'>
        <i className="fab fa-medium"></i>
      </a>
      {' '}
      <a href='https://www.linkedin.com/in/matúš-tomlein-06a3212a/'>
        <i className="fab fa-linkedin"></i>
      </a>
      {' '}
      <a href='https://www.researchgate.net/profile/Matus_Tomlein'>
        <i className="fab fa-researchgate"></i>
      </a>
      {' '}
      <EmailLink />
    </h2>

    <section>
      <Abstract />

      <p>
        <Link to='/cv/'>Read my CV</Link> or <Link to='/portfolio/'>check out my projects</Link> to learn more.
      </p>
    </section>

    <Posts />
  </article>;
};

module.exports = IndexPage;
