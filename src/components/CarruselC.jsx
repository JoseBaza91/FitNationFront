import Carousel from "react-bootstrap/Carousel";

const CarouselC = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1500}
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://plus.unsplash.com/premium_photo-1664300904586-a51d4cbd2b8a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1500}
          />
          <Carousel.Caption>
      
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={1500} />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselC;
