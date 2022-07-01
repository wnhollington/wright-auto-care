import * as React from "react"
import { useSiteMetadata } from "../../utilities/use-site-metadata"
import { Link } from "gatsby"

const About = () => {
  const siteMetaData = useSiteMetadata()
  return (
    <section id="contact" className="contact"
        data-sal="fade"
        data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
    >
      <div className="container">

        <div className="section-title">
          <h2>Contact Us</h2>
        </div>

        <div className="row">

          <div className="col-lg-6 d-flex">
            <div className="info-box">
              <i className="bx bx-calendar"></i>
              <h3>Schedule Service</h3>
              <Link to="/schedule-service"className="btn btn-primary text-white">Schedule Now</Link>
            </div>
          </div>

          <div className="col-lg-3 d-flex">
            <div className="info-box">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <a href={`mailto:${siteMetaData.contact.email}`}>{siteMetaData.contact.email}</a>
            </div>
          </div>

          <div className="col-lg-3 d-flex">
            <div className="info-box ">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>{siteMetaData.contact.phone}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About
