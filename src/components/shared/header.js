import {useState} from 'react';

import MainNav from '../shared/nav';

import {Navbar} from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import grey from '@material-ui/core/colors/grey';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from '@material-ui/core/InputAdornment';
import { fade, makeStyles, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import TurnedInNotRoundedIcon from '@material-ui/icons/TurnedInNotRounded';
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";

const theme = createMuiTheme({
  palette: {
    primary: grey,
  },
});


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ffffff',
    borderRight: '1px solid #d3d3d3',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),

    '&:hover': {
      borderColor: '#ffffff',
      borderRight: '1px solid #A9A9A9',
    },
  },
}))(InputBase);

const useStyles = makeStyles(() => ({
  search: {
    background: "#ffffff",
    '& label.Mui-focused': {
      color: '#f38704',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#f38704',
      },
    },
  },
  orangeButton: {
    background: "#f38704",
    color: "#ffffff",
    "&:hover": {
      background: "#ffa753",
      color: "#e4e9fd",
    },
  },
  transparentButton: {
    "&:hover": {
      color: "#f38704",
    },
  },
}));

function Header () {

  const styles = useStyles();
  const [searchParam, setSearchParam] = useState(10);

  const handleChange = (event) => {
    setSearchParam(event.target.value);
  };


    return (
      <>
        <Navbar className="bg-light justify-content-center pr-4 pl-4" expand="lg" variant="light" fixed="top">
          <MainNav />
          <Col>
            <ThemeProvider theme={theme}>
              <TextField
                margin="dense"
                className={styles.search}
                placeholder="Search Moviecritics..."
                type="text"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Select id="simple-select-outlined" value={searchParam} onChange={handleChange} input={<BootstrapInput />}>
                        <MenuItem value={10}>All</MenuItem>
                        <MenuItem value={20}>Movies</MenuItem>
                        <MenuItem value={30}>Celebs</MenuItem>
                        <MenuItem value={40}>Users</MenuItem>
                      </Select>
                      <Divider orientation="vertical" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                fullWidth
              />
            </ThemeProvider>
          </Col>

          <IconButton aria-label="notifications" component="span" className="ml-2 mr-2">
            <Badge badgeContent={99} color="error">
              <NotificationsRoundedIcon />
            </Badge>
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <div className="mr-4 pr-4">
            <Button className={`ml-sm-2 ${styles.transparentButton}`} disableElevation>
              <TurnedInNotRoundedIcon /> Watchlist
            </Button>
            <Button className={`ml-sm-4 ${styles.transparentButton}`} disableElevation>
              Login
            </Button>
            <ThemeProvider theme={theme}>
              <Button variant="contained" disableElevation className={`${styles.orangeButton} mr-4 ml-4`} color="primary" component="span">
                Sign up
              </Button>
            </ThemeProvider>
          </div>
        </Navbar>
      </>
    );
}

export default Header;