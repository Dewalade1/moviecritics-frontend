import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

import { loadCSS } from 'fg-loadcss';

import Icon from '@material-ui/core/Icon';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

import { GoogleLogin } from 'react-google-login';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > .fa': {
      margin: theme.spacing(2),
    },
  },
}));

const responseGoogle = (response) => {
  console.log(response);
}

export default function GoogleLoginBtn () {
    const classes = useStyles();

    useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

    return(
         <GoogleLogin
            render={renderProps => (
                <Button fullWidth variant="outlined" component="span" onClick={renderProps.onClick} style={{ background: "#4c8bf5", color: "white" }}>
                    <Icon className="fab fa-google" style={{ color: "white" }}/> <span className="ml-2"> Sign Up with Google </span>
                 </Button>
            )}
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Sign up with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />
)};