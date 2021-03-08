import {useState, useContext} from 'react';
import Link from "next/link";
import {CardDeck, Card } from 'react-bootstrap';

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import StateContext from '../components/contexts/stateContext';

import Rating from "@material-ui/lab/Rating";

import StarBorderIcon from "@material-ui/icons/StarBorder";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

export default function MyCardDeck ( {cardData} ) {

    const appState = useContext(StateContext);
    const index = appState.index;

    return (
      <CardDeck>
        {cardData.map((tile, index) => (
          <Card key={index}>
            <Link href="#!">
              <a>
                <Card.Img variant="top" src={tile.img ? tile.img : "/images/movies/defaults/default-poster-1.jpg"} alt={tile.title} height={260} />
              </a>
            </Link>
            <Card.Body className="text-center pb-1">
              <div>
                <Card.Title style={{ height: "50px" }}>
                  <Link href="#!">
                    <a style={{ color: "#fd7e14" }}>
                      <h6>{tile.title}</h6>
                    </a>
                  </Link>
                </Card.Title>
                <Card.Text>
                  <p>{tile.genre}</p>
                  <p>{tile.year}</p>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={tile.rating} precision={0.1} readOnly emptyIcon={<StarBorderIcon fontSize="inherit" />} />
                  </Box>
                </Card.Text>
              </div>
            </Card.Body>
            <Card.Footer className="text-center pl-2 pr-2">
              <Button className="mt-sm-2" fullWidth style={{ background: "#fd7e14", color: "#ffffff" }}>
                <AddBoxOutlinedIcon className="mr-sm-2" /> Watchlist
              </Button>
              <Button href={tile.url} className="mt-sm-2 mb-sm-2" style={{ color: "#4f4e4e" }}>
                <PlayArrowRoundedIcon className="mr-sm-2" /> Trailer
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </CardDeck>
    );
}
