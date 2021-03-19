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

    return (
      <CardDeck>
        {cardData.map((tile) => (
          <Card key={tile.sys.id}>
            <Link href="#!">
              <a>
                <Card.Img variant="top" src={tile.fields.img.fields.file.url ? tile.fields.img.fields.file.url : "/images/movies/defaults/default-poster-1.jpg"} alt={tile.title} height={230} />
              </a>
            </Link>
            <Card.Body className="text-center pb-1">
              <Card.Title style={{ height: "35px" }}>
                <Link href="#!">
                  <a style={{ color: "#fd7e14" }}>
                    <h6>{tile.fields.title}</h6>
                  </a>
                </Link>
              </Card.Title>
              <Card.Text>
                <p>{tile.fields.genre + " "}</p>
                <p>{tile.fields.year}</p>
                <Box component="fieldset" mb={2} borderColor="transparent">
                  <Rating name="read-only" value={tile.fields.ratings} precision={0.1} readOnly emptyIcon={<StarBorderIcon fontSize="inherit" />} />
                </Box>
              </Card.Text>
              <div>
                <Button className="mt-sm-2" fullWidth style={{ background: "#fd7e14", color: "#ffffff" }}>
                  <AddBoxOutlinedIcon className="mr-sm-2" /> Watchlist
                </Button>
                <Button href={tile.fields.url} className="mt-sm-2 mb-sm-2" style={{ color: "#4f4e4e" }}>
                  <PlayArrowRoundedIcon className="mr-sm-2" /> Trailer
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    );
}
