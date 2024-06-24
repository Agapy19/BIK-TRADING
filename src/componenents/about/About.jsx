import Nav from '../nav/Nav';
import './About.css';
import Section from './Section';

const About = () => {
  return (
    <section>
      <Nav />
      <div className='about-page'>
        <div className='about-us-page'>

        </div>
        <div className='about-page__item'>

          <h2 className='titre'>About Us</h2>
          <p>BIK TRADING SERVICE was Incorporated as a congolese company in the year 2021CD/LSH/RCCM/22-B-01930,
          Tax registration number A22065951, I.D, NAT 05-F4200-N05832T as a Clvil Construction company and supplier of various industrial products i.e. </p>
        </div>
        <Section title=" Our Company">
          <p className='paragraphe'>
            Since our foundation, we have been committed to responsibly and sustainably providing essential resources in the mining sector.
          </p>
          <p className='paragraphe'>
            Our company combines strong technical expertise with a deep commitment to safety, environment, and the communities we serve.
          </p>
        </Section>
        <div className="about-page-philosophy">
          <h2 className='title'>Our  philosophy </h2>

          <div className="about-page-philosophy__philosophy">
            <div className="about-page-philosophy__vision">
              <h2>Our Vision</h2>
              <p>We strive to be the most trusted supplier in Drc of quality industrial, safety,surveillance products and services</p>
            </div>
            <div className="about-page-philosophy__mision">
              <h2>Our Mission</h2>
              <p>Trougth innovation and dedication to our customers, we make sure in everything we do that our everyday service distinguishes us from our competitors</p>
            </div>
            <div className="about-page-philosophy__value">
              <h2>Our Values</h2>
              <p>Our performance-oriented culture and responsible approach from the foundations of our business depends on our creativity,dedication and performance</p>
            </div>
          </div>

        </div>

        <Section title="Our History">
          <p className='paragraphe'>
            Founded several years ago, we have grown to become a global leader in the mining industry, expanding our operations across multiple continents.
          </p>
        </Section>



        <Section title="Our Expertise">
          <p className='paragraphe'>
            With decades of experience in exploration, extraction, and processing of minerals, we have unparalleled expertise in...
          </p>
          <p className='paragraphe'>
            We utilize advanced technologies to enhance efficiency and reduce environmental impact of our operations.
          </p>
        </Section>




      </div>
    </section>

  )
}

export default About