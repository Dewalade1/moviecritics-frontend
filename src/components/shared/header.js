import {useState} from 'react';

import MainNav from '../shared/nav';

import {Navbar} from 'react-bootstrap';
import {Form, FormControl, InputGroup } from 'react-bootstrap';

import Button from "@material-ui/core/Button";
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import Menu from "@material-ui/core/Menu";
import Badge from "@material-ui/core/Badge";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InputBase from '@material-ui/core/InputBase';
import IconButton from "@material-ui/core/IconButton";

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import TurnedInNotRoundedIcon from '@material-ui/icons/TurnedInNotRounded';
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


//
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function Header () {

     const classes = useStyles();
    const [anchor, setAnchor] = useState(null);

    const handleClick = (event) => {
      setAnchor(event.currentTarget);
    };

    const handleClose = () => {
      setAnchor(null);
    };

    return (
      <>
        <Navbar className="bg-light justify-content-between pr-4 pl-4" expand="lg" variant="light">
          <MainNav />
          <Form inline>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1" onClick={handleClick}>
                  All
                </InputGroup.Text>
              </InputGroup.Prepend>
              <div className={classes.search}>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
                <div className={classes.searchIcon}>
                  <SearchRoundedIcon inline />
                </div>
              </div>
              {/* <FormControl placeholder="Search..." aria-label="Search" aria-describedby="basic-addon1" className="mr-sm-2" />
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon2" onClick={handleClick}><SearchRoundedIcon/></InputGroup.Text>
                </InputGroup.Prepend> */}
              {/* <Button variant="contained"  style={{background: "#FF8C00"}} color="primary" component="span">Search</Button> */}
            </InputGroup>
          </Form>
          <IconButton aria-label="notifications" component="span" className="ml-2 mr-2">
            <Badge badgeContent={9} color="error">
              <NotificationsRoundedIcon />
            </Badge>
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <div className="mr-4 pr-4">
            <Button className="ml-sm-2">
              <TurnedInNotRoundedIcon /> Watchlist
            </Button>
            <Button className="ml-sm-4">Login</Button>
            <Button variant="contained" style={{ background: "#FF8C00" }} color="primary" component="span" className="mr-4 ml-4">
              Sign up
            </Button>
          </div>
        </Navbar>
      </>
    );
}

export default Header;