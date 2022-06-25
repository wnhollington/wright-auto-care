import * as React from "react"
import { useSiteMetadata } from "../utilities/use-site-metadata"

const Footer = () => {
    const siteMetadata = useSiteMetadata()

    return (
        <footer id="footer">
            <div class="container">
                <div class="copyright">
                    &copy; Copyright <strong><span>{siteMetadata.title}</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer
