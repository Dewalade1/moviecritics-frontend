import {useState} from 'react';
import Link from 'next/link';

import {Carousel} from 'react-bootstrap';

export default function MyCarousel({tileData}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {tileData.map((tile, index) => { 
          return(           
            <Carousel.Item key={index}>
                <Link href={tile.url ? tile.url : tile.fields.file.url}>
                  <a target="_blank">
                    <img
                        className="d-block w-100"
                        src={tile.img ? tile.img : tile.fields.file.url}
                        alt={tile.title ? tile.title : tile.fields.title}
                        width={700}
                        height={600}
                    />
                  </a>
                </Link>
            </Carousel.Item>  
        );
    })}
    </Carousel>
    </>
  );
}