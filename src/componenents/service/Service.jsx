import Section from '../about/Section';
import Footer from '../footer/Footer'
import Nav from '../nav/Nav'
import './Service.css';
import { AiOutlineArrowRight, AiOutlineDownload } from "react-icons/ai";



const Service = () => {
    return (
        <section>
            <Nav />
            <div className='service-page'>
                <div className='page'>

                </div>
                <div className='service-page__item'>

                    <h2 className='service-page-title'>What we do</h2>
                    <p>We have accomplished this by not only suppling,and maintaining quality products we also take. The time to listen to our customers and help them find solution to their specific needs
                    </p>
                </div>
                <div className='service-page-activity'>
                    <img src={process.env.PUBLIC_URL + '/Images/activity.jpg'} alt="" />
                    <div className='service-page-activity-activities'>
                        <Section title="Our Activities">

                            <p>
                                BIK TRADING SERVICE are actively engaged in exploring and identifying mineral-rich areas in DRC.
                            </p>
                            <p>
                                Our extraction operations span various types of mining, including underground and open-pit mining techniques.
                            </p>
                            <p>
                                We specialize in processing raw ores to produce high-quality mineral products used in various industries.
                            </p>
                            <p>
                                Our logistics infrastructure ensures efficient transportation and delivery of our products to global markets.
                            </p>
                        </Section>
                    </div>

                </div>
                <div className='service-page-activity'>
                    <img src={process.env.PUBLIC_URL + '/Images/Project.jpg'} alt="" />
                    <div className='service-page-activity-activities'>
                        <Section title="Our Projects">
                            <p>
                                Currently, we are undertaking several strategic mining projects across different geographical locations.
                            </p>
                            <p>
                                These projects aim to expand our mineral reserves and enhance our operational capabilities.
                            </p>
                            <p>
                                Future projects are focused on leveraging advanced technologies to improve mining efficiency and sustainability.
                            </p>
                        </Section>
                    </div>

                </div>
                <div className='service-page-service'>

                    <h3>Bik trading service can provide the best service</h3>
                    <div className='service-page-service-img'>
                        <img src={process.env.PUBLIC_URL + '/Images/service1.jpg'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/Images/service2.jpg'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/Images/service3.jpg'} alt="" />
                    </div>
                    <button className='service-page-service-btn'>
                        Contact us
                        <AiOutlineArrowRight className='icone' />

                    </button>


                </div>
                <div className='service-page-activity'>
                    <img src={process.env.PUBLIC_URL + '/Images/technology.jpg'} alt="" />
                    <div className='service-page-activity-activities'>
                        <Section title="Innovation and Technology">
                            <p>
                                Innovation is at the core of our operations, driving advancements in mining technologies.
                            </p>
                            <p>
                                We invest in research and development to adopt cutting-edge solutions for sustainable mining practices.
                            </p>
                            <p>
                                Our commitment to technological innovation ensures that we remain competitive and environmentally responsible.
                            </p>
                        </Section>
                    </div>

                </div>
            </div>

            <Footer />

        </section>
    )
}

export default Service