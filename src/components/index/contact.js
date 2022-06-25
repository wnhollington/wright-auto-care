import * as React from "react"
import { PopupButton } from "react-calendly"

const About = () => (
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2>Contact Us</h2>
        </div>

        <div class="row">

          <div class="col-lg-6 d-flex">
            <div class="info-box">
              <i class="bx bx-calendar"></i>
              <h3>Schedule Now</h3>
              <PopupButton
                url="https://calendly.com/wnhollington/case-consultation"
                rootElement={document.getElementById("___gatsby")}
                text="Schedule Now"
                className="btn btn-primary"
              />
            </div>
          </div>

          <div class="col-lg-3 d-flex">
            <div class="info-box">
              <i class="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>contact@example.com</p>
            </div>
          </div>

          <div class="col-lg-3 d-flex">
            <div class="info-box ">
              <i class="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+1 6678 254445 41</p>
            </div>
          </div>

        </div>

      </div>
    </section>
)

export default About
