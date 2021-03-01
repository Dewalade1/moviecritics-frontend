import clsx from 'clsx';

import Link from 'next/Link';

import React, {useState} from 'react';

import {Navbar, Nav} from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import TheatersRoundedIcon from '@material-ui/icons/TheatersRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import DesktopWindowsRoundedIcon from '@material-ui/icons/DesktopWindowsRounded';
import PhoneIphoneRoundedIcon from '@material-ui/icons/PhoneIphoneRounded';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function MainNav () {
    const classes = useStyles();
    const [state, setState] = useState({
        left: false,
    });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


    return (
      <>
        <Navbar.Brand href="#home">
          <div className="ml-4 pl-4">
            <img src="/images/logos/moviecritics-logo-white-background.png" width={140} height={40} className="d-inline-block align-top" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="mr-auto">
            <div>
              <div>
                <Button onClick={toggleDrawer("left", true)}>
                  {" "}
                  <MenuRoundedIcon /> Menu
                </Button>
                <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
                  <div className={clsx(classes.list)} role="presentation" onClick={toggleDrawer("left", false)} onKeyDown={toggleDrawer("left", false)}>
                    <List>
                      <ListItem>{" "} </ListItem>
                      <ListItem>
                        <div className="ml-sm-6">
                          <Link href="#home">
                            <a>
                              <img src="/images/logos/moviecritics-logo-white-background.png" width={140} height={40} className="d-inline-block align-top" />
                            </a>
                          </Link>
                        </div>
                      </ListItem>
                      <ListItem>{" "} </ListItem>
                      <ListItem>
                        <ListItemText primary="Menu" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <HomeRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <TheatersRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Movies" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <PeopleRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Celebs" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <InfoRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="About Us" />
                      </ListItem>
                    </List>
                    <Divider />
                    <List>
                      <ListItem>
                        <ListItemText primary="Apps" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <PhoneIphoneRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mobile Apps" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <DesktopWindowsRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Desktop Apps" />
                      </ListItem>
                    </List>
                  </div>
                </Drawer>
              </div>
            </div>
          </Nav>
      </>
    );
}