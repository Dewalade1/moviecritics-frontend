import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';

import Button from "@material-ui/core/Button";
 
const responseFacebook = (response) => {
  console.log(response);
}
 
export default function TwitterLoginBtn () {
    return(
        <Button fullWidth className="btn btn-twitter" variant="contained" className=" mb-2" color="primary" style={{background: "#00acee"}}>
            <TwitterIcon/> <span className="ml-2"> Sign Up with Twitter </span>
        </Button>
    )
};