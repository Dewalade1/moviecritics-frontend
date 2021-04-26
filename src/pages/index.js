import { Row, Col, CardDeck } from "react-bootstrap";

import Layout from '../layouts/layout';
import MyCarousel from '../../src/components/carousel';
import CardList from '../../src/components/cardList';
import { fetchEntries} from "../../public/data/config";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: 14,
  }
});

export default function Home({celebs, carouselData}) {
  const classes = useStyles();

  return (
    <Layout>
      <div className="ml-4 pl-4 mr-4 pr-4 mt-lg-4 pt-2">
        <div className="ml-4 pl-4 mr-4 pr-4 mt-lg-4 pt-4">
      <Card className={`text-center ${classes.root}`}  variant="outlined" id="main-carouselgit">
        <MyCarousel tileData={carouselData} home />
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
      </div>
      </div>
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