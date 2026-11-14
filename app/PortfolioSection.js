const React = require('react');
const { Link } = require('react-router-dom');
const projects = [
  { title: 'Seelog', type: 'iPhone app · Personal project', image: '/images/seelog2-banner-wide.jpeg', alt: 'Travel maps and statistics in Seelog', link: 'https://seelog.app', description: 'An app that turns geotagged photos into a picture of your travels: countries, cities, time zones, and the places you return to. No manual logging or continuous location tracking.' },
  { title: 'Synkron', type: 'Desktop app · Open source', image: '/images/synkron.png', alt: 'Synkron folder synchronization interface', link: 'https://synkron.sourceforge.net', description: 'A cross-platform tool for keeping folders in sync, which I started in high school. It grew into an open-source project with almost a million downloads recorded by 2018.' },
  { title: 'Leaklog', type: 'Desktop & web · Industry software', image: '/images/leaklog.png', alt: 'Leaklog refrigerant reporting application', link: 'https://leaklog.org', description: 'Software for recording refrigerant use, inspections, and leak checks. Developed for the people maintaining cooling systems and reporting on their operation.' },
  { title: 'Augmented reality system models', type: 'Research prototype · Aarhus & Grundfos', image: '/images/ar-app.jpg', alt: 'Industrial system modeling with an augmented reality application', path: '/phd/videos', description: 'A smartphone prototype that lets installers build 3D models of industrial systems. Part of my PhD work on making IoT software easier to configure and adapt, developed with domain experts at Grundfos.' },
  { title: 'OwNet', type: 'Student team project · Imagine Cup finalist', image: '/images/ownet.jpg', alt: 'The OwNet project', description: 'A web proxy using caching and prefetching to make slow, intermittent internet connections more useful. We tested it at two schools in rural Kenya and reached the Microsoft Imagine Cup world finals.' }
];
const PortfolioSection = () => <div className="project-list">{projects.map(project => <section className="project-row" key={project.title}>
  <div className="project-row-image"><img src={project.image} alt={project.alt} loading="lazy" /></div>
  <div><p className="eyebrow">{project.type}</p><h2>{project.title}</h2><p>{project.description}</p>
    {project.link ? <a className="text-link" href={project.link}>Visit project ↗</a> : null}
    {project.path ? <Link className="text-link" to={project.path}>See the prototypes ↗</Link> : null}
  </div>
</section>)}</div>;
module.exports = PortfolioSection;
