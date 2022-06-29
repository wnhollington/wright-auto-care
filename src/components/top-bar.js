import * as React from "react"

import { useSiteMetadata } from "../utilities/use-site-metadata"

const TopBar = () => {
    const siteMetadata = useSiteMetadata()

    return (
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
                <i className="bi bi-envelope-fill"></i><a href={`mailto:${siteMetadata.contact.email}`}>{siteMetadata.contact.email}</a>
                <i className="bi bi-phone-fill phone-icon"></i>{siteMetadata.contact.phone}
            </div>
            <div className="social-links d-none d-md-block">
                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            </div>
            </div>
        </section>
    )
}

export default TopBar
