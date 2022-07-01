import * as React from "react"
import CarService from '../../images/svg/car-service.svg'
import CarWash from '../../images/svg/car-wash.svg'

const Services = () => (
    <section id="services" className="services"
        data-sal="fade"
        data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
    >
        <div className="container">

            <div className="section-title">
            <h2>Services</h2>
            </div>

            <div className="row">
            <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><CarService style={{height: 51}}/></div>
                <h4 className="title">Interior Services</h4>
                <p className="description">We provide a full range of interior detailing services.  From vaccuuming and shampooing to sanitizing and conditioning, we provide detailed packages to keep your vehicle looking as good as new.</p>
            </div>

            <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><CarWash style={{height: 51, fill: "blue"}}/></div>
                <h4 className="title">Exterior Services</h4>
                <p className="description">Like our interior packages, we provide a full range of exterior detailing services.  From simple rinses to wax and and tire shines, we have what you need to make your ride look like it is right off the lot.</p>
            </div>

            <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><i className="bi bi-box-seam"></i></div>
                <h4 className="title">Detailing Packages</h4>
                <p className="description">You can combine any of our interior and exterior packages.  We aim to provide you with custom package options to suit your individual needs.</p>
            </div>
            </div>

        </div>

    </section>
)

export default Services