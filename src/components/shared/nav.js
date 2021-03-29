import clsx from 'clsx';

import Link from 'next/link';

import React, {useState, useContext} from 'react';

import {Navbar, Nav} from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from '@material-ui/core/ListSubheader';

import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import TheatersRoundedIcon from '@material-ui/icons/TheatersRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Filter1RoundedIcon from "@material-ui/icons/Filter1Rounded";
import DesktopWindowsRoundedIcon from '@material-ui/icons/DesktopWindowsRounded';
import PhoneIphoneRoundedIcon from '@material-ui/icons/PhoneIphoneRounded';

import navStyles from "../../../styles/layout/nav.module.css";

import StateContext from '../contexts/stateContext';
import DispatchContext from '../contexts/dispatchContext';


const useStyles = makeStyles({
  list: {
    width: 260,
    paddingLeft: "1px",
  },
  fullList: {
    width: 'auto',
  },
  transparentButton: {
    "&:hover": {
      color: "#f38704",
    },
  },
});

export default function MainNav () {
    const classes = useStyles();

    const appState = useContext(StateContext);
    const appDispatch = useContext(DispatchContext);

    const [selectedIndex, setSelectedIndex] = useState(appState.navSelectedIndex);
    const [state, setState] = useState({
        left: false,
    });

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
      appDispatch({type: "changeNavSelectedIndex", index: index});
    };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type == 'keydown' && (event.key == 'Tab' || event.key == 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


    return (
      <>
        <Navbar.Brand href="/">
          <div className="ml-4 pl-4">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1616559517/Moviecritics/images/logos/moviecritics-logo-transparent-background_sjnfhk.png" width={140} height={40} className="d-inline-block align-top" />
          </div>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <div>
            <div>
              <Button onClick={toggleDrawer("left", true)} className={classes.transparentButton}>
                {" "}
                <MenuRoundedIcon />{" "} Menu
              </Button>
              <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
                <div className={clsx(classes.list)} role="presentation" onClick={toggleDrawer("left", false)} onKeyDown={toggleDrawer("left", false)}>
                  <List component="nav" aria-label="app logo">
                    <ListItem>
                      <div className="ml-sm-6 pb-2 pt-4">
                        <Link href="/">
                          <a>
                            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1616559517/Moviecritics/images/logos/moviecritics-logo-transparent-background_sjnfhk.png" width={140} height={40} className="d-inline-block align-top" />
                          </a>
                        </Link>
                      </div>
                    </ListItem>
                  </List>
                  <Divider />
                  <List
                    component="nav"
                    aria-label="primary app navItems"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                      <ListSubheader component="h4" id="primary-app-nav-items">
                        Menu
                      </ListSubheader>
                    }
                  >
                    <Link href="/">
                      <a className={navStyles.navLink}>
                        <ListItem button selected={appState.navSelectedIndex == 0} onClick={(event) => handleListItemClick(event, 0)}>
                          <ListItemIcon>
                            <HomeRoundedIcon className={navStyles.navLink} />
                          </ListItemIcon>
                          <ListItemText primary="Home" />
                        </ListItem>
                      </a>
                    </Link>
                    <Link href="/movies">
                      <a className={navStyles.navLink}>
                        <ListItem button selected={appState.navSelectedIndex == 1} onClick={(event) => handleListItemClick(event, 1)}>
                          <ListItemIcon>
                            <TheatersRoundedIcon className={navStyles.navLink} />
                          </ListItemIcon>
                          <ListItemText primary="Movies" />
                        </ListItem>
                      </a>
                    </Link>
                    <Link href="/celebs">
                      <a className={navStyles.navLink}>
                        <ListItem button selected={appState.navSelectedIndex == 2} onClick={(event) => handleListItemClick(event, 2)}>
                          <ListItemIcon>
                            <PeopleRoundedIcon className={navStyles.navLink} />
                          </ListItemIcon>
                          <ListItemText primary="Celebs" />
                        </ListItem>
                      </a>
                    </Link>
                    <Link href="/top-ranking">
                      <a className={navStyles.navLink}>
                        <ListItem button selected={appState.navSelectedIndex == 3} onClick={(event) => handleListItemClick(event, 3)}>
                          <ListItemIcon>
                            <Filter1RoundedIcon className={navStyles.navLink} />
                          </ListItemIcon>
                          <ListItemText primary="Top Ranking" />
                        </ListItem>
                      </a>
                    </Link>
                    <Link href="/about-us">
                      <a className={navStyles.navLink}>
                        <ListItem button selected={appState.navSelectedIndex == 4} onClick={(event) => handleListItemClick(event, 4)}>
                          <ListItemIcon>
                            <InfoRoundedIcon className={navStyles.navLink} />
                          </ListItemIcon>
                          <ListItemText primary="About Us" />
                        </ListItem>
                      </a>
                    </Link>
                  </List>
                  <Divider />
                  <List
                    component="nav"
                    aria-label="secondary app navItems"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                      <ListSubheader component="h4" id="secondary-app-nav-items">
                        Apps
                      </ListSubheader>
                    }
                  >
                    <Link href="/apps-mobile">
                      <a className={navStyles.navLink}>
                        <ListItem button selected={appState.navSelectedIndex == 5} onClick={(event) => handleListItemClick(event, 5)}>
                          <ListItemIcon>
                            <PhoneIphoneRoundedIcon className={navStyles.navLink} />
                          </ListItemIcon>
                          <ListItemText primary="Mobile Apps" />
                        </ListItem>
                      </a>
                    </Link>
                    <Link href="/apps-desktop">
                      <a className={navStyles.navLink}>
                        <ListItem button selected={appState.navSelectedIndex == 6} onClick={(event) => handleListItemClick(event, 6)}>
                          <ListItemIcon>
                            <DesktopWindowsRoundedIcon className={navStyles.navLink} />
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