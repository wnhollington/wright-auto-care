import * as React from "react"

import { useSiteMetadata } from "../utilities/use-site-metadata"

const TopBar = () => {
    const siteMetadata = useSiteMetadata()

    return (
        <section id="topbar" class="d-flex align-items-center">
            <div class="container d-flex justify-content-center justify-content-md-between">
            <div class="contact-info d-flex align-items-center">
                <i class="bi bi-envelope-fill"></i><a href="mailto:contact@example.com">{siteMetadata.contact.email}</a>
                <i class="bi bi-phone-fill phone-icon"></i>{siteMetadata.contact.phone}
            </div>
            <div class="social-links d-none d-md-block">
                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            </div>
            </div>
        </section>
    )
}

export default TopBar
