import {useState} from 'react';

import MainNav from '../shared/nav';

import {Navbar} from 'react-bootstrap';
import {Dropdown} from "react-bootstrap";
import {Form, FormControl, InputGroup } from 'react-bootstrap';

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import RecentActorsRoundedIcon from '@material-ui/icons/RecentActorsRounded';
import TheatersRoundedIcon from '@material-ui/icons/TheatersRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import DesktopWindowsRoundedIcon from '@material-ui/icons/DesktopWindowsRounded';
import PhoneIphoneRoundedIcon from '@material-ui/icons/PhoneIphoneRounded';
import TurnedInNotRoundedIcon from '@material-ui/icons/TurnedInNotRounded';

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

    const [anchor, setAnchor] = useState(null);

    const handleClick = (event) => {
      setAnchor(event.currentTarget);
    };

    const handleClose = () => {
      setAnchor(null);
    };

    return (
    <>
    <Navbar className="bg-light justify-content-between mr-4g ml-4" expand="lg" variant="light">
    <MainNav/>

    <Form inline>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1" onClick={handleClick}>All</InputGroup.Text>
        
                </InputGroup.Prepend>
                <FormControl placeholder="Search..." aria-label="Search" aria-describedby="basic-addon1" className="mr-sm-2" />
                {/* <Button variant="contained"  style={{background: "#FF8C00"}} color="primary" component="span">Search</Button> */}
              </InputGroup>
            </Form>
            <Button className="ml-sm-2">  
              <TurnedInNotRoundedIcon/> Watchlist
            </Button>
            <Button className="ml-sm-4">
              Login
            </Button>
            <Button variant="contained" style={{background: "#FF8C00"}} color="primary" component="span" className="mr-sm-2 ml-sm-4">
              Sign up
            </Button>

    </Navbar>
    </>
    )
}

export default Header;