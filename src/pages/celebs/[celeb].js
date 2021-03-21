import React, {useContext, useEffect} from 'react';

import Axios from 'axios';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { Container, Row, Col } from "react-bootstrap";

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import ListItem from '@material-ui/core/ListItem';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ListItemText from '@material-ui/core/ListItemText';
import CardActionArea from '@material-ui/core/CardActionArea';

import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import ThumbDownRoundedIcon from "@material-ui/icons/ThumbDownRounded";

import Layout from '../../layouts/layout';
import MyCarousel from '../../components/carousel';
import ImageGridList from '../../components/imageGridList';
import MyCardDeck from "../../components/cardDeck";
import DialogBtn from '../../components/buttons/dialogButton';
import {fetchEntries, singleEntryBySlug} from '../../../public/data/config';

import DispatchContext from '../../components/contexts/dispatchContext';
import StateContext from '../../components/contexts/stateContext';


Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function Celebs({celeb, otherCelebs}) {

  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const router = useRouter()
  const { Celebs } = router.query
  
  useEffect( () => {
    appDispatch({type: "setAsLearnMoreBtn"})
  }, [])
    
  return (
    <Layout>
      {Boolean(celeb) ? (
      <div className="pl-4 pr-4 mb-4">
        <Row>
          <Col>
            <Card className="mt-4 mb-4" variant="outlined">
              <CardActionArea>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      <img src={celeb.fields.avatar ? "https://" + celeb.fields.avatar.fields.file.url : "https://res.cloudinary.com/hellodewa/image/upload/v1616337289/Moviecritics/images/sys/defaults/default-celeb-image_fi3aeb.png"} height={40} width={40} alt="M" />
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
                  subheader={celeb.fields.positions}
                />
                <MyCarousel tileData={celeb.fields.img1} />
                <CardContent className="mt-4">
                  <Typography gutterBottom variant="h4" component="h2" style={{color:"#FF8C00"}}>
                    Bio
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" noWrap>
                    {celeb.fields.bio}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <DialogBtn btnData={appState.infoBtn} celebData={celeb.fields}/>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mb-4" variant="outlined">
              <CardContent>
                <CardHeader title="Photos" style={{color:"#FF8C00"}}/>
                <ImageGridList imgData={celeb.fields.img1} />
              </CardContent>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mb-4" variant="outlined">
              <CardContent>
                <CardHeader title="Top Rated Movies" style={{color:"#FF8C00"}}/>
                <MyCardDeck cardData={celeb.fields.movies} />
              </CardContent>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <Card className="mb-4" variant="outlined">
              <CardContent>
                <CardHeader title="Filmology" style={{color:"#FF8C00"}} />
                <Divider flexItem />
                <CardMedia key={1} component="img" alt="Filmology List" image="https://res.cloudinary.com/hellodewa/image/upload/v1616334474/Moviecritics/images/celebs/Ramsey-Noah/ramson-filmology_wewd3t.png" />
              </CardContent>
              <CardActions >
                <DialogBtn btnData={appState.infoBtn} celebData={celeb.fields}/>
              </CardActions>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mb-4" style={{ height: "64em" }} variant="outlined">
              <CardHeader title="Other Celebrities" style={{color:"#FF8C00"}}/>
              <CardContent children="true">
                  {otherCelebs ? (
                    otherCelebs.map((others) => { 
                      <Link href={`/celebs/${others.url}`} >
                        <a>
                          <Card key={others.id} variant="outlined">
                            <CardHeader title={others.name}/>
                            <CardContent>
                          <Typography variant="body1" color="text-secondary" className="pt-4 mb-4" component="p" minheight={900}>
                            {others.name}
                          </Typography>
                          </CardContent>
                          </Card>
                        </a>
                      </Link>
                  })) : ""}
              </CardContent>
            </Card>
          </Col>
        </Row>
      </div>
      ) : ''}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const rawCeleb = await singleEntryBySlug(params.celeb);
  const celeb = rawCeleb.[0]
  
  const rawOtherCelebs = await fetchEntries('celebs');
  const otherCelebs = await rawOtherCelebs.map((otherCeleb) => {
    return {id: otherCeleb.sys.id, name: otherCeleb.fields.name, url: otherCeleb.fields.url};
  });

  return { props: { celeb, otherCelebs } };
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
