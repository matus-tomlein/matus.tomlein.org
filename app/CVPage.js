const React = require('react'),

    Abstract = require('./Abstract'),
    PortfolioSection = require('./PortfolioSection'),
    setTitle = require('./helpers').setTitle,

    FetchData = require('./components/FetchData'),

    Link = require('react-router-dom').Link;


const EducationItem = ({ from, until, degree, school, department, link, supervision, field, i, children }) => {
    return <React.Fragment>
        <h3>
            {degree} at <a href={link}>{school}</a>
            {' '}
            <label htmlFor={'mn-edu-' + i} className="margin-toggle">⊕</label>
        </h3>
        <p>
            <input type="checkbox" id={'mn-edu-' + i} className="margin-toggle" />
            <span className="marginnote">
                {from} – {until}<br />
                <i>Field:</i> {field}<br />
                <i>Department:</i> {department}<br />
                <i>Supervised by:</i> {supervision}
            </span>
        </p>
        {children}
    </React.Fragment>;
};

const Job = ({ from, until, position, company, website, business, children, i }) => {
    return <React.Fragment>
        <h3>
            {position} at <a href={website}>{company}</a>
            {' '}
            <label htmlFor={'mn-job-' + i} className="margin-toggle">⊕</label>
        </h3>
        <p>
            <input type="checkbox" id={'mn-job-' + i} className="margin-toggle" />
            <span className="marginnote">
                {from} – {until}<br />
                <i>Business or sector:</i> {business}
            </span>
        </p>
        {children}
    </React.Fragment>;
};

class Publication extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.expandAbstract = this.expandAbstract.bind(this);
    }

    expandAbstract(e) {
        e.preventDefault();
        this.setState({ expand: !this.state.expand });
        return false;
    }

    render() {
        let abstract;
        if (this.state.expand) {
            abstract = <span>
                {this.props.abstract} <a href="#" onClick={this.expandAbstract}>Show less.</a>
            </span>;
        } else {
            abstract = <span>
                {this.props.abstract.substring(0, 150)}
                <a href="#" onClick={this.expandAbstract}>…</a>
            </span>;
        }
        return <React.Fragment>
            <h3>
                <Link to={'/publications/' + this.props.id}>{this.props.title}</Link>
                {' '}
                <label htmlFor={'mn-pub-' + this.props.i} className="margin-toggle">⊕</label>
            </h3>
            <h4>{this.props.authors}</h4>
            <p>
                <input type="checkbox" id={'mn-pub-' + this.props.i} className="margin-toggle" />
                <span className="marginnote">
                    {this.props.published}<br />
                    <i>Venue:</i> {this.props.venue}
                </span>
            </p>
            <p>
                {abstract}
            </p>
        </React.Fragment>;
    }
}

const PublicationList = ({ publications }) => {
    return <React.Fragment>
        {publications.map(pub => <Publication key={pub.id}
            i={pub.id} {...pub} />)}
    </React.Fragment>;
};

