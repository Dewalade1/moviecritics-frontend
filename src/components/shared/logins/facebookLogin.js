import React from 'react';
import FacebookLogin from 'react-facebook-login';
import FacebookIcon from '@material-ui/icons/Facebook';

import Button from "@material-ui/core/Button";
 
const responseFacebook = (response) => {
  console.log(response);
}
 
export default function FacebookLoginBtn () {
    return(
        // <FacebookLogin
        // render={renderProps => (
        //         <Button fullWidth variant="outlined" component="span" onClick={renderProps.onClick} style={{ background: "#4c8bf5", color: "white" }}>
        //             <Icon className="fab fa-google" style={{ color: "white" }}/> <span className="ml-2"> Sign Up with Google </span>
        //          </Button>
        //     )}
        //     appId="562118384400275"
        //     autoLoad={true}
        //     fields="name,email,picture"
        //     scope="public_profile,user_friends"
        //     callback={responseFacebook}
        //     icon="fa-facebook"
        //     className="mt-2"/>
        <Button fullWidth className="btn btn-facebook" variant="contained" className="mt-2 mb-2" color="primary">
            <FacebookIcon/> <span className="ml-2"> Sign Up with Facebook </span>
        </Button>
    )
};