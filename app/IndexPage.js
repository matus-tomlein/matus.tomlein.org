const React = require('react');
const { Link } = require('react-router-dom');
const { setTitle } = require('./helpers');

const IndexPage = () => {
  setTitle();
  return <div className="home-page">
    <section className="hero" aria-labelledby="intro-title">
      <div className="hero-copy">
        <p className="eyebrow">Hello, I’m Matúš</p>
        <h1 id="intro-title">Software engineer.<br /><em>Data systems &amp; research.</em></h1>
        <p className="hero-description">My background is in data systems, developer tools, and applied research. I currently work on real-time data products at Snowplow.</p>
        <div className="hero-links"><Link className="text-link" to="/cv">A little about me <span aria-hidden="true">↗</span></Link><a href="mailto:matus@tomlein.org">Say hello <span aria-hidden="true">↗</span></a></div>
      </div>
      <figure className="portrait"><img src="/images/portrait.jpg" width="640" height="640" alt="Matúš Tomlein" /><figcaption>Based in Bratislava, Slovakia</figcaption></figure>
    </section>

    <section className="section-grid current-section" aria-labelledby="current-title">
      <div><p className="eyebrow">These days</p><h2 id="current-title">At Snowplow</h2></div>
      <div className="section-body">
        <p className="lead">I’m a Principal Software Engineer at <a href="https://snowplow.io">Snowplow</a>, where we build tools for collecting and processing behavioral event data.</p>
        <p>My focus is <a href="https://signals.snowplow.io">Signals</a>. It brings live events and warehouse history together into customer profiles that applications and AI agents can use in real time. I’ve been involved from the beginning, helping shape the product and build its core systems.</p>
        <p className="quiet">Before that: open-source SDKs, analytical applications, retail data science, and a PhD in human-computer interaction and the Internet of Things.</p>
        <Link className="text-link" to="/cv">More about my background <span aria-hidden="true">↗</span></Link>
      </div>
    </section>

    <section className="section-grid research-preview" aria-labelledby="research-title">
      <div><p className="eyebrow">Selected work</p><h2 id="research-title">Research</h2><p className="quiet">Industrial IoT, activity recognition, and misinformation. PhD at Aarhus University, with a research visit to Carnegie Mellon.</p><Link className="text-link" to="/research">All publications <span aria-hidden="true">↗</span></Link></div>
      <div className="section-body">
        <div className="research-highlight">
          <p className="research-meta">ACM RecSys · 2021 <span className="award-label">Best Paper Award</span></p>
          <h3><Link to="/publications/recsys21-youtube-audit">Misinformation filter bubbles on YouTube <span aria-hidden="true">↗</span></Link></h3>
          <p>We studied how YouTube recommendations respond when users move from watching misinformation to debunking content, and whether that can help them leave a filter bubble.</p>
        </div>
        <div className="research-highlight">
          <p className="research-meta">PhD research · Aarhus University &amp; Grundfos</p>
          <h3><Link to="/publications/ar-modeling">Configuring industrial systems with augmented reality <span aria-hidden="true">↗</span></Link></h3>
          <p>I developed tools for modeling industrial installations and using those models to configure their software. The work combined augmented reality, visual programming, and semantic reasoning, with evaluation by domain experts.</p>
          <Link className="research-demo" to="/phd/videos"><img src="/images/ar-app.jpg" alt="An augmented reality prototype for modeling an industrial installation" loading="lazy" /><span>View the prototypes &amp; demos <span aria-hidden="true">↗</span></span></Link>
        </div>
        <div className="research-highlight">
          <p className="research-meta">Research at Carnegie Mellon · Preprint, 2018</p>
          <h3><Link to="/publications/iot-maintenance-transfer-learning">Keeping activity recognition useful as environments change <span aria-hidden="true">↗</span></Link></h3>
          <p>Exploring how to reuse trained models when sensors are replaced or systems expand into new rooms, reducing the need to collect and label training data again.</p>
        </div>
      </div>
    </section>

    <section className="section-grid personal-preview" aria-labelledby="personal-title">
      <div><p className="eyebrow">Outside work</p><h2 id="personal-title">Personal projects</h2></div>
      <div className="section-body">
        <div className="small-project"><h3><a href="https://seelog.app">Seelog <span aria-hidden="true">↗</span></a></h3><p>An iPhone app that shows travel statistics from geotagged photos, without manual logging or location tracking.</p></div>
        <div className="small-project"><h3><a href="https://synkron.sourceforge.net">Synkron <span aria-hidden="true">↗</span></a></h3><p>An open-source folder synchronization tool I started in high school.</p></div>
        <div className="inline-links"><Link className="text-link" to="/portfolio">More projects ↗</Link><Link className="text-link" to="/writing">Older writing &amp; talks ↗</Link></div>
      </div>
    </section>
    <section className="closing"><p className="eyebrow">Elsewhere</p><h2>Get in touch</h2><p>Find me on <a href="https://github.com/matus-tomlein">GitHub</a> or <a href="https://www.linkedin.com/in/matustomlein/">LinkedIn</a>, or <a href="mailto:matus@tomlein.org">send me an email</a>.</p></section>
  </div>;
};
module.exports = IndexPage;
