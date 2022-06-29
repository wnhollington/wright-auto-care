import * as React from "react"
import Carousel from 'react-bootstrap/Carousel'
import { Container } from "react-bootstrap"

const reviews = [
  {id: 1, name: "W. Neal Hollington", review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque. "},
  {id: 2, name: "Laruren Hollington", review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque. "},
  {id: 3, name: "Todd Hellweg", review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque. "}
]

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <div className="section-title">
      <h2>Testimonials</h2>
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
