import React from 'react';

import Axios from 'axios';

import { useRouter } from 'next/router'

import Layout from '../../layouts/layout';
import MyCarousel from '../../components/carousel';
import ImageGridList from '../../components/imageGridList';
import MyCardDeck from "../../components/cardDeck";
import DialogBtn from '../../components/buttons/dialogButton';
import {fetchEntries, singleId} from '../../../public/data/config';

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
   const { cel } = router.query

    const tileData = {
      name: "Ramsey Nouah",
      positions: ["Actor", "Director", "Producer"],
      likes: "30k",
      dislikes: "2k",
      favs: "10k",
      bio: ['In 1996, he made his major screen movie debut in the well received Silent Night after performing in a few Nigeria home videos (now widely known as Nollywood) projects which never got released due to lack of completion funds and related issues. Succeeded by numerous Nigerian home video projects where he mainly played romantic roles, from the 1990\'s through the early 2000\'s; Nouah was quickly labelled "Lover Boy". In 2004, he starred in Dangerous Twins (2004) and his stellar performance as a good and bad twin, Taiye and Kehinde, projected him as a multi layered actor capable of much more his "Lover Boy" image had suggested. By then, his fame had transcend the shores of Nigeria and was exceeding Africa.', "His face was on numerous movie posters and his performance progressively got stronger and attracted acclaim as he sold millions of Nigerian home video (which was straight to DVD) projects within lovers of African entertainment. He is an African household name that won't be forgotten for his immense contribution to the African entertainment industry at large. In 2009, he portrayed a socially awkward fresh graduate in The Figurine (2009). He is often regarded as one of Africa's greatest actor of all time.", "With an amazing talent and acting range, he has managed to remain new and fresh even after more than two decades in the industry. He has won numerous awards for his acting and contribution to the African entertainment industry in Nigeria and around the world. In 2010, he won Best Actor at the African Movie Academy Awards for his performance in The Figurine (2009).He is a one of the few active pioneers and ambassador of the laudable Nigerian movie industry also known as Nollywood. His burning desire to add to the creative growth of Nollywood and African cinema led to his founding a movie production company called Ramseyfilms."],
      img: {
        celeb: [
          {
            img: "/images/celebs/Ramsey-Noah/ramseynouah-2.jpg",
            url: "/images/celebs/Ramsey-Noah/ramseynouah-2.jpg",
            author: "Dewa Ade-Onojobi",
          },
          {
            img: "/images/celebs/Ramsey-Noah/ramson-bckd.jpg",
            url: "/images/celebs/Ramsey-Noah/ramson-bckd.jpg",
            author: "Dewa Ade-Onojobi",
          },
          {
            img: "/images/celebs/Ramsey-Noah/ramseynouah-3.jpg",
            url: "/images/celebs/Ramsey-Noah/ramseynouah-3.jpg",
            author: "Dewa Ade-Onojobi",
          },
          {
            img: "/images/celebs/Ramsey-Noah/ramseynouah-4.jpg",
            url: "/images/celebs/Ramsey-Noah/ramseynouah-4.jpg",
            author: "Dewa Ade-Onojobi",
          },
          {
            img: "/images/celebs/Ramsey-Noah/ramseynouah-5.jpg",
            url: "/images/celebs/Ramsey-Noah/ramseynouah-5.jpg",
            author: "Dewa Ade-Onojobi",
          },
          {
            img: "/images/celebs/Ramsey-Noah/ramseynouah-6.jpg",
            url: "/images/celebs/Ramsey-Noah/ramseynouah-6.jpg",
            author: "Dewa Ade-Onojobi",
          },
          {
            img: "/images/celebs/Ramsey-Noah/ramseynouah-7.jpg",
            url: "/images/celebs/Ramsey-Noah/ramseynouah-7.jpg",
            author: "Dewa Ade-Onojobi",
          },
          {
            img: "/images/celebs/Ramsey-Noah/ramseynouah-8.jpg",
            url: "/images/celebs/Ramsey-Noah/ramseynouah-8.jpg",
            author: "Dewa Ade-Onojobi",
          },
          {
            img: "/images/celebs/Ramsey-Noah/ramseynouah-9.jpg",
            url: "/images/celebs/Ramsey-Noah/ramseynouah-9.jpg",
            author: "Dewa Ade-Onojobi",
          },
          {
            img: "/images/celebs/Ramsey-Noah/angels-heart.jpg",
            url: "https://www.youtube.com/watch?v=z-WIAD4LgnI",
            author: "Dewa Ade-Onojobi",
          },
        ],
        movies: [
          {
            img: "/images/celebs/Ramsey-Noah/media/merry-men-2.jpg",
            url: "https://www.youtube.com/watch?v=thx-M3hTGLs",
            title: "Merry Men 2",
            year: "2019",
            genre: "Action | Comedy",
            rating: 4.0,
          },
          {
            img: "/images/celebs/Ramsey-Noah/media/living-in-bondage-poster.jpg",
            url: "https://www.youtube.com/watch?v=IhvJG_c8Kgw",
            title: "Living in Bondage II",
            year: "2019",
            genre: "Drama",
            rating: 3.5,
          },
          {
            img: "/images/celebs/Ramsey-Noah/media/soul-tie.jpg",
            url: "https://www.youtube.com/watch?v=7wE5o_RFPDE",
            title: "Soul Tie",
            year: "2017",
            genre: "Drama",
            rating: 4.5,
          },
          {
            img: "/images/celebs/Ramsey-Noah/media/my-wife-and-i.jpg",
            url: "https://www.youtube.com/watch?v=IKP2IXIeJPE",
            title: "My Wife and I",
            year: "2017",
            genre: "Comedy | Family",
            rating: 2.0,
          },
          {
            img: "/images/celebs/Ramsey-Noah/media/body-language.jpg",
            url: "https://www.youtube.com/watch?v=LfpyNi1_dqE",
            title: "Body Language",
            year: "2017",
            genre: "Drama | Thriller",
            rating: 3.2,
          },
          {
            img: "/images/celebs/Ramsey-Noah/media/gbomo-gbomo-express.jpg",
            url: "https://www.youtube.com/watch?v=Vi3N9B97m38",
            title: "Gbomo Gbomo Express",
            year: "2015",
            genre: "Comedy | Crime",
            rating: 5.0,
          },
        ],
      },
      btn: {
        btnText: "Learn More",
        fullWidth: true,
        maxWidth: "md",
        dialogFooterBtn: false,
      },
    };
    
  return (
    <Layout>
      {/* console.log(celebs) */}
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
                      {celebs.fields.dislikes}
                      <Tooltip title="Dislike" placement="top">
                        <IconButton aria-label="dislike">
                          <ThumbDownRoundedIcon />
                        </IconButton>
                      </Tooltip>
                      {celebs.fields.favs}
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
                  title={celebs.fields.name}
                  subheader="Actor | Director | Producer"
                />
                <MyCarousel tileData={celebs.fields.img.celeb} />
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
                <ImageGridList imgData={celebs.fields.img.celeb} />
              </CardContent>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mb-4">
              <CardContent>
                <CardHeader title="Top Rated Movies" />
                <MyCardDeck cardData={celebs.fields.movies} />
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
  const celebs = await singleId(params.celeb);

  return { props: { celebs } };
}

export async function getStaticPaths() {

  const celeb = await fetchEntries('celebs')
  const paths = celeb.map((celeb) => ({
      params: {celeb: celeb.sys.id}
  }))
  return {
      paths,
      fallback: true
  }
}
