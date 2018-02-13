const React = require('react'),

    Abstract = require('./Abstract'),

    Link = require('react-router-dom').Link;


const EducationItem = ({ from, until, degree, school, department, link, supervision, field, i, children }) => {
    return <React.Fragment>
        <h3>
            {degree} at <a href={link}>{school}</a>
            {' '}
            <label for={'mn-edu-' + i} class="margin-toggle">⊕</label>
        </h3>
        <p>
            <input type="checkbox" id={'mn-edu-' + i} class="margin-toggle" />
            <span class="marginnote">
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
            <label for={'mn-job-' + i} class="margin-toggle">⊕</label>
        </h3>
        <p>
            <input type="checkbox" id={'mn-job-' + i} class="margin-toggle" />
            <span class="marginnote">
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
                <a href={this.props.link}>{this.props.title}</a>
                {' '}
                <label for={'mn-pub-' + this.props.i} class="margin-toggle">⊕</label>
            </h3>
            <h4>{this.props.authors}</h4>
            <p>
                <input type="checkbox" id={'mn-pub-' + this.props.i} class="margin-toggle" />
                <span class="marginnote">
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

const IndexPage = ({ circuit, database, openAction }) => {
    return <article>
        <h1>
            <Link to='/'>Matúš Tomlein</Link>
        </h1>
        <p class="subtitle">
            Curriculum Vitae
            {' '}
            <label for="mn-demo" class="margin-toggle">⊕</label>
        </p>
        <section>
            <p>
                <input type="checkbox" id="mn-demo" class="margin-toggle" />
                <span class="marginnote">
                    <img src="/images/profile.jpg" style={{'width': '200px'}} alt="Me" /><br />
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
                <li><a href='#skills'>Technical Skills</a></li>
                <li><a href='#awards'>Competitions, Awards and Interests</a></li>
            </ul>
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
                    application, <a href='http://ownet.fiit.stuba.sk'>OwNet</a> that
                    helped schools with slow and intermittent Intrnet connection make Internet more accessible.
                    We competed in the <a href='https://imagine.microsoft.com/compete'>Microsoft Imagine
                    Cup</a> competition, where we advanced to finals in Sydney.
                </p>
            </EducationItem>

        </section>

        <section>
            <a name="work"></a>
            <h2>Work Experience</h2>

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
            <a name="publications"></a>
            <h2>Research Publications</h2>

            <Publication i={0}
                title='A Visual Programming Approach Based on Domain Ontologies for Conﬁguring Industrial IoT Installations'
                authors='Matúš Tomlein, Kaj Grønbæk'
                venue='IoT Conference'
                published='October 2017'
                link='https://dl.acm.org/citation.cfm?doid=3131542.3131552'
                abstract="Industrial products tend to be customized by third-parties for different use cases. This is currently supported by adding external Programmable Logic Controllers (PLC) to installations. As IoT software ecosystems become wide-spread, the need for such hardware will decrease. However, removing the controllers opens the challenge of configuring distributed industrial installations. This paper argues for modeling application requirements on industrial installations so that they can be evaluated automatically based on information about targeted installations. GIMLE, a visual language for modeling application requirements using expressive domain knowledge, is proposed. GIMLE enables modeling requirements on physical features of installations, which hasn't received significant attention in the related work. A study with domain experts is used to reflect on the proposed process. The scalability of the visual language is evaluated using a model for a real-world application. The support for reuse of requirements enabled us to build models that can add support for new installations without significant changes and with a slower increase in size the more components can be reused."
                />

            <Publication i={1}
                title='Building Models of Installations to Recommend Applications in IoT Software Ecosystems'
                authors='Matúš Tomlein, Kaj Grønbæk'
                venue='FiCloud'
                published='August 2016'
                link='http://ieeexplore.ieee.org/abstract/document/7575838/'
                abstract="Internet of Things devices are driven by applications. To stimulate innovation on their platforms, manufacturers of embedded products are creating software ecosystems that enable third-parties develop applications for their devices. Since such applications are developed externally, their seamless integration into the platforms is a challenge. In this paper, we propose to use semantic reasoning to select and configure applications in software ecosystems. Our prototype builds a model of the installation and the user goals through several steps. It processes application descriptions created by their developers and matches them to the installation model. Based on the matched descriptions, it presents options to deploy applications in the environment to the user sorted by their relevance. The proposed approach enables resolving complex requirements of applications before their installation in the platform. Our preliminary evaluation shows that the prototype supports the integration of the identified applications."
                />

            <Publication i={2}
                title='Semantic Model of Variability and Capabilities of IoT Applications for Embedded Software Ecosystems'
                authors='Matúš Tomlein, Kaj Grønbæk'
                venue='WICSA'
                published='April 2016'
                link='http://ieeexplore.ieee.org/abstract/document/7516835/'
                abstract="Applications in embedded open software ecosystems for Internet of Things devices open new challenges regarding how their variability and capabilities should be modeled. In collaboration with an industrial partner, we have recognized that such applications have complex constraints on the context. We have also identified a need to model their deployment topology and functionality in order to enable their seamless integration into the platform. In this paper, we draw from research in related fields and present a model of IoT applications. It is built using semantic annotations and uses semantic reasoning to resolve context requirements. We present the implications on the architecture of the ecosystem and the concepts defined in the model. Finally, we discuss the evaluation of the model and its benefits and liabilities. Although the approach results in more complex descriptions of applications, we conclude that it is suitable for modeling applications in IoT software ecosystems since it is more adaptable and expressive than the alternatives."
                />

            <Publication i={3}
                title='Method for Novelty Recommendation Using Topic Modelling'
                authors='Matúš Tomlein, Jozef Tvarožek'
                venue='UMAP Workshops'
                published='2014'
                link='https://pdfs.semanticscholar.org/6dce/2e5eb87c8ff89353b1fb9a4dd1534d9aa878.pdf'
                abstract="Content-based filtering methods fall short in situations where there are many similar items to recommend from, for instance when recommending articles from multiple news portals. To deal with this problem, we can consider the novelty of recommendations. Detecting novelty is usually implemented as ﬁnding the most dissimilar articles. We propose a method that uses topic modelling to ﬁnd the novelty of articles. Our method ranks topics by their importance and novelty to the user and recommends articles according to their topics. We evaluate our method and compare it to other approaches to novelty recommendation and also to a method that doesn’t take novelty into account. The results show that our method was more successful than the other approaches to novelty detection in recommending relevant articles that the users were interested in. It also showed a better click-through rate than the method that didn’t incorporate novelty, although the order of its recommendations was less optimal."
                />

            <Publication i={4}
                title='Enhancing Web Surfing Experience in Conditions of Slow and Intermittent Internet Connection'
                authors='Ľuboš Demovič, Martin Konôpka, Marek Láni, Matúš Tomlein'
                venue='Bulletin of the ACM Slovakia'
                published='June 2012'
                link='http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.295.1744&rep=rep1&type=pdf'
                abstract="Despite of the advancements in information and telecommunication technologies, slow and intermittent Internet connection is still a serious issue in many places around the World, but mostly in developing countries. At the same time, Internet with its most popular service – the Web, became one of the very important parts of our everyday lives as more and more of human activity is taking place online. We believe that providing access to information on the Web is crucial for young people in developing countries to get the required skills and acquire experience in order to ﬁnally achieve signiﬁcant progress in solving problems of their countries. In this paper, we propose a concept of software solution called OwNet which makes the Web surﬁng experience less frustrating even on slow and intermittent Internet connections. OwNet is based on using a local proxy server, which acts as an intelligent bridge between the client’s browser application and the Internet and communicates with other clients and services in order to provide the best surfing experience. Although this concept is not bound to the quality of available connection, we mainly target the current situation in developing countries. The paper presents the overall concept and details on methods used for intelligent caching and prefetching of Web content."
                />

        </section>

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
                <li>Backend frameworks: Ruby on Rails, NodeJS (advanced), ASP.NET MVC (basic).</li>
                <li>Databases: PostgreSQL, SQLite, MongoDB (advanced), Elasticsearch, InfluxDB (basic).</li>
                <li>Machine learning in Python using SciPy, NumPy and Pandas (advanced).</li>
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
                <li>Dean's award, Faculty of Informatics and Information Technologies STU in Bratislava (2012).</li>
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
