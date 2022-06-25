import * as React from "react"
import Carousel from 'react-bootstrap/Carousel'
import { Container } from "react-bootstrap"

const reviews = [
  {name: "W. Neal Hollington", review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque. "},
  {name: "Laruren Hollington", review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque. "},
  {name: "Todd Hellweg", review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque. "}
]

const Testimonials = () => (
  <section id="testimonials" class="testimonials">
    <div class="section-title">
      <h2>Testimonials</h2>
    </div>
    <Container>
    <Carousel variant="dark">
      {
        reviews.map((item) => {
          return (
            <Carousel.Item>
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
