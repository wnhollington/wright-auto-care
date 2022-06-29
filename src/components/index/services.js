import * as React from "react"
import CarService from '../../images/svg/car-service.svg'
import CarWash from '../../images/svg/car-wash.svg'

const Services = () => (
    <section id="services" className="services">
        <div className="container">

            <div className="section-title">
            <h2>Services</h2>
            </div>

            <div className="row">
            <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><CarService style={{height: 51}}/></div>
                <h4 className="title">Interior Services</h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>

            <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><CarWash style={{height: 51, fill: "blue"}}/></div>
                <h4 className="title">Exterior Services</h4>
                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>

            <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><i className="bi bi-box-seam"></i></div>
                <h4 className="title">Detailing Packages</h4>
                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
            </div>

        </div>

    </section>
)

export default Services