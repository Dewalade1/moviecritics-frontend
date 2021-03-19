import React from 'react';

import Axios from 'axios';

import { useRouter } from 'next/router'

import Layout from '../../layouts/layout';
import MyCarousel from '../../components/carousel';
import ImageGridList from '../../components/imageGridList';
import MyCardDeck from "../../components/cardDeck";
import DialogBtn from '../../components/buttons/dialogButton';
import {fetchEntries, singleEntryBySlug} from '../../../public/data/config';

import { Container, Row, Col } from "react-bootstrap";

import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import ThumbDownRoundedIcon from "@material-ui/icons/ThumbDownRounded";

Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function Celebs({celeb}) {

   const router = useRouter()
   const { Celebs } = router.query

    const tileData = {
      btn: {
        btnText: "Learn More",
        fullWidth: true,
        maxWidth: "md",
        dialogFooterBtn: false,
      },
    };
    
  return (
    <Layout>
      <div className="pl-4 pr-4 mb-4">
        <Row>
          <Col>
            <Card className="mt-4 mb-4">
              <CardActionArea>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      <img src={celeb.fields.avatar ? "https://" + celeb.fields.avatar.fields.file.url : "/images/movies/defaults/default-poster-1.jpg"} height={40} width={40} alt="M" />
                    </Avatar>
                  }
                  action={
                    <CardActions disableSpacing>
                      {celeb.fields.likes}
                      <Tooltip title="Like" placement="top">
                        <IconButton aria-label="like">
                          <ThumbUpRoundedIcon />
                        </IconButton>
                      </Tooltip>
                      {celeb.fields.dislikes}
                      <Tooltip title="Dislike" placement="top">
                        <IconButton aria-label="dislike">
                          <ThumbDownRoundedIcon />
                        </IconButton>
                      </Tooltip>
                      {celeb.fields.favs}
                      <Tooltip title="Add to Favourites" placement="top">
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Share" placement="top">
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                      </Tooltip>
                    </CardActions>
                  }
                  title={celeb.fields.name}
                  subheader={celeb.fields.positions + '  '}
                />
                <MyCarousel tileData={celeb.fields.img1} />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    Bio
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {celeb.fields.bio}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <DialogBtn btnData={tileData} />
              </CardActions>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mb-4">
              <CardContent>
                <CardHeader title="Photos" />
                <ImageGridList imgData={celeb.fields.img1} />
              </CardContent>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mb-4">
              <CardContent>
                <CardHeader title="Top Rated Movies" />
                <MyCardDeck cardData={celeb.fields.movies} />
              </CardContent>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <Card className="mb-4">
              <CardContent>
                <CardHeader title="Filmology" />
                <Divider flexItem />
                <CardMedia key={1} component="img" alt="Filmology List" image="/images/celebs/Ramsey-Noah/ramson-filmology.png" />
              </CardContent>
              <CardActions>
                <DialogBtn btnData={tileData} />
              </CardActions>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mb-4" style={{ minHeight: "64em" }}>
              <CardContent>
                <CardHeader title="Related Celebrities" />
                <Typography variant="body2" className="pt-4" component="p" minheight={900}>
                  <p className="ml-4 mb-4 mt-4">
                    <a href="#" style={{ color: "#403f3f" }}>
                      Dawn Thandeka King
                    </a>
                  </p>
                  <p className="ml-4 mb-4 mt-4">
                    <a href="#" style={{ color: "#403f3f" }}>
                      Tumi Morake
                    </a>
                  </p>
                  <p className="ml-4 mb-4 mt-4">
                    <a href="#" style={{ color: "#403f3f" }}>
                      Idris Sultan
                    </a>
                  </p>
                  <p className="ml-4 mb-4 mt-4">
                    <a href="#" style={{ color: "#403f3f" }}>
                      Fabian Adeoye Lojede
                    </a>
                  </p>
                  <p className="ml-4 mb-4 mt-4">
                    <a href="#" style={{ color: "#403f3f" }}>
                      Uchemba Williams
                    </a>
                  </p>
                  <p className="ml-4 mb-4 mt-4">
                    <a href="#" style={{ color: "#403f3f" }}>
                      Trevor Gumbi
                    </a>
                  </p>
                  <p className="ml-4 mb-4 mt-4">
                    <a href="#" style={{ color: "#403f3f" }}>
                      Shaleen Surtie-Richards
                    </a>
                  </p>
                  <p className="ml-4 mb-4 mt-4">
                    <a href="#" style={{ color: "#403f3f" }}>
                      Leroy Gopal
                    </a>
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const rawCeleb = await singleEntryBySlug(params.celeb);
  const celeb = rawCeleb.[0]
  console.log(celeb.fields.movies)

  return { props: { celeb } };
}

export async function getStaticPaths() {

  const celebs = await fetchEntries('celebs')
  const paths = celebs.map((celeb) => ({
      params: {celeb: celeb.fields.url}
  }))
  return {
      paths,
      fallback: true
  }
}
