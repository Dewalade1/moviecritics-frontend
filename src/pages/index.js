import Link from 'next/link';

import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";

import Layout from '../layouts/layout';
import MyCarousel from '../../src/components/carousel';
import CardList from '../../src/components/cardList';
import { fetchEntries, singleEvent } from "../../public/data/config";

// import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

export default function Home({response}) {

  const tileData = [{
        img: "/images/movies/posters/thy-will-be-done-1.jpg",
        title: 'First slide label', 
        desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.", 
        url: "https://www.youtube.com/watch?v=QqLsF9miflw",
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/movies/posters/citation.jpg",
        title: 'Third slide label', 
        desc: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
        url: "https://www.youtube.com/watch?v=1eMAYynMc1w", 
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/movies/posters/In-every-way.jpg",
        title: 'Fourth slide label', 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        url:"https://www.youtube.com/watch?v=sz2dmMyeX04",
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/movies/posters/your-excellency.jpg",
        title: 'Fifth slide label', 
        desc: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
        url: "https://www.youtube.com/watch?v=pAMUldixCu4", 
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/movies/posters/espionage.jpg",
        title: 'Sixth slide label', 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        url: "https://www.youtube.com/watch?v=_OfNjzLLZUo",
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/movies/posters/put-a-ring-on-it.webp",
        title: 'Seventh slide label', 
        desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.", 
        url: "https://www.youtube.com/watch?v=FGwXDed3VwA",
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/movies/posters/kambili.jpg",
        title: 'Second slide label', 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        url: "https://www.youtube.com/watch?v=jqRpjk0m4_c",
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/movies/posters/the-wedding-party.webp",
        title: 'Eighth slide label', 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        url: "https://www.youtube.com/watch?v=zbnXd-zCD6I",
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/movies/posters/so-in-love.jpg",
        title: 'Ninth slide label', 
        desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.", 
        url: "https://www.youtube.com/watch?v=kkbCleVJq7U",
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/movies/posters/angels-heart.jpg",
        title: "Angel's Heart", 
        desc: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.o", 
        url: "https://www.youtube.com/watch?v=z-WIAD4LgnI",
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/movies/posters/bonds-of-love.jpg",
        title: "Bonds of Love", 
        desc: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.o", 
        url: "https://www.youtube.com/watch?v=oIoWY9sTeEQ",
        author: "Dewa Ade-Onojobi"
    }]

  return (
    <Layout>
      <Card className="text-center">
        {/* put card in carousel for titles */}
        <MyCarousel tileData={tileData} />
      </Card>

      <Row className="mt-4">
        <Col>
            <Card className="mb-4 pl-2" variant="outlined">
              <CardContent>
                <CardHeader title="Celebrities" />
                  <CardDeck>
                    {response.map((data) => (
                        <CardList tileData={data} key={data.sys.id} />
                    ))}
                  </CardDeck>
              </CardContent>
            </Card>

        </Col>
      </Row>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetchEntries('celebs');

  const response = await res.map((celeb) => {
    return celeb;
  });

  return {
    props: {
      response,
    },
  };
}