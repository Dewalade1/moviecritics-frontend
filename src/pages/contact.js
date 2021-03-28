import React from 'react';

import Link from 'next/link';

import Layout from '../layouts/layout';

import styles from "../../styles/contact.module.css";

import { Row, Col } from "react-bootstrap";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "60ch",
    },
  },
}));

export default function Contact () {
    const classes = useStyles();

    return (
      <div id={styles.contactLayout}>
        <Layout>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <Card variant="outlined">
                <CardContent className="text-center">
                  <h5>
                    <b className="orange-color"> Let's talk </b>
                  </h5>
                  <form className={classes.root} noValidate autoComplete="off">
                    <div>
                      <TextField autoFocus margin="dense" required id="first-name" label="First Name" defaultValue="" variant="outlined" />
                      <TextField margin="dense" required id="last-name" label="Last Name" defaultValue="" variant="outlined" />
                      <TextField margin="dense" helperText="E.g. user1234" id="username" label="Username" defaultValue="" variant="outlined" fullWidth />
                      <TextField helperText="E.g. +234 800 000 0000" id="phone-number" defaultValue="" label="Phone Number" margin="dense" variant="outlined" />
                      <TextField required id="email" helperText="E.g. example@email.com" label="Email" type="search" variant="outlined" />
                      <TextField required id="message" label="Message" multiline rows={6} defaultValue="" placeholder="Please enter your message here..." helperText="Enter your mesage here" variant="outlined" />
                    </div>
                  </form>
                </CardContent>
                <CardActions className="pl-4 pr-4">
                  <Button href="mailto:team@ellopod.com" variant="contained" color="primary" disableElevation size="large" className={` ${styles.orangeBtn} orange-button col-12 d-flex justify-content-center`}>
                    Submit
                  </Button>
                </CardActions>
                <CardContent className="ml-4 mr-4 pl-4 pr-4 text-center">
                  You can also contact us via telephone at{" "}
                  <Link href="tel:+2348103874982">
                    <a target="_blank" className="link">
                      {" "}
                      +234 810-387-4982{" "}
                    </a>
                  </Link>{" "}
                  or email at{" "}
                  <Link href="mailto:team@ellopod.com">
                    <a target="_blank" className="link">
                      team@ellopod.com
                    </a>
                  </Link>
                  .
                </CardContent>
              </Card>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Layout>
      </div>
    );
}