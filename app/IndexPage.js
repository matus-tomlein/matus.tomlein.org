const React = require('react'),

    Abstract = require('./Abstract'),

    Link = require('react-router-dom').Link;


class EmailLink extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.showEmail = this.showEmail.bind(this);
    }

    showEmail() {
        this.setState({ open: true });
    }

    render() {
        if (this.state.open) {
            return <a href='mailto:matus@tomlein.org'>matus@tomlein.org</a>;
        }

        return <span style={{ 'textDecoration': 'underline', 'cursor': 'pointer' }} onClick={this.showEmail}>
            E-mail
        </span>;
    }
}

const IndexPage = () => {
    return <article>
        <figure>
            <img src="/images/banner.jpg" />
        </figure>

        <h1>
            Matúš Tomlein
        </h1>
        <p className="subtitle">Software developer and researcher.</p>

        <section>
            <Abstract />

            <p>
                <Link to='/cv/'>Read my CV</Link> or <Link to='/portfolio/'>check out my projects.</Link>
            </p>
        </section>

        <section>
            <h2>Find Me On</h2>
            <ul>
                <li><a href='https://www.instagram.com/matustomlein/'>Instagram</a></li>
                <li><a href='https://github.com/matus-tomlein/'>GitHub</a></li>
                <li><a href='https://medium.com/@matus_tomlein'>Medium</a></li>
                <li><a href='https://twitter.com/matus_tomlein'>Twitter</a></li>
                <li><a href='https://www.linkedin.com/in/matúš-tomlein-06a3212a/'>LinkedIn</a></li>
                <li><a href='https://scholar.google.com/citations?user=r1VDrPMAAAAJ&hl=en&oi=ao'>Google Scholar</a></li>
                <li><EmailLink /></li>
            </ul>
        </section>
    </article>;
};

module.exports = IndexPage;
