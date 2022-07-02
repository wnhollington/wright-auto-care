import * as React from "react"
import { useSiteMetadata } from "../../utilities/use-site-metadata"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import { useInView } from "react-intersection-observer"
import { BiCalendarEvent, BiEnvelope, BiPhoneCall} from "react-icons/bi"

const About = () => {
  const siteMetaData = useSiteMetadata()
  const { ref, inView } = useInView({
    threshold: .1,
    triggerOnce: true
  })
  return (
    <section id="contact" className="contact" ref={ref}>
      <Container className={`animated animatedFadeInUp ${inView ? ' fadeInUp' : null}`}>

        <div className="section-title">
          <h2>Contact Us</h2>
        </div>

        <div className="row">

          <div className="col-lg-6 d-flex">
            <div className="info-box">
              <BiCalendarEvent/>
              <h3>Schedule Service</h3>
              <Link to="/schedule-service"className="btn-get-started text-white">Schedule Now</Link>
            </div>
          </div>

          <div className="col-lg-3 d-flex">
            <div className="info-box">
              <BiEnvelope/>
              <h3>Email Us</h3>
              <a href={`mailto:${siteMetaData.contact.email}`}>{siteMetaData.contact.email}</a>
            </div>
          </div>

          <div className="col-lg-3 d-flex">
            <div className="info-box ">
              <BiPhoneCall/>
              <h3>Call Us</h3>
              <p>{siteMetaData.contact.phone}</p>
            </div>
          </div>

        </div>

      </Container>
    </section>
  )
}

export default About
