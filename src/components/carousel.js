import {useState} from 'react';
import Link from 'next/link';

import {Carousel} from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function MyCarousel({tileData}) {
  const [index, setIndex] = useState(0);
  const classes = useStyles();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {tileData.map((tile, index) => { 

        let link = '';

          if (tile.fields.trailerUrl) {
            const link = tile.fields.trailerUrl
          } else if (tile.fields.description) {
            const link = tile.fields.description
          } else {
            const link = tile.fields.file.url
          }


          return(          
            <Carousel.Item key={tile.sys.id}>
                <Link href={tile.fields.trailerUrl ? tile.fields.trailerUrl : link}>
                  <a target="_blank">
                    <img
                        className={`d-block w-100`}
                        src={tile.fields.media1 ? tile.fields.media1.fields.file.url : tile.fields.file.url}
                        alt={tile.fields.title}
                        width={700}
                        height={600}
                    />
                  </a>
                </Link>
                <Carousel.Caption className={{root: classes.titleBar, title: classes.title,}}>
                    <h3>{tile.fields.title}</h3>
                    <p>{tile.fields.description1}</p>
                </Carousel.Caption>
            </Carousel.Item>  
        );
    })}
    </Carousel>
    </>
  );
}