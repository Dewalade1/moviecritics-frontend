import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
 
const responseTwitter = (response) => {
  console.log(response);
}

const useStyles = makeStyles(() => ({
  loginBtn: {
    backgroundColor: "#00ACEE",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#0093cb",
      color: "#ffffff",
    },
  },
}));
 
export default function TwitterLoginBtn () {

    const styles = useStyles();

    return (
      <Button fullWidth className={`${styles.loginBtn} btn btn-twitter mb-2`} variant="contained" color="primary" disableElevation>
        <TwitterIcon /> <span className="ml-2"> Sign Up with Twitter </span>
      </Button>
    );
};