import * as React from "react"
import Carousel from 'react-bootstrap/Carousel'
import { Container } from "react-bootstrap"

const reviews = [
  {id: 1, name: "W. Neal Hollington", review: "Had my veichle detailed this past week and came out great! Cameron was very great and trustworthy. and the attention to detail was phenomenal! "},
  {id: 2, name: "Laruren Hollington", review: " Great Service! They did a full interior and exterior detail on my Jeep Grand Cherokee and came out perfect. The attention to detail is great, Recommend them to anyone!  "},
  {id: 3, name: "Todd Hellweg", review: " They did an amazing job on my vehicle,Would recommended them to anyone."}
]

const Testimonials = () => (
  <section id="testimonials" className="testimonials"
    data-sal="fade"
    data-sal-duration="2000" // changes duration of the animation (from 200 to 2000 ms)
    data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
    data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
  >
    <div className="section-title">
      <h2>Reviews</h2>
      <p>See what our customers are saying</p>
    </div>
    <Container>
      <Carousel variant="dark">
        {
          reviews.map((item) => {
            return (
              <Carousel.Item key={item.id}>
                <Carousel.Caption>
                  <h5>{item.name}</h5>
                  <p>{item.review}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </Container>
  </section>
)

export default Testimonials
