import {useState} from 'react';
import Link from 'next/link';

import Carousel from 'react-bootstrap/Carousel';

export default function MyCarousel({tileData}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      {tileData.map((tile) => { 
          return(           
            <Carousel.Item>
                <Link href={tile.url}>
                  <a target="_blank">
                    <img
                        className="d-block w-100"
                        src={tile.img}
                        alt={tile.title}
                        width={700}
                        height={600}
                    />
                  </a>
                </Link>
                <Carousel.Caption>
                <h3>{tile.title}</h3>
                <p>{tile.desc}</p>
                </Carousel.Caption>
            </Carousel.Item>  
        );
    })}
    </Carousel>
  );
}