import clsx from 'clsx';

import Link from 'next/link';

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
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [state, setState] = useState({
        left: false,
    });

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


    return (
      <>
        <Navbar.Brand href="/">
          <div className="ml-4 pl-4">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1616334478/Moviecritics/images/logos/moviecritics-logo-white-background_kisl9f.png" width={140} height={40} className="d-inline-block align-top" />
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
                    <ListItem> </ListItem>
                    <ListItem>
                      <div className="ml-sm-6">
                        <Link href="/">
                          <a>
                            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1616334478/Moviecritics/images/logos/moviecritics-logo-white-background_kisl9f.png" width={140} height={40} className="d-inline-block align-top" />
                          </a>
                        </Link>
                      </div>
                    </ListItem>
                    <ListItem> </ListItem>
                    <ListItem>
                      <ListItemText primary="Menu" />
                    </ListItem>
                    <Link href="/">
                      <a style={{ color: "#000000" }}>
                        <ListItem button selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                          <ListItemIcon>
                            <HomeRoundedIcon />
                          </ListItemIcon>
                          <ListItemText primary="Home" />
                        </ListItem>
                      </a>
                    </Link>
                    <Link href="/movies">
                      <a style={{ color: "#000000" }}>
                        <ListItem button selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                          <ListItemIcon>
                            <TheatersRoundedIcon />
                          </ListItemIcon>
                          <ListItemText primary="Movies" />
                        </ListItem>
                      </a>
                    </Link>
                    <Link href={`/celebs`}>
                      <a style={{ color: "#000000" }}>
                        <ListItem button selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                          <ListItemIcon>
                            <PeopleRoundedIcon />
                          </ListItemIcon>
                          <ListItemText primary="Celebs" />
                        </ListItem>
                      </a>
                    </Link>
                    <Link href="/about-us">
                      <a style={{ color: "#000000" }}>
                        <ListItem button selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                          <ListItemIcon>
                            <InfoRoundedIcon />
                          </ListItemIcon>
                          <ListItemText primary="About Us" />
                        </ListItem>
                      </a>
                    </Link>
                  </List>
                  <Divider />
                  <List>
                    <ListItem>
                      <ListItemText primary="Apps" />
                    </ListItem>
                    <Link href="/celebs/celebs">
                      <a style={{ color: "#000000" }}>
                        <ListItem button selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
                          <ListItemIcon>
                            <PhoneIphoneRoundedIcon />
                          </ListItemIcon>
                          <ListItemText primary="Mobile Apps" />
                        </ListItem>
                      </a>
                    </Link>
                    <Link href="/celebs/celebs">
                      <a style={{ color: "#000000" }}>
                        <ListItem button selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event, 5)}>
                          <ListItemIcon>
                            <DesktopWindowsRoundedIcon />
                          </ListItemIcon>
                          <ListItemText primary="Desktop Apps" />
                        </ListItem>
                      </a>
                    </Link>
                  </List>
                </div>
              </Drawer>
            </div>
          </div>
        </Nav>
      </>
    );
}