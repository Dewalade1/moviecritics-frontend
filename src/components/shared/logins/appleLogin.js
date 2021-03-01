 import React from 'react';
import AppleIcon from '@material-ui/icons/Apple';

import Button from "@material-ui/core/Button";
 
const responseFacebook = (response) => {
  console.log(response);
}
 
export default function AppleLoginBtn () {
    return(
        <Button fullWidth className="btn btn-apple" variant="contained" className=" mb-2" style={{background: "#000000", color: "#ffffff"}}>
            <AppleIcon/> <span className="ml-2"> Sign Up with Apple </span>
        </Button>
    )
};