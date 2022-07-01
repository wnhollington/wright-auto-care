import * as React from "react"

const accordion = [
  {id: 1, name: "Schedule Your Appointment", text: "Set up your appointment with one of our professional mobile detailers.  You can call, email, text, or schedule your appointment directment from our website."},
  {id: 2, name: "Consult with one of our professional mobile detailers", text: "After you schedule your appointment, you will meet with one of our experienced mobile detailers.  We will discuss your expectations and clarify precisely what package and services best suit your needs.  You will never get hit with any unexpected or hidden fees from us.  We offer simple, straigthforward and flat fee services."},
  {id: 3, name: "Mobile Detailing Begins", text: "After you decide your detailing package, we will get to work.  Note: If you are scheduling an exterior clean, we will need access to a water source."},
  {id: 4, name: "Review and Approve", text: "Once we complete your clean, we will have you review our work to make sure that all of your expectations have been met."}

]
const Faq = () => (
    <section id="faq" className="faq section-bg">
      <div className="container">

        <div className="section-title">
          <h2>How it Works</h2>
        </div>

        <div className="row  d-flex align-items-stretch">

          <div className="accordion" id="accordionExample">
            {
              accordion.map((item) => {
                return (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="true" aria-controls={`collapse${item.id}`}>{item.id}. {item.name}</button>
                    </h2>
                    <div id={`collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${item.id}`} data-bs-parent="#accordionExample">
                      <div className="accordion-body">{item.text}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>

      </div>
    </section>
)

export default Faq