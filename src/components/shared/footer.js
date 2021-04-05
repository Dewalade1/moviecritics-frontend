import React, {useState, useContext} from "react";

import Link from 'next/link';

import { FormControl } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

import footerStyles from '../../../styles/layout/footer.module.css';

import AppleLoginBtn from '../shared/logins/appleLogin';
import GoogleLoginBtn from '../shared/logins/googleLogin';
import FacebookLoginBtn from '../shared/logins/facebookLogin';
import TwitterLoginBtn from '../shared/logins/twitterLogin';

import DispatchContext from '../contexts/dispatchContext';

import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import DialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import RedditIcon from "@material-ui/icons/Reddit";
import SecurityIcon from "@material-ui/icons/Security";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import BarChartRoundedIcon from "@material-ui/icons/BarChartRounded";
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import RemoveFromQueueOutlinedIcon from "@material-ui/icons/RemoveFromQueueOutlined";
import AddToQueueOutlinedIcon from "@material-ui/icons/AddToQueueOutlined";
import PersonalVideoOutlinedIcon from "@material-ui/icons/PersonalVideoOutlined";
import TvOutlinedIcon from "@material-ui/icons/TvOutlined";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles(() => ({
  signUpForm: {
    '& label.Mui-focused': {
      color: '#f38704',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#f38704',
      },
    },
  },
  emailSubscribeForm: {
    '&:focus': {
        borderColor: '#f38704',
    },
  },
  orangeBtn: {
    background: "#FF8C00",
    color: "#ffffff",
    "&:hover": {
    background: "#ffa753",
    color: "#ffffff",
    },
},
}));


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={`${classes.closeButton} transparent-button mr-2`} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Footer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const appDispatch = useContext(DispatchContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (event, index) => {
      appDispatch({type: "changeNavSelectedIndex", index: index});
  };


  return (
    <footer className={`font-small pt-4 mt-4`} id={footerStyles.footer}>
      <div className="pr-4 pl-4 pt-4 pb-4 mb-4">
        <Container fluid className="text-center text-md-left4 mr-4 ml-4 pl-4 pt-4 mt-4">
          <div className="text-left mb-4">
            <Link href="/">
              <a>
                <img src="https://res.cloudinary.com/hellodewa/image/upload/v1616575432/Moviecritics/images/logos/moviecritics-dark-grey-logo-transparent-background_k8fdw5.png" width={170} height={50} className="mb-4 ml-4 align-top" />
              </a>
            </Link>
          </div>
          <Row>
            <Col md="2" className="text-left mt-4 pt-2">
              <ul>
                <li className="list-unstyled ">
                  <Link href="/legal/privacy">
                    <a className={footerStyles.link}>
                      <SecurityIcon className={`ml-1 ${footerStyles.extraIcon}`} /> Privacy Policy
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="/legal/terms">
                    <a className={footerStyles.link}>
                      <DescriptionRoundedIcon className={`ml-1 ${footerStyles.extraIcon}`} /> Terms
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="/help">
                    <a className={footerStyles.link}>
                      <HelpOutlineRoundedIcon className={`ml-1 mr-1 ${footerStyles.extraIcon}`} />
                      Help
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="/contact">
                    <a className={footerStyles.link}>
                      <MailOutlineRoundedIcon className={`ml-1 mr-1 ${footerStyles.extraIcon}`} />
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md="2" className="text-left">
              <h6 className={`pl-4 ml-2 ${footerStyles.title}`}>Quick links</h6>
              <ul>
                <li className="list-unstyled ">
                  <Link href="/">
                    <a className={footerStyles.link} onClick={(event) => handleListItemClick(event, 0)}>
                      {" "}
                      <HomeOutlinedIcon className={`ml-1 mr-1 ${footerStyles.quickLinksIcon}`} />
                      Home
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="/about-us">
                    <a className={footerStyles.link} onClick={(event) => handleListItemClick(event, 4)}>
                      {" "}
                      <InfoOutlinedIcon className={`ml-1 mr-1 ${footerStyles.quickLinksIcon}`} />
                      About Us
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="/celebs/celebs" onClick={(event) => handleListItemClick(event, 2)}>
                    <a className={footerStyles.link}>
                      {" "}
                      <PeopleOutlinedIcon className={`ml-1 mr-1 ${footerStyles.quickLinksIcon}`} />
                      Celebs
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="/genre" onClick={(event) => handleListItemClick(event, 1)}>
                    <a className={footerStyles.link}>
                      {" "}
                      <BarChartRoundedIcon className={`ml-1 mr-1 ${footerStyles.quickLinksIcon}`} />
                      Genres
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md="2" className="text-left">
              <h6 className={`pl-4 ml-2 ${footerStyles.title}`}>Our Apps</h6>
              <ul>
                <li className="list-unstyled ">
                  <Link href="/app/android">
                    <a className={footerStyles.link} onClick={(event) => handleListItemClick(event, 5)}>
                      {" "}
                      <PhoneAndroidIcon className={`ml-1 mr-1 ${footerStyles.ourAppsIcon}`}/>
                      Android App
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="/app/ios">
                    <a className={footerStyles.link} onClick={(event) => handleListItemClick(event, 5)}>
                      {" "}
                      <PhoneIphoneIcon className={`ml-1 mr-1 ${footerStyles.ourAppsIcon}`}/>
                      Ios App
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="/app/desktop">
                    <a className={footerStyles.link} onClick={(event) => handleListItemClick(event, 6)}>
                      {" "}
                      <DesktopMacIcon className={`mr-1 ${footerStyles.ourAppsIcon}`} /> Desktop Apps
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>

            <Col md="2" className="text-left">
              <h6 className={`pl-4 ml-1 ${footerStyles.title}`}>Tops</h6>
              <ul>
                <li className="list-unstyled ">
                  <Link href="/tops/movies">
                    <a className={footerStyles.link} onClick={(event) => handleListItemClick(event, 3)}>
                      <TheatersOutlinedIcon className={`mr-1 ${footerStyles.topsIcon}`} />
                      Top Movies
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="/tops/celebs">
                    <a className={footerStyles.link} onClick={(event) => handleListItemClick(event, 3)}>
                      <AccountCircleOutlinedIcon className={`mr-1 ${footerStyles.topsIcon}`} />
                      Top Celebs
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="/tops/genres">
                    <a className={footerStyles.link} onClick={(event) => handleListItemClick(event, 3)}>
                      <BarChartRoundedIcon className={`mr-1 ${footerStyles.topsIcon}`} />
                      Top Genres
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>

            <Col md="2" className="text-left">
              <h6 className={`pl-4 ml-2 ${footerStyles.title}`}>Movies</h6>
              <ul>
                <li className="list-unstyled ">
                  <Link href="/movies/yoruba">
                    <a className={footerStyles.link} onClick={(event) => handleListItemClick(event, 1)}>
                      <RemoveFromQueueOutlinedIcon className={`mr-2 ${footerStyles.moviesIcon}`}/>
                      Yoruba
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="/movies/igbo">
                    <a className={footerStyles.link} onClick={(event) => handleListItemClick(event, 1)}>
                      <AddToQueueOutlinedIcon className={`mr-2 ${footerStyles.moviesIcon}`} />
                      Igbo
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="/movies/hausa">
                    <a className={footerStyles.link} onClick={(event) => handleListItemClick(event, 1)}>
                      <PersonalVideoOutlinedIcon className={`mr-2 ${footerStyles.moviesIcon}`} />
                      Hausa
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="/movies/christian">
                    <a className={footerStyles.link} onClick={(event) => handleListItemClick(event, 1)}>
                      <TvOutlinedIcon className={`mr-2 ${footerStyles.moviesIcon}`} />
                      Christian
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="/movies/islamic">
                    <a className={footerStyles.link} onClick={(event) => handleListItemClick(event, 1)}>
                      <OndemandVideoOutlinedIcon className={`mr-2 ${footerStyles.moviesIcon}`} />
                      Islamic
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>

            <Col md="2" className="text-left">
              <h6 className={`pl-4 ml-1 ${footerStyles.title}`}>Follow us</h6>
              <ul>
                <li className="list-unstyled ">
                  <Link href="#!">
                    <a className={footerStyles.link}>
                      <FacebookIcon className={footerStyles.followUsIcon} /> Facebook
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="#!">
                    <a className={footerStyles.link}>
                      <TwitterIcon className={footerStyles.followUsIcon} /> Twitter
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="#!">
                    <a className={footerStyles.link}>
                      <InstagramIcon className={footerStyles.followUsIcon} /> Instagram
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="#!">
                    <a className={footerStyles.link}>
                      <YouTubeIcon className={footerStyles.followUsIcon} /> YouTube
                    </a>
                  </Link>
                </li>
                <li className="list-unstyled ">
                  <Link href="#!">
                    <a className={footerStyles.link}>
                      <RedditIcon className={footerStyles.followUsIcon} /> Reddit
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-copyright text-right py-3" id={footerStyles.bottomFooter}>
        <div className="mr-4 pr-4 ml-4 pl-4">
          <Container fluid>
            <Row>
              <Col>
                <div inline="true">
                  <FormControl inline="true" type="text" placeholder="Sign up for our Newsletter..." className={`mr-1 ${classes.emailSubscribeForm}`} />
                </div>
              </Col>
              <Col className="text-left">
                <div>
                  <Button type="submit" variant="contained" disableElevation className="mr-sm-2" id={footerStyles.orangeFooterButton} component="span" onClick={handleClickOpen}>
                    Join now
                  </Button>
                  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle className='ml-2' id="customized-dialog-title" onClose={handleClose} inline>
                      Sign Up
                    </DialogTitle>
                    <DialogContent dividers>
                      <Col>
                        <AppleLoginBtn />
                        <GoogleLoginBtn />
                        <FacebookLoginBtn />
                        <TwitterLoginBtn />
                      </Col>
                    </DialogContent>
                    <DialogContent dividers>
                      <DialogContentText className='ml-4'>Or enter your details below:</DialogContentText>
                      <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
                      <Col>
                        <Row>
                          <Col>
                            <TextField autoFocus className={classes.signUpForm} variant="outlined" margin="dense" id="first name" label="First Name" type="text" fullWidth />
                          </Col>
                          <Col>
                            <TextField variant="outlined" className={classes.signUpForm} margin="dense" id="last name" label="Last Name" type="text" fullWidth />
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <TextField variant="outlined" margin="dense" className={classes.signUpForm} id="email" label="Email Address" type="email" fullWidth />
                      </Col>
                      <Col>
                        <TextField type="password" variant="outlined" margin="dense" className={classes.signUpForm} id="password" label="Password" fullWidth />
                      </Col>
                      <Col>
                        <Button variant="contained" color="primary" disableElevation size="large" className={`mt-2 mb-2 ${classes.orangeBtn}`} fullWidth>
                          Sign Up
                        </Button>
                      </Col>
                      <Row>
                        <Col className="ml-4 mr-4 pl-4 pr-4 mt-2 text-center">
                          By signing up, you agree to our{" "}
                          <Link href="/#">
                            <a target="_blank" className="link">
                              {" "}
                              Terms of Service{" "}
                            </a>
                          </Link>{" "}
                          and acknowledge our{" "}
                          <Link href="/#">
                            <a target="_blank" className="link">
                              Privacy Policy.
                            </a>
                          </Link>
                        </Col>
                      </Row>
                    </DialogContent>
                    <DialogActions className='mr-4'>
                      <Button className='transparent-button' onClick={handleClose} color="primary" disableElevation>
                        Cancel
                      </Button>
                      <Button className='transparent-button' onClick={handleClose} color="primary" disableElevation>
                        Subscribe
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </Col>
              <Col className="pr-4 mr-4 pt-2" id={footerStyles.bottomFooter}>
                <h6>
                  &copy; {new Date().getFullYear()}{" "}
                  <Link href="#">
                    <a className={` pr-4 mr-4 ${footerStyles.link}`}> Ellopod Consulting </a>
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
