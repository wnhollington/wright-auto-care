import * as React from "react"
import { useSiteMetadata } from "../utilities/use-site-metadata"
import {BsEnvelopeFill, BsPhoneFill, BsTwitter, BsFacebook, BsInstagram} from "react-icons/bs"

const TopBar = () => {
    const siteMetadata = useSiteMetadata()

    return (
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
                <BsEnvelopeFill/><a href={`mailto:${siteMetadata.contact.email}`}>{siteMetadata.contact.email}</a>
                <BsPhoneFill className="phone-icon"/>{siteMetadata.contact.phone}
            </div>
            <div className="social-links d-none d-md-block">
                <a href="#" className="twitter"><BsTwitter/></a>
                <a href="#" className="facebook"><BsFacebook/></a>
                <a href="#" className="instagram"><BsInstagram/></a>
            </div>
            </div>
        </section>
    )
}

export default TopBar
