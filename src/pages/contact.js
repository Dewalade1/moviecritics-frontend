import React from 'react';

import clsx from 'clsx';

import Link from 'next/link';

import Layout from '../layouts/layout';

import styles from "../../styles/contact.module.css";

import {useImmer} from "use-immer";

import { Row, Col } from "react-bootstrap";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      display: 'flex',
      flexWrap: 'wrap',
    },
    '& label.Mui-focused': {
      color: '#f38704',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#f38704',
      },
    },
  },
  cardRoot: {
    borderRadius: 10,
    borderTopWidth: 5,
    borderTopStyle: "solid",
    borderTopColor: "#f38704",
  },
  orangeBtn: {
    background: "#FF8C00",
    color: "#ffffff",
    marginLeft: 40,
    marginRight:40,
    "&:hover": {
    background: "#ffa753",
    color: "#e4e9fd",
    marginLeft: 40,
    marginRight:40,
    },
},

}));

export default function Contact () {
    const classes = useStyles();
    const [state, setState] = useImmer({
        messageSent: false,
        contactMessage: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            phoneNo: "",
            title: "",
            message: "",
        },
    });

    const handleFirstNameChange = (event) => {
        setState((draft) => {
            draft.contactMessage.firstName = event.target.value
        });
    };

    const handleLastNameChange = (event) => {
        setState((draft) => {
            draft.contactMessage.LastName = event.target.value
        });
    };

    const handleUsernameChange = (event) => {
        setState((draft) => {
            draft.contactMessage.username = event.target.value
        });
    };

    const handleEmailChange = (event) => {
        setState((draft) => {
            draft.contactMessage.email = event.target.value
        });
    };

    const handleTitleChange = (event) => {
        setState((draft) => {
            draft.contactMessage.title = event.target.value
        });
    };

    const handleMessageChange = (event) => {
        setState((draft) => {
            draft.contactMessage.Message = event.target.value
        });
    };

    const handlePhoneNumberChange = (event) => {
        setState((draft) => {
            draft.contactMessage.phoneNo = event.target.value
        });
    };


    function deployMessageSentCard () {
        setState((draft) => {
            draft.messageSent = true;
        });
    }

    return (
      <div id={styles.contactLayout}>
        <Layout>
            <div className="ml-4 pl-4 mr-4 pr-4 mt-lg-4 pt-2">
            <div className="ml-4 pl-4 mr-4 pr-4 mt-lg-4 pt-4">
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
                 <Card variant="outlined" className={classes.cardRoot}>

                {state.messageSent ? (
                <>
                    <CardContent className="text-center pl-4 pr-4 pt-4">
                        <img src="https://res.cloudinary.com/hellodewa/image/upload/v1617048262/Moviecritics/images/sys/comms/message-sent-transparent-background_jyavbk.png" className="large-icon mt-4 pt-2 orange-color"/>
                        <h3 className="mb-4 mt-4 pb-2">
                            <b className="orange-color"> Thank you </b>
                        </h3>
                        <p className="ml-4 mr-4 pb-4 pt-2">
                            Your message has been sent. Someone from our support team will get in touch soon
                        </p>
                        <Link href="/">
                            <a target="_blank" className="link mt-4 pt-4">
                                <ArrowBackRoundedIcon/> {" "}Back to Home
                            </a>
                        </Link>
                    </CardContent>
                </>
                ) : (
                <>
                <CardContent className="text-center">
                  <h3 className="mb-4 mt-4 pb-2 pt-2 orange-color">
                    Let's talk
                  </h3>
                  <form className={`${classes.root} mr-4 ml-4 pr-4 pl-4`} autoComplete="off">
                      <Row >
                        <Col>
                            <TextField autoFocus margin="dense" fullWidth required  id="first-name" label="First Name" value={state.contactMessage.firstName} variant="outlined" onChange={handleFirstNameChange} />
                        </Col>
                        <Col>
                            <TextField margin="dense" required id="last-name" fullWidth label="Last Name" value={state.contactMessage.lastName} variant="outlined" onChange={handleLastNameChange}  />
                        </Col>
                      </Row>
                       <TextField margin="dense"  helperText="e.g. user1234" id="username" label="Username" value={state.contactMessage.username} variant="outlined" fullWidth onChange={handleUsernameChange} />
                      <Row >
                        <Col md={6}>
                            <TextField helperText="e.g. +234 800 000 0000"  id="phone-number" value={state.contactMessage.phoneNo} label="Phone Number" margin="dense" variant="outlined" onChange={handlePhoneNumberChange} />
                        </Col>
                        <Col md={6}>
                            <TextField margin="dense" required id="email" helperText="e.g. example@email.com" label="Email" value={state.contactMessage.email} variant="outlined"  onChange={handleEmailChange}  />
                        </Col>
                      </Row>
                      <TextField margin="dense" id="title" label="Title" value={state.contactMessage.title} fullWidth placeholder="Enter the title of your message" variant="outlined"  onChange={handleTitleChange}  />
                      <TextField margin="dense" required id="message" label="Message" fullwidth multiline rows={7} value={state.contactMessage.message} placeholder="Please enter your message here..." helperText="Enter your mesage here" variant="outlined" onChange={handleMessageChange} />
                  </form>
                </CardContent>
                <CardActions className="pl-4 pr-4">
                  <Button href="mailto:team@ellopod.com" variant="contained" color="primary" onClick={deployMessageSentCard} disableElevation size="large" className={` ${classes.orangeBtn}`} fullWidth>
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
                </>
                )}
                </Card>
            </Col>
            <Col md={3}></Col>
          </Row>
          </div>
          </div>
        </Layout>
      </div>
    );
}