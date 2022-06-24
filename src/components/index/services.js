import * as React from "react"
import CarService from '../../images/svg/car-service.svg'
import CarWash from '../../images/svg/car-wash.svg'

const Services = () => (
    <section id="services" class="services">
        <div class="container">

            <div class="section-title">
            <h2>Services</h2>
            </div>

            <div class="row">
            <div class="col-lg-4 col-md-6 icon-box">
                <div class="icon"><CarService style={{height: 51}}/></div>
                <h4 class="title"><a href="">Interior Services</a></h4>
                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>

            <div class="col-lg-4 col-md-6 icon-box">
                <div class="icon"><CarWash style={{height: 51, fill: "blue"}}/></div>
                <h4 class="title"><a href="">Exterior Services</a></h4>
                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>

            <div class="col-lg-4 col-md-6 icon-box">
                <div class="icon"><i class="bi bi-box-seam"></i></div>
                <h4 class="title"><a href="">Detailing Packages</a></h4>
                <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
            <div style={{textAlign: "center"}}><a href="#about" class="btn btn-primary">View All</a></div>
            </div>

        </div>
    </section>
)

export default Services