const IndexPage = () => {
    setTitle('Curriculum Vitae');

    return <article>
        <h1>
            <Link to='/'>Matúš Tomlein</Link>
        </h1>
        <p className="subtitle">
            Curriculum Vitae
            {' '}
            <label htmlFor="mn-demo" className="margin-toggle">⊕</label>
        </p>
        <section>
            <p>
                <input type="checkbox" id="mn-demo" className="margin-toggle" />
                <span className="marginnote">
                    <img src="/images/profile.jpg" style={{ 'width': '200px' }} alt="Me" /><br />
                    <i>Date of birth:</i> 7 April 1991<br />
                    <i>Sex:</i> Male<br />
                    <i>Nationality:</i> Slovak<br />
                    <i>Location:</i> Bratislava, Slovakia<br />
                    <i>Fluent in:</i> English, Slovak
                </span>
            </p>

            <Abstract />
        </section>

        <section>
            <h2>Jump To</h2>
            <ul>
                <li><a href='#education'>Education</a></li>
                <li><a href='#work'>Work Experience</a></li>
                <li><a href='#publications'>Research Publications</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#skills'>Technical Skills</a></li>
                <li><a href='#awards'>Competitions, Awards and Interests</a></li>
            </ul>
        </section>

        <section>
            <a name="work"></a>
            <h2>Work Experience</h2>

            <Job from='September 2021' until='present' i={-1}
                website='https://snowplowanalytics.com'
                position='Senior Software Engineer'
                business='Behavioral Data Platform'
                company='Snowplow Analytics'>
                <p>
                    Working on open source trackers that enable reliable collection of rich event data from various platforms.
                </p>
            </Job>

            <Job from='October 2020' until='present' i={-1}
                website='https://kinit.sk'
                position='Senior Researcher'
                business='Web & User Data Processing'
                company='Kempelen Institute of Intelligent Technologies'>
                <p>
                    Working on research projects dealing with detecting and auditing misinformation on the Web.
                </p>
            </Job>

            <Job from='March 2018' until='September 2021' i={-1}
                website='https://pygmalios.com'
                position='Data Science Engineer'
                business='Retail analytics'
                company='Pygmalios'>
                <p>
                    Heading Data Science efforts at Pygmalios.
                    Main responsibility in ensuring quality of sensor data
                    from physical retail stores by building tools for anomaly detection
                    and improving internal data-processing pipelines.
                    Also involved in analysis, design and implementation of new
                    data-driven product features.
                </p>
            </Job>

            <Job from='March 2019' until='August 2020' i={-1}
                website='https://misdeed.fiit.stuba.sk'
                position='Data Scientist'
                business='Research project'
                company='Faculty of Informatics and Information Technologies, STU'>
                <p>
                    Involved in a research project that aims to detect misinformation in
                    the domain of healthcare and health-related articles on the Web.
                    Working on evaluating user studies, collecting, and analyzing
                    fact-checking claims with respect to their use for misinformation detection.
                </p>
            </Job>

            <Job from={2009} until='present' i={0}
                website='https://szchkt.org'
                position='Web developer'
                business='Notified body for cooling and air conditioning technology'
                company='Slovak Association for Cooling and Air-Conditioning Technology'>
                <p>
                    I have worked on a Web information system for certification of cooling experts
                    according to the legislation.
                    The system enables reporting of refrigerant usage and certification of companies
                    based on the Kyoto protocol.
                </p>
                <p>
                    I have also worked on <a href='http://leaklog.org'>Leaklog</a>.
                    Leaklog is a desktop and Web application for logging refrigerant usage.
                </p>
            </Job>

            <Job from='February 2014' until='October 2014' i={1}
                website='https://pygmalios.com'
                position='Backend developer'
                business='Software consulting and retail analytics'
                company='Subteca (later Pygmalios)'>
                <p>
                    I worked as backend developer on several Web applications
                    built for clients.
                    When the company transitioned to retail analytics, I worked on
                    indoor localization using Internet of Things devices.
                </p>
            </Job>

        </section>

        <section>
            <a name="education"></a>
            <h2>Education</h2>

            <EducationItem from={2014} until={2017} i={0}
                degree="PhD Fellowship"
                department="Computer Science"
                supervision='Kaj Grønbæk and Henrik Bærbak Christensen'
                field='Internet of Things'
                link='http://cs.au.dk'
                school='Aarhus University'>

                <p>
                    I worked on my PhD at
                    the <a href='http://cs.au.dk/research/ubiquitous-computing-and-interaction/'>Ubiquitous
                        Computing and Interaction</a> research group.
                    The work was done as part of a Danish project called <a href='http://en.made.dk'>MADE</a>.
                    MADE aimed to strenghten manufacturing in Denmark by enabling researchers work together
                    with industrial partners.
                    In my work, I collaborated with <a href='http://www.grundfos.com'>Grundfos</a>, a leading
                    pump manufacturer and water solution provider.
                </p>

                <p>
                    My work aimed to support customization of industrial Internet of Things products by an
                    ecosystem of external software providers.
                    I proposed and developed tools and tactics that support a seamless integration
                    of external software applications in industrial products after their delivery to customers.
                    The tools built on augmented reality, visual programming languages, and semantic reasoning.
                    Some demo videos can be <Link to='/phd/videos'>found here.</Link>
                </p>

                <p>
                    As part of my PhD studies, I visited and worked with Anind Dey
                    at Carnegie Mellon University.
                    Together with other researchers at the lab, we worked on supporting maintenance
                    of machine learning-based activity recognition using <a href='https://mites.io'>Mite
                        IoT sensors</a> over time.
                </p>
            </EducationItem>

            <EducationItem from={2012} until={2014} i={1}
                degree="Master's Degree"
                department="FIIT"
                link='http://www.fiit.stuba.sk'
                field='Software Engineering'
                supervision='Jozef Tvarožek'
                school='Slovak University of Technology'>
                <p>
                    I worked on my master thesis as part of
                    the <a href='https://www.pewe.sk'>PeWe (Personalized Web)</a> research group.
                    My work focused on recommendation of news articles based on their novelty
                    for the targeted user.
                </p>

                <p>
                    I spent a semester studying abroad at <a href='http://cs.au.dk'>Aarhus University</a>.
                    At the exchange, I took courses in security, peer-to-peer networking and embedded systems.
                </p>
            </EducationItem>

            <EducationItem from={2009} until={2012} i={2}
                degree="Bachelor's Degree"
                department="FIIT"
                link='http://www.fiit.stuba.sk'
                field='Informatics'
                supervision='Michal Barla'
                school='Slovak University of Technology'>
                <p>
                    In my bachelor project, I worked in a team of four students on a proxy
                    application, <a href='http://ownet.fiit.stuba.sk'>OwNet</a>.
                    OwNet enabled schools with slow and intermittent Intrnet connection make Internet more
                    usable for students.
                    We competed in the <a href='https://imagine.microsoft.com/compete'>Microsoft Imagine
                        Cup</a> competition and advanced to the finals in Sydney.
                </p>
            </EducationItem>

        </section>

        <section>
            <a name="publications"></a>
            <h2>Research Publications</h2>

            <FetchData api="/api/publications.json" component={PublicationList} />
        </section>

        <PortfolioSection>
            <a name="portfolio"></a>
            <h2>Portfolio</h2>
        </PortfolioSection>

        <section>
            <a name="skills"></a>
            <h2>Technical Skills</h2>

            <p>
                The following is a non-exhaustive list of technologies and methodologies I have
                gained experience working with.
            </p>

            <h3>Web</h3>
            <ul>
                <li>JavaScript frameworks and libraries: ReactJS, jQuery (advanced).</li>
                <li>CSS frameworks: Bootstrap, Spectre.css, Flexbox grid (intermediate).</li>
            </ul>

            <h3>Mobile</h3>
            <ul>
                <li>iOS development using Cocoa and Swift (intermediate).</li>
                <li>Android development in Java (basic).</li>
            </ul>

            <h3>Desktop</h3>
            <ul>
                <li>Multi-platform applications using Qt (advanced) and Electron (basic).</li>
            </ul>

            <h3>Cloud</h3>
            <ul>
                <li>Backend frameworks: Ruby on Rails, NodeJS, Flask (advanced), ASP.NET MVC (basic).</li>
                <li>Databases: PostgreSQL, SQLite, MongoDB (advanced), Apache Cassandra (intermediate), Elasticsearch, InfluxDB (basic).</li>
                <li>Machine learning and data transformation in Python using SciPy, NumPy and Pandas (advanced).</li>
                <li>Distributed data processing using Apache Spark (intermediate).</li>
            </ul>

            <h3>Embedded</h3>
            <ul>
                <li>Hardware prototyping platforms: Raspberry Pi, Arduino, Particle (advanced).</li>
            </ul>

            <h3>Other software development skills</h3>
            <ul>
                <li>Test-driven development.</li>
                <li>Agile software development.</li>
                <li>Version control using Git.</li>
            </ul>
        </section>

        <section>
            <a name="awards"></a>
            <h2>Competitions, Awards and Interests</h2>

            <p>
                I have received the following awards:
            </p>
            <ul>
                <li>Best Student Paper Award, IoT Conference, ACM (2017).</li>
                <li>Dean&apos;s award, Faculty of Informatics and Information Technologies STU in Bratislava (2012).</li>
                <li>Circuits and Systems Society Price, IEEE (2009).</li>
            </ul>

            <p>
                I have advanced to the finals and competed in the following international competitions:
            </p>
            <ul>
                <li><a href="http://www.startupawards.sk/archive-2012">StartupAwards</a>, Slovakia (2012). Category: Society.</li>
                <li>Microsoft Imagine Cup in Sydney, Australia (2012). Category: Software Design.</li>
                <li>CASTIC in Jinan, China (2009).</li>
                <li>I-SWEEEP in Houston, TX, USA (2009). Awarded prize: Honorable Mention.</li>
            </ul>

            <p>
                My interests include <a href='https://www.instagram.com/matustomlein/'>
                    travelling, windsurfing, biking, skiing, hiking, reading, and more.
                </a>
            </p>

        </section>

    </article>;
};

module.exports = IndexPage;
