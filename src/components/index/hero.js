import * as React from "react"
import { useSiteMetadata } from "../../utilities/use-site-metadata"

const Hero = () => {
    const siteMetaData = useSiteMetadata()
    return (
        <section id="hero">
            <div class="hero-container">

                <div class="carousel-item active">
                    <div class="carousel-container">
                    <div class="carousel-content container">
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
