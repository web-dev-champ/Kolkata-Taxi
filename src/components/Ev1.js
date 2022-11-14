import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slid1 from './images/MaaDurga.jpg';
import Slid2 from './images/gd.jpg';
import Slid3 from './images/Victoria.jpg';

export default function Ev1() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slid1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 color="black">Durga Puja Tour</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slid2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Full Site Seeing of Kolkata</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slid3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Historical Monuments of Kolkata</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
