const React = require('react'),
  FetchData = require('./components/FetchData'),
  Link = require('react-router-dom').Link,

  setTitle = require('./helpers').setTitle,
  parse = require('html-react-parser'),
  showdown  = require('showdown'),
  converter = new showdown.Converter({ metadata: true });


const Publication = ({ content }) => {
  let html = converter.makeHtml(content);
  let metadata = converter.getMetadata();

  let authorsBeforeMe = metadata.authors.split('Matúš Tomlein')[0];
  let authorsAfterMe = metadata.authors.split('Matúš Tomlein')[1];

  setTitle(metadata.title);

  return <article>
    <h1>
      <a href={metadata.link}>
        {metadata.title}
      </a>
    </h1>

    <p className="subtitle">
      {authorsBeforeMe}
      <Link to='/'>Matúš Tomlein</Link>
      {authorsAfterMe}
      <label htmlFor='mn-meta' className="margin-toggle">⊕</label>
    </p>

    <section>
      <p>
        <input type="checkbox" id='mn-meta' className="margin-toggle" />
        <span className="marginnote">
          {metadata.published}<br />
          <i>Venue:</i> {metadata.venue}
        </span>
      </p>

      {parse(html)}
    </section>
  </article>;
};

const PublicationPage = ({ match }) => {
  return <FetchData api={'/api/publications/' + match.params.publicationId + '.md'}
  component={Publication} contentType='text/markdown' />;
};

module.exports = PublicationPage;
