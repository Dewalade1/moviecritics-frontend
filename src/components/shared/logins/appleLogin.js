import React from 'react';
import AppleIcon from '@material-ui/icons/Apple';

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
 
const responseApple = (res) => {
  console.log(res);
};

const useStyles = makeStyles(() => ({
  loginBtn: {
    backgroundColor: "#000000",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#474747",
    },
  },
}));

export default function AppleLoginBtn () {

  const styles = useStyles();

    return (
      <Button fullWidth disableElevation className={`${styles.loginBtn} mb-2`} variant="contained">
        <AppleIcon /> <span className="ml-2"> Sign Up with Apple </span>
      </Button>
    );
};