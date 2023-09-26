'use client';


import ScrollAnimation from "react-animate-on-scroll";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
;

const teamData = [
    {
        image: 'team-01',
        name: 'Harrison Warburton',
        designation: 'CEO',
        location: 'Manchester, UK',
        description: 'I love creating and designing solutions to solve technical problems!',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiInstagram />,
                url: '#'
            },
        ]

    },
];


const TeamOne = ({ column, teamStyle }) => {
    return (
        <div className="row row--15">
            <center>
                {teamData.map((data, index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`rn-team ${teamStyle}`}>
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                <div className="inner">
                                    <figure className="thumbnail">
                                        <img src={`./images/team/${data.image}.jpg`} alt="Corporate " />
                                    </figure>
                                    <figcaption className="content">
                                        <h2 className="title">{data.name}</h2>
                                        <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                        <span className="team-form">
                                            <img src="./images/team/location.svg" alt="Corporate " />
                                            <span className="location">{data.location}</span>
                                        </span>
                                        <p className="description">{data.description}</p>

                                        <ul className="social-icon social-default icon-naked mt--20" >
                                            {data.socialNetwork.map((social, index) =>
                                                <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                                            )}
                                        </ul>
                                    </figcaption>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                ))}
            </center>
        </div>
    );
};

export default TeamOne;
