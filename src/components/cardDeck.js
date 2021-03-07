import {useState} from 'react';
import Link from "next/link";
import {CardDeck, Card } from 'react-bootstrap';

import Button from "@material-ui/core/Button";

import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";

export default function MyCardDeck ( {cardData} ) {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <CardDeck>
        {cardData.map((tile, index) => (
          <Card key={index}>
            <Link href="#!">
              <a>
                <Card.Img variant="top" src={tile.img ? tile.img : "/images/movies/defaults/default-poster-1.jpg"} alt={cardData.title} />
              </a>
            </Link>
            <Card.Body className="text-center">
              <Card.Title>
                <h6>{tile.title}</h6>
              </Card.Title>
              <Card.Text>
                <p>{tile.genre}</p>
                <p>{tile.year}</p>
                <p>{tile.charPlayed}</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button className="mt-sm-2" style={{ background: "#fd7e14", color: "#ffffff" }}>
                <AddBoxOutlinedIcon className="mr-sm-2" /> Watchlist
              </Button>
              <Link href="#!">
                <a target="_blank">
                  <Button className="mt-sm-2 mb-sm-2">
                    <PlayArrowRoundedIcon className="mr-sm-2" /> Trailer
                  </Button>
                </a>
              </Link>
            </Card.Footer>
          </Card>
        ))}
      </CardDeck>
    );
}
