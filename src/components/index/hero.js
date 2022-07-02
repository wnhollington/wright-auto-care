import * as React from "react"
import { useSiteMetadata } from "../../utilities/use-site-metadata"
import { Link } from "gatsby"
import { useInView } from "react-intersection-observer"
import { Container } from "react-bootstrap"

const Hero = () => {
    const siteMetaData = useSiteMetadata()
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    })
    return (
        <section id="hero" className="hero" ref={ref}>
            <div className="hero-container">
                <Container className={`hero-content animated animatedFadeInUp ${inView ? ' fadeInUp' : null}`}>
                    <h2>{siteMetaData.title}</h2>
                    <p>Professional and reliable mobile auto detailing at your door.</p>
                    <Link to="/schedule-service"className="btn-get-started text-white">Schedule Now</Link>
                </Container>
            </div>
        </section>
    )
}

export default Hero
