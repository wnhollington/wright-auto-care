import * as React from "react"
import { useSiteMetadata } from "../../utilities/use-site-metadata"
import { Link } from "gatsby"

const Hero = () => {
    const siteMetaData = useSiteMetadata()
    return (
        <section id="hero" className="hero">
            <div className="hero-container">
                <div className="carousel-item active">
                    <div className="carousel-container">
                    <div className="carousel-content container">
                        <h2>{siteMetaData.title}</h2>
                        <p>Professional and reliable mobile auto detailing at your door.</p>
                        <Link to="/schedule-service"className="btn btn-primary text-white">Schedule Now</Link>
                    </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
