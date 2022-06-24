import * as React from "react"
import { PopupButton } from "react-calendly"
import { useSiteMetadata } from "../utilities/use-site-metadata"

const Footer = () => {
    const siteMetadata = useSiteMetadata()

    return (
        <>
            <footer id="footer">
                <div class="footer-top">
                <div class="container">
                    <div class="row">

                    <div class="col-lg-3 col-md-6 footer-info">
                        <h3>Mamba</h3>
                        <p>
                            {siteMetadata.description}<br/><br/>
                        <strong>Phone:</strong>{siteMetadata.contact.phone}<br/>
                        <strong>Email:</strong>{siteMetadata.contact.email}<br/>
                        </p>
                        <div class="social-links mt-3">
                        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Schedule Service</h4>
                        <p>Ready to schedule your vehicle's service?  It's easy!  Simply click on the following link to choose your service package, the date of service, and a convenient time for us to meet you.  We look forward to working with you soon!</p>
                        <PopupButton 
                            url="https://calendly.com/wnhollington/case-consultation"
                            rootElement={document.getElementById("___gatsby")}
                            text="Schedule Now"
                            className="btn btn-primary"
                        />

                    </div>

                    </div>
                </div>
                </div>

                <div class="container">
                <div class="copyright">
                    &copy; Copyright <strong><span>Mamba</span></strong>. All Rights Reserved
                </div>
                <div class="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
                </div>
            </footer>
            <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
        </>
    )
}

export default Footer
