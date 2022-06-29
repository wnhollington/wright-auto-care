import * as React from "react"
import { useSiteMetadata } from "../../utilities/use-site-metadata"

const Hero = () => {
    const siteMetaData = useSiteMetadata()
    return (
        <section id="hero">
            <div className="hero-container">

                <div className="carousel-item active">
                    <div className="carousel-container">
                    <div className="carousel-content container">
                        <h2>{siteMetaData.title}</h2>
                        <p>Professional and reliable mobile auto detailing at your door.</p>
                    </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
