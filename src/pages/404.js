import React from 'react'
import { useIntl } from 'react-intl'

import Head from 'next/head';
import Layout from '../layouts/layout';

import "bootstrap/dist/css/bootstrap.min.css";

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

const useStyles = makeStyles((theme) => ({
  icon: {
    width: 192,
    height: 192,
    color: theme.palette.secondary.main,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: `100%`,
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    margin: 0,
    height: `calc(100vh - 64px)`,
  },
  button: {
    marginLeft: 0,
    color: "#FF4500"
  },

  '&:hover': {
    color: "#4f4e4e",
  }
}))

const PageNotFound = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div className=" text-left">
        <Button
            aria-label="home"
            href="/"
            className={classes.button + " text-left"}
          >
            <ArrowBackRoundedIcon /> <span className="ml-2">Back to Home </span>
          </Button>
        </div >
        <div className={classes.container}>
          <img src="https://res.cloudinary.com/hellodewa/image/upload/v1616334494/Moviecritics/images/sys/404-error_lqpmfn.jpg" alt="404"/>
          <Typography variant="h4" style={{color: "#FF4500"}} className="mt-4 pt-4 mb-4 pb-4"> <b>
            Sorry!! This page doesn't exist 
            </b>
          </Typography>
        </div>
    </Layout>
  )
}

export default PageNotFound