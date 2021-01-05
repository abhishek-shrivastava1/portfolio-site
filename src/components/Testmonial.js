import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import { StyledAbout } from "../Styles";
import { testimonialData } from "../Data";

const Testimonial = () => {
  return (
    <StyledTestimonial>
      <h2>
        My <span>testimonials</span>.
      </h2>
      <Carousel>
        {testimonialData.map((data) => (
          <Carousel.Item interval={2000} key={data.id}>
            <div className="screen">
              <a href={data.profileLink}>
                <img src={data.image} alt={data.name} />
              </a>
            </div>
            <Carousel.Caption>
              <a href={data.profileLink}>
                <h3>{data.name}</h3>
              </a>
              <p>{data.testimonial}</p>
              <p>{data.date}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </StyledTestimonial>
  );
};

const StyledTestimonial = styled(StyledAbout)`
  display: block;
  h2 {
    margin-bottom: 3rem;
  }

  a {
    text-decoration: none;
  }

  p {
    padding: 0;
  }
  .screen {
    width: 100%;
    height: 70vh;
    vertical-align: center;
    padding-top: 2rem;
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      height: 150px;
      width: 150px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

export default Testimonial;
