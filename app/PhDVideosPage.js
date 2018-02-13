const React = require('react'),

    Link = require('react-router-dom').Link;


const PhDVideosPage = ({ circuit, database, openAction }) => {
    return <article>
        <h1>
            Supplementary Videos for
            {' '}
            <a href="http://pure.au.dk/portal/en/persons/matu-tomlein(c55ebaef-7d8f-487b-a1ff-69a83de76746)/publications/contextaware-integrability-and-maintainability-of-cyberphysical-ecosystems(7ffaa36e-673d-4c76-92a7-84d4a8dcfab0).html">PhD Thesis</a>
        </h1>
        <p class="subtitle"><Link to='/'>Matúš Tomlein</Link></p>

        <section>
            <p>
                Figure 1,
                Demonstration of an Augmented Reality-based smartphone application for building 3D models of installed systems at customer sites.
                The video shows the app in use on an industrial system for water treatment.
                The same task as shown in the video was carried out by 16 domain experts in a user study discussed in the thesis.
            </p>

            <figure>
                <video width="100%" controls>
                    <source src="https://f001.backblazeb2.com/file/phd-public/ar_modeling_app.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </figure>
        </section>

        <section>
            <p>
                Figure 2,
                Demonstration of <a href="https://dl.acm.org/citation.cfm?id=3131552&CFID=845722095&CFTOKEN=60220828">GIMLE</a>,
                a visual programming tool that enables domain experts (system builders) define orchestration rules
                for the integration of software applications in industrial systems.
                The orchestration rules create requirements on the context of industrial systems targeted by the applications.
                The video first shows a schema of a targeted system.
                Next, it creates the orchestration rules for two applications (from the point of view of a system builder).
                Finally, it shows a demo set-up of the system and uses a tablet application (from the point of view of a system installer)
                to create a system model (alternative interface to the one showed in Figure 1) that enables evaluation of the rules and
                recommendation of relevant applications.
            </p>

            <figure>
                <video width="100%" controls>
                    <source src="https://f001.backblazeb2.com/file/phd-public/rules.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </figure>
        </section>

        <section>
            <p>
                Figure 3,
                Video by <a href="https://dl.acm.org/citation.cfm?id=3025773">Laput et al.</a> demonstrating
                a sensor used in my work to explore issues with maintaining trained activity recognition models over time,
                as systems change.
                The general-purpose sensor enables an easy-to-deploy sensor package.
                However, as discussed in the thesis, the performance of activity recognition deteriorates as
                the sensed environments change from when the models were trained.
                To face these problems, I proposed and evaluated a novel transfer learning approach.
            </p>

            <figure class="iframe-wrapper">
                <iframe width="853" height="360" src="https://www.youtube.com/embed/aqbKrrru2co" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
            </figure>
        </section>

    </article>;
};

module.exports = PhDVideosPage;
