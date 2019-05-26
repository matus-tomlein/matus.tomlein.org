const React = require('react'),
  FetchData = require('./components/FetchData'),
  Link = require('react-router-dom').Link,

  setTitle = require('./helpers').setTitle,
  parse = require('html-react-parser'),
  showdown  = require('showdown'),
  formatDate = require('./helpers').formatDate,
  converter = new showdown.Converter({ metadata: true });


const Blog = ({ content }) => {
  let html = converter.makeHtml(content);
  let metadata = converter.getMetadata();

  let authorsBeforeMe = metadata.authors.split('Matúš Tomlein')[0];
  let authorsAfterMe = metadata.authors.split('Matúš Tomlein')[1];

  let title = metadata.title;
  if (metadata.subtitle) { title += ': ' + metadata.subtitle; }
  setTitle(title);

  return <article>
    {metadata.banner ? <figure>
      <img src={'/images/' + metadata.banner} />
    </figure> : null}

    <h1>
      {metadata.link ? <a href={metadata.link}>{title}</a> : title}
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
          {formatDate(metadata.date)}
          {metadata.author ? <React.Fragment>
            <br />
            {metadata.author}
          </React.Fragment> : null}
          {metadata.context ? <React.Fragment>
            <br />
            {metadata.context}
          </React.Fragment> : null}
        </span>
      </p>

      {parse(html)}
    </section>
  </article>;
};

const BlogPage = ({ match }) => {
  return <FetchData api={'/api/blogs/' + match.params.blogId + '.md'}
    component={Blog} contentType='text/markdown' />;
};

module.exports = BlogPage;
