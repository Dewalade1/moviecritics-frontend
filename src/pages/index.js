import { Row, Col, CardDeck } from "react-bootstrap";

import Layout from '../layouts/layout';
import MyCarousel from '../../src/components/carousel';
import CardList from '../../src/components/cardList';
import { fetchEntries} from "../../public/data/config";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

export default function Home({celebs, carouselData}) {

  return (
    <Layout>
      <Card className="text-center"  variant="outlined" id="main-carouselgit">
        <MyCarousel tileData={carouselData} />
      </Card>

      <Row className="mt-4" id="celebrities">
        <Col>
            <Card className="mb-4 pl-2" variant="outlined">
              <CardContent>
                <CardHeader title="Celebrities" className="orange-color"/>
                  <CardDeck>
                    {celebs.map((data) => (
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
  const rawCelebs = await fetchEntries('celebs');
  const celebs = await rawCelebs.map((celeb) => {
    return celeb;
  });

  const rawCarouselData = await fetchEntries('carousel');
  const carouselData = await rawCarouselData.map((data) => {
      return data;
  });

  return {
    props: {
      celebs,
      carouselData,
    },
  };
}