import * as React from "react"
import Carousel from 'react-bootstrap/Carousel'
import { Container } from "react-bootstrap"
import { useInView } from "react-intersection-observer"

const reviews = [
  {id: 1, name: "W. Neal Hollington", review: "Had my veichle detailed this past week and came out great! Cameron was very great and trustworthy. and the attention to detail was phenomenal! "},
  {id: 2, name: "Laruren Hollington", review: " Great Service! They did a full interior and exterior detail on my Jeep Grand Cherokee and came out perfect. The attention to detail is great, Recommend them to anyone!  "},
  {id: 3, name: "Todd Hellweg", review: " They did an amazing job on my vehicle,Would recommended them to anyone."}
]

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: .1,
    triggerOnce: true
  })

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <Container className={`animated animatedFadeInUp ${inView ? ' fadeInUp' : null}`}>
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
      </Container>
    </section>
  )
}

export default Testimonials
