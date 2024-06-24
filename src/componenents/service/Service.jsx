import Section from '../about/Section';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav'
import './Service.css';
const PDF = process.env.PUBLIC_URL + '/Images/COMPANY PROFILE BIK T.pdf';



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
                                BIK TRADING SERVICE SARL
                                Clvil Construction company and supplier of various industrial products i.e., electrical,Instrumentation, mechanical, motors, gear boxes, mechanical seals, equipment spares, valves, pressure and temperature transmitters, reagents, chemicals, Personal Protective Equipment (PPE), Conveyor belt accessories.BIK TRADING SERVICE focus on meeting the client's quality requirement of products and services and strive to deliver within the ahortest lead time.

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
                                You name it, we'll supply it
                                Whatever industrial supplies or services you need - we will deliver first time, on time, every time.
                                It is our objective to be the leading supplier of the full range of products that mining and other companies or individuals
                                anywhere in DRC
                                may need
                            </p>

                        </Section>
                    </div>

                </div>
                <div className='service-page-service'>

                    <h3>Bik trading service can provide the best products</h3>
                    <div className='service-page-service-img'>

                        <figure>
                            <img src={process.env.PUBLIC_URL + '/Images/pump.jpg'} alt="" />
                            <figcaption>Pump</figcaption>

                        </figure>
                        <figure>
                            <img src={process.env.PUBLIC_URL + '/Images/valve.jpg'} alt="" />
                            <figcaption>Valves</figcaption>

                        </figure>
                        <figure>
                            <img src={process.env.PUBLIC_URL + '/Images/electrical.jpg'} alt="" />
                            <figcaption>Electrical</figcaption>

                        </figure>
                        <figure>
                            <img src={process.env.PUBLIC_URL + '/Images/flowmeter.jpg'} alt="" />
                            <figcaption>Flowmetter</figcaption>

                        </figure>
                        <figure>
                            <img src={process.env.PUBLIC_URL + '/Images/conveyor.jpg'} alt="" />
                            <figcaption>Conveyor belt</figcaption>

                        </figure>
                        <figure>
                            <img src={process.env.PUBLIC_URL + '/Images/Geomanta1.jpeg'} alt="" />
                            <figcaption>Geomembrane</figcaption>

                        </figure>
                        <figure>
                            <img src={process.env.PUBLIC_URL + '/Images/equipement.jpg'} alt="" />
                            <figcaption>Protective equipement</figcaption>

                        </figure>
                        <figure>
                            <img src={process.env.PUBLIC_URL + '/Images/pipe.jpg'} alt="" />
                            <figcaption>Plates and pipe</figcaption>

                        </figure>
                        <figure>
                            <img src={process.env.PUBLIC_URL + '/Images/HDPE.jpg'} alt="" />
                            <figcaption>HDPE pipe</figcaption>

                        </figure>
                        <figure>
                            <img src={process.env.PUBLIC_URL + '/Images/crusher.jpg'} alt="" />
                            <figcaption>Crusher</figcaption>

                        </figure>


                    </div>
                    <a href={PDF} download className='pdf'>
                        <button className='service-page-service-btn'>

                            Learn more

                        </button>


                    </a>





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

            <Footer/>

        </section>
    )
}

export default Service