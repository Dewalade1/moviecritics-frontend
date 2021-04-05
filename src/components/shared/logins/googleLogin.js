import React, {useEffect} from 'react';

import { loadCSS } from 'fg-loadcss';

import Icon from '@material-ui/core/Icon';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

import { GoogleLogin } from 'react-google-login';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > .fa": {
      margin: theme.spacing(2),
    },
  },
  loginBtn: {
    backgroundColor: "#4c8bf5",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#4279d5",
      color: "#ffffff",
    },
  },
}));

const responseGoogle = (response) => {
  console.log(response);
}

export default function GoogleLoginBtn () {
    const styles = useStyles();

    useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

    return (
      <GoogleLogin
        render={(renderProps) => (
          <Button fullWidth variant="outlined" disableElevation component="span" onClick={renderProps.onClick} className={styles.loginBtn}>
            <Icon className="fab fa-google" fontSize="small" /> <span className="ml-2"> Sign Up with Google </span>
          </Button>
        )}
        className="mt-8 mb-4"
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Sign up with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );};