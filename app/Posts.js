const React = require('react'),

    FetchData = require('./components/FetchData'),
    Link = require('react-router-dom').Link,

    formatDate = require('./helpers').formatDate,
    parse = require('html-react-parser'),
    showdown = require('showdown'),
    converter = new showdown.Converter();


const BlogPost = ({ blog }) => {
    return <section>
        <h2>
            <Link to={'/blogs/' + blog.id}>
                {blog.title}
            </Link>
            <label htmlFor={'mn-blog-' + blog.id} className="margin-toggle">⊕</label>
        </h2>
        <h4>{blog.authors}</h4>
        <p>
            <input type="checkbox" id={'mn-blog-' + blog.id} className="margin-toggle" />
            <span className="marginnote">
                {blog.banner ? <img src={'/images/' + blog.banner} /> : null}
                {formatDate(blog.date)}
                {blog.context ? <React.Fragment>
                    <br />
                    {blog.context}
                </React.Fragment> : null}
            </span>
        </p>

        {parse(converter.makeHtml(blog.perex))}

        <p>
            <Link to={'/blogs/' + blog.id}>
                Read more
            </Link>
        </p>
    </section>;
};

const PublicationPost = ({ publication }) => {
    return <section>
        <h2>
            <Link to={'/publications/' + publication.id}>
                {publication.title}
            </Link>
            <label htmlFor={'mn-publication-' + publication.id} className="margin-toggle">⊕</label>
        </h2>
        <h4>{publication.authors}</h4>
        <p>
            <input type="checkbox" id={'mn-publication-' + publication.id} className="margin-toggle" />
            <span className="marginnote">
                {publication.banner ? <img src={'/images/' + publication.banner} /> : null}
                {publication.published}<br />
                <i>Venue:</i> {publication.venue}
            </span>
        </p>

        <p>
            {parse(converter.makeHtml(publication.abstract))}
        </p>
    </section>;
};

const PostList = ({ publications, blogs }) => {
    blogs.forEach(blog => {
        blog.element = <BlogPost key={blog.id} blog={blog} />;
    });

    publications.forEach(publication => {
        publication.element = <section key={publication.id}>
            <PublicationPost publication={publication} />
        </section>;
    });

    let posts = blogs.concat(publications);

    posts.sort((a, b) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : 0));

    return <React.Fragment>
        {posts.map(post => post.element)}
    </React.Fragment>;
};

const FetchPublications = (props) => {
    return <FetchData api='/api/publications.json'
        pass={props} component={PostList} />;
};

const Posts = () => {
    return <FetchData api='/api/blogs.json' component={FetchPublications} />;
};

module.exports = Posts;
