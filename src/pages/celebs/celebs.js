import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../layouts/layout';

import { Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';


export default function Home() {
    
  return (
    <Layout>
        <div className="pl-4 pr-4 mt-4 mb-4">
            <Row>
                <Col>
            <Card className="mt-4 mb-4">
      <CardActionArea>
          <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <img src="/images/celebs/Ramsey-Noah/ramseynouah-1.jpg" height={40} width={40} alt="R"/>
          </Avatar>
        }
        action={
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
        </CardActions>
        }
        title="Ramsey Noah"
        subheader="Actor | Director | Producer"
      />
        <CardMedia key={0}
          component="img"
          alt="Ramsey Noah"
          height="500"
          image="/images/celebs/Ramsey-Noah/ramson-bckd.jpg"
          title="Ramsey Nouah"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Bio
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>
                In 1996, he made his major screen movie debut in the well received Silent Night after performing 
                in a few Nigeria home videos (now widely known as Nollywood) projects which never got 
                released due to lack of completion funds and related issues. Succeeded by numerous Nigerian home 
                video projects where he mainly played romantic roles, from the 1990's through the early 2000's; 
                Nouah was quickly labelled "Lover Boy". In 2004, he starred in Dangerous Twins (2004) and his stellar 
                performance as a good and bad twin, Taiye and Kehinde, projected him as a multi layered actor capable 
                of much more his "Lover Boy" image had suggested. By then, his fame had transcend the shores of Nigeria 
                and was exceeding Africa.
            </p>
            <p> 
                His face was on numerous movie posters and his performance progressively got stronger and attracted 
                acclaim as he sold millions of Nigerian home video (which was straight to DVD) projects within lovers 
                of African entertainment. He is an African household name that won't be forgotten for his immense 
                contribution to the African entertainment industry at large. In 2009, he portrayed a socially awkward 
                fresh graduate in The Figurine (2009). He is often regarded as one of Africa's greatest actor of all time.
            </p>
            <p>
                With an amazing talent and acting range, he has managed to remain new and fresh even after more than two 
                decades in the industry. He has won numerous awards for his acting and contribution to the African entertainment 
                industry in Nigeria and around the world. In 2010, he won Best Actor at the African Movie Academy Awards for his 
                performance in The Figurine (2009).He is a one of the few active pioneers and ambassador of the laudable Nigerian 
                movie industry also known as Nollywood. His burning desire to add to the creative growth of Nollywood and African 
                cinema led to his founding a movie production company called Ramseyfilms.
            </p>
            <p>
                Nouah blends developing slates of films under his production company with starring in various genres of films that 
                appeals to him. In 2015, Nouah will be seen in '76 (2016).
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" style={{color: "#FF8C00"}}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Col>
    </Row>
        </div>
    </Layout>
  )
}
