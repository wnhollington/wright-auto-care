import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"
import { useInView } from "react-intersection-observer"

const About = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })

    return (
        <section id="about" className={`about`} ref={ref}>
            <Container  className={`animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>

                <div className="row no-gutters">
                <div className="col-lg-6 video-box">
                    <StaticImage src="../../images/company.jpg" className="img-fluid"/>
                    <a href="https://www.youtube.com/watch?v=HMxmBD0Zjck" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" target="_blank" rel="noreferrer"></a>
                </div>

                <div className="col-lg-6 d-flex flex-column justify-content-center about-content">

                    <div className="section-title">
                    <h2>About Us</h2>
                    <p>We are a dedicated professionals, taking the world of auto detailing to new levels. We believe in putting our customers at the heart of everything we do, which is why we offer a mobile service that is convenient for you. We will travel to wherever you need us and carry out a full, detailing service while you continue with your day. We are motor vehicle lovers at heart, and we take our appreciation for amazing vehicles and put it into the work that we do, ensuring your ride shines on the road or water.</p>
                    <p>Whether you own a fleet of commercial trucks, or have just purchased a beat-up old car, we are here to ensure that it is looking great. If you are looking for wheel repairs, through to paint touch ups, or an interior update, we are Castle Rock, CO’s number one provider.</p>
                    </div>

                </div>
                </div>

            </Container>
        </section>
    )
}
export default About
