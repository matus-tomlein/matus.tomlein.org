const React = require('react');


class VideoFigure extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.open = this.open.bind(this);
    }

    open() {
        this.setState({ open: true });
    }

    render() {
        if (this.state.open) {
            return <video width="100%" controls>
                <source src={this.props.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>;
        }

        return <img onClick={this.open} src={this.props.img} width='100%' style={{cursor: 'pointer'}} />;
    }
}

const Project = ({ figure, title, link, children }) => {
    if (link) {
        title = <a href={link}>{title}</a>;
    }
    return <React.Fragment>
        <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
            {figure}
        </div>

        <div className='col-xs-12 col-sm-12 col-md-7 col-lg-7'>
            <h3 style={{ 'margin-top': '0px' }}>{title}</h3>
            {children}
        </div>
    </React.Fragment>;
};

const PortfolioSection = ({ children }) => {
    return <section>
        {children}

        <p>
            Below are selected projects that I worked on.
        </p>

        <p>
            <div className='row'>
                <Project title='Seelog' link='https://seelog.app'
                    figure={<img src='/images/seelog2-banner-wide.jpeg' width='100%' alt='Seelog' />}>
                    <p>
                      Seelog is an iOS app that reports statistics about users&apos;
                      travels and places they’ve seen.
                      It uses geotagged photos from iOS photo library to calculate
                      the statistics and doesn’t require any manual input or tracking.
                      It reports on visited continents, countries, cities, timezones, and more.
                    </p>
                </Project>

                <Project title='Augmented Reality System Models'
                    figure={<VideoFigure img='/images/ar-app.jpg' video='https://f001.backblazeb2.com/file/phd-public/ar_modeling_app.mp4' />}>
                    <p>
                        One of several tools developed during my PhD studies, this smartphone
                        app enabled system installers create 3D models of industrial systems using
                        Augmented Reality.
                        The 3D models were further used to automatically configure
                        software on Internet of Things products in the systems.
                        The prototype was developed and evaluated in collaboration with domain experts
                        at <a href='http://www.grundfos.com'>Grundfos</a>.
                    </p>
                </Project>

                <Project title='Leaklog' link='http://leaklog.org'
                    figure={<img src='/images/leaklog.png' width='100%' alt='Leaklog' />}>
                    <p>
                        Leaklog is a system for logging leakages and inspections of cooling systems
                        according to Regulation (EC) No 517/2014.
                        It logs findings and parameters of leakage checks, shows a history of the development
                        of parameters, compares them with nominal ones and calculates the percentage of leakage.
                        It is being used by numerous service companies in Slovakia to log and report
                        information according to the regulation.
                    </p>
                </Project>

                <Project title='OwNet' link='http://ownet.fiit.stuba.sk'
                    figure={<img src='/images/ownet.jpg' width='100%' alt='OwNet' />}>
                    <p>
                        OwNet was a proxy application that enabled schools with slow and intermittent
                        Internet connection provide a usable Web surfing experience for students.
                        It was deployed and tested at two schools in rural Kenya.
                        Slovak media wrote about OwNet <a href='https://www.etrend.sk/ekonomika/slovaci-rozpaluju-internet-v-keni.html'>
                            here
                        </a> and <a href='https://tech.sme.sk/c/6432700/slovaci-zabojuju-na-imagine-cup-uz-o-par-dni.html'>
                            here
                        </a>.
                    </p>
                </Project>

                <Project title='Synkron' link='http://synkron.sourceforge.net'
                    figure={<img src='/images/synkron.png' width='100%' alt='Synkron' />}>
                    <p>
                        Synkron was a desktop application I developed at high school.
                        It enabled synchronization of contents of two or more local or network folders.
                        It provided numerous other features and options to configure the synchronization.
                        As of 13 February 2018, Synkron was downloaded 948,700 times.
                    </p>
                </Project>

            </div>
        </p>
    </section>;
};

module.exports = PortfolioSection;
