import React from "react";

import Link from 'next/Link';

import { Form, FormControl } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

import Button from "@material-ui/core/Button";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import RedditIcon from "@material-ui/icons/Reddit";


const Footer = () => {
  return (
    <footer style={{ background: "#4f4e4e", color: "#ffffff" }} className="font-small pt-4 mt-4">
      <div className="pr-4 pl-4 pt-4 mt-4 pb-4 mb-4">
        <Container fluid className="text-center text-md-left4 mr-4 ml-4 pl-4">
          <Row>
            <Col md="2" className="text-left mt-4 pt-2">
              <ul>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Privacy Policy</a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Terms</a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Help</a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md="2" className="text-left">
              <h6 className="title" style={{ color: "#A9A9A9" }}>
                Quick Links
              </h6>
              <ul>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Home</a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>About Us</a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Actors</a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Genres</a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md="2" className="text-left">
              <h6 className="title" style={{ color: "#A9A9A9" }}>
                Our Apps
              </h6>
              <ul>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Android App</a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Ios App</a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Desktop Apps</a>
                  </Link>
                </li>
              </ul>
            </Col>

            <Col md="2" className="text-left">
              <h6 className="title" style={{ color: "#A9A9A9" }}>
                Tops
              </h6>
              <ul>
                <li className="list-unstyled ">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Top Movies</a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Top Celebs</a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Top Genres</a>
                  </Link>
                </li>
              </ul>
            </Col>

            <Col md="2" className="text-left">
              <h6 className="title" style={{ color: "#A9A9A9" }}>
                Movies
              </h6>
              <ul>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Yoruba</a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Igbo</a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Hausa</a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Christian</a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>Islamic</a>
                  </Link>
                </li>
              </ul>
            </Col>

            <Col md="2" className="text-left">
              <h6 className="title" style={{ color: "#A9A9A9" }}>
                Follow us
              </h6>
              <ul>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>
                      <FacebookIcon /> Facebook
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>
                      <TwitterIcon /> Twitter
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>
                      <InstagramIcon /> Instagram
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>
                      <YouTubeIcon /> YouTube
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link href="#!">
                    <a style={{ color: "#ffffff" }}>
                      <RedditIcon /> Reddit
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-copyright text-right py-3 pt-4 pb-4" style={{ background: "#403f3f" }}>
        <div className="mr-4 pr-4 ml-4 pl-4">
          <Container fluid>
            <Row>
              <Col>
                <div inline>
                  <FormControl inline fullWidth type="text" placeholder="Sign up for our Newsletter..." className="mr-1" />
                </div>
              </Col>
              <Col className="text-left">
                <Button type="submit" variant="contained" style={{ background: "#FF8C00" }} color="primary" component="span" className="mr-sm-2">
                  Join now
                </Button>
              </Col>
              <Col className=" pr-4 mr-4" style={{ color: "#A9A9A9" }}>
                <h6>
                  &copy; {new Date().getFullYear()}{" "}
                  <Link href="#">
                    <a style={{ color: "#ffffff" }} className=" pr-4 mr-4">
                      {" "}
                      Ellopod Consulting{" "}
                    </a>
                  </Link>
                  Made in Lagos, Nigeria
                </h6>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
