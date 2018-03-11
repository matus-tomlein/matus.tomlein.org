const React = require('react'),

    Link = require('react-router-dom').Link;


const ARModelingPaperPage = ({ circuit, database, openAction }) => {
    return <article>
        <h1>
            Augmented Reality Supported Modeling of Industrial Systems to Infer Software Configuration
        </h1>
        <p class="subtitle">
            <Link to='/'>Matúš Tomlein</Link>,
            <a href='http://www.gronbak.dk/kgronbak/'>Kaj Grønbæk</a>
        </p>

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

    </article>;
};

module.exports = ARModelingPaperPage;
