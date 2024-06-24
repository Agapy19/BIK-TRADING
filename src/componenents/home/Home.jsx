import './Home.css';
import { BiWorld } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { AiOutlineArrowRight, AiOutlineDownload } from "react-icons/ai";
import Nav from '../nav/Nav';
import { Link, useNavigate } from 'react-router-dom';
const PDF = process.env.PUBLIC_URL + '/Images/COMPANY PROFILE BIK T.pdf';

function Home() {
    const contactItems = [
        {
            icon: <FaHandsHelping className='icon' />,
            title: "Support",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            icon: <BiWorld className='icon' />,
            title: "Global",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            icon: <GiFamilyHouse className='icon' />,
            title: "Family",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            icon: <FaHandsHelping className='icon' />,
            title: "Support",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            icon: <BiWorld className='icon' />,
            title: "Global",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            icon: <GiFamilyHouse className='icon' />,
            title: "Family",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ];

    return (
        <section>
            <Nav />

            <div className='home'>
                <div className='home-page'>
                    <div className="home-page__text">
                        <h2 className="gradient-text">Your partner for responsible mining</h2>
                        <p>Trust BIK TRADING SERVICE SARL !</p>
                        <Link to="/About">
                            <button>Discover us</button>

                        </Link>
                    </div>
                </div>
                <div className='about-home-page'>
                    <div className='about-home-page__item'>
                        <div className='about-home-page__mission'>
                            <FaHandsHelping className='icon' />
                            <h2>Mission</h2>
                            <p>Trougth innovation and dedication to our customers, we make sure in everything we do that our everyday service distinguishes us from our competitors</p>
                        </div>
                    </div>
                    <div className='about-home-page__item'>
                        <div className='about-home-page__vison'>
                            <BiWorld className='icon' />
                            <h2>Vision</h2>
                            <p>We strive to be the most trusted supplier in Drc of quality industrial, safety,surveillance products and services</p>
                        </div>
                    </div>
                    <div className='about-home-page__item'>
                        <div className='about-home-page__value'>
                            <GiFamilyHouse className='icon' />
                            <h2>Values</h2>
                            <p>Our performance-oriented culture and responsible approach from the foundations of our business depends on our creativity,dedication and performance</p>
                        </div>
                    </div>
                </div>

                <div className="service-home-page">
                    <h1>What we do</h1>
                    <p>We have accomplished this by not only suppling,and maintaining quality products we also take.
                        The time to listen to our customers and help them find solution to their specific needs
                    </p>
                    <Link to="/Services">
                    <button className='btn'>Learn more</button>


                        </Link>
                </div>
                <div className="founder-home-page">
                    <div className="founder-home-page__img">
                        <img src={process.env.PUBLIC_URL + '/Images/image3.jpeg'} alt="" />
                    </div>
                    <div className="founder-home-page__text">
                        <h1 style={{ marginTop: '20px' }}> "</h1>
                        <p>Mining is an industry for today, tomorrow and forever. At BIK TRADING SERVICE SARL, we are committed to providing innovative and sustainable mining solutions, tailored to your specific needs. Together, we are shaping the future of our industry.           </p>
                        <div className="bar"></div>
                        <div className="founder-profile">
                            <img src={process.env.PUBLIC_URL + ''} />
                            <div className="profile-info">
                                <h2>Brialy Kasongo</h2>
                                <p>Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-page-presentation">
                    <div className='home-page-presentation-flex'>
                        <h2>Get ready for the future</h2>
                        <p>Grow your career, transform our industry and improve lives</p>
                        <Link to="/Contact">
                            <button className='home-page-presentation-flex-btn'>
                                <span>Contact us</span>
                                <AiOutlineArrowRight className='icone' />
                            </button>

                        </Link>

                    </div>
                    <div className="home-page-presentation-grid">
                        <div className='home-page-presentation-grid1'>
                            <p>Green hydrogen: latest studies highlight potential of “energy of the future</p>
                        </div>
                        <div className='home-page-presentation-grid2'>
                            <p>Explore opportunities</p>
                        </div>
                        <div className='home-page-presentation-grid3'>
                            <h2>Welcome Everyone</h2>
                            <Link to="/About">

                                <button className='home-page-presentation-grid3-btn'>Learn More</button>

                            </Link>
                        </div>
                        <div className='home-page-presentation-grid4'>
                            <Link to="/Contact">
                                <button className='home-page-presentation-grid4-btn'>
                                    Contact us
                                    <AiOutlineArrowRight className='icone' />

                                </button>

                            </Link>

                        </div >
                        <div className='home-page-presentation-grid5'>
                            <h2>90% of employees would recommend to a friend</h2>
                        </div>

                    </div>
                </div>
                <div className="home-page-pdf">
                    <div className="home-page-pdf-div">
                        <h2>Download our profile </h2>
                        <a href={PDF} download className='pdf'>
                            Download pdf
                            <AiOutlineDownload className='download-icon' />
                        </a>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Home;
