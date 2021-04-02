import {useState, useContext} from 'react';

import Link from "next/link";

import {CardDeck, Card } from 'react-bootstrap';

import StateContext from '../components/contexts/stateContext';

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';


import Rating from "@material-ui/lab/Rating";

import StarBorderIcon from "@material-ui/icons/StarBorder";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

const useStyles = makeStyles(() => ({
  greyButton: {
    color: '#4f4e4e',
    '&:hover': {
    color: "#888080",
  },
},
  orangeButton: {
    background: "#f38704",
    color: "#ffffff",
    "&:hover": {
      background: "#ffa753",
      color: "#ffffff",
    },
  },
}));

export default function MyCardDeck ( {cardData} ) {
    const styles = useStyles();
    const appState = useContext(StateContext);

    return (
      <CardDeck>
        {cardData.map((tile) => (
          <Card key={tile.sys.id} variant="outlined">
            <Link href="#!">
              <a>
                <Card.Img variant="top" src={tile.fields.img.fields.file.url ? tile.fields.img.fields.file.url : "https://res.cloudinary.com/hellodewa/image/upload/v1616337289/Moviecritics/images/sys/defaults/default-poster-1_gwh2dq.jpg"} alt={tile.title} height={240} />
              </a>
            </Link>
            <Card.Body className="text-center pb-1">
              <Card.Title style={{ height: "30px" }}>
                <Link href="#!">
                  <a className="link">
                    <h6>{tile.fields.title}</h6>
                  </a>
                </Link>
              </Card.Title>
              <Card.Text>
                <p>{tile.fields.year}</p>
                <Box component="fieldset" mb={2} borderColor="transparent">
                  <Rating name="read-only" value={tile.fields.ratings} precision={0.1} readOnly emptyIcon={<StarBorderIcon fontSize="inherit" />} />
                </Box>
              </Card.Text>
              <div>
                <Button className={`mt-sm-2 ${styles.orangeButton}`} variant="contained" disableElevation fullWidth>
                  <AddBoxOutlinedIcon className="mr-sm-2" /> Watchlist
                </Button>
                <Button href={tile.fields.url} disableElevation fullWidth className={`${styles.greyButton} mt-sm-2 mb-sm-2`}>
                  <PlayArrowRoundedIcon className="mr-sm-2" /> Trailer
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    );
}
