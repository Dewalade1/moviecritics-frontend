import React from 'react'
import { useIntl } from 'react-intl'

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../layouts/layout';

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
}))

const PageNotFound = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div className="ml-4 pl-4 mr-4 pr-4 mt-lg-4 pt-2">
        <div className="ml-4 pl-4 mr-4 pr-4 mt-lg-4 pt-4">
      <div className="mt-2 text-left">
        <Link aria-label="home" href="/">
            <a className="link">
            <ArrowBackRoundedIcon />{" "} <span>Back to Home </span>
            </a>
          </Link>
        </div >
        <div className={classes.container}>
          <img src="https://res.cloudinary.com/hellodewa/image/upload/v1616334494/Moviecritics/images/sys/404-error_lqpmfn.jpg" alt="404"/>
          <Typography variant="h4" className="mt-4 pt-4 mb-4 pb-4 orange-color"> <b>
            Sorry!! This page does not exist 
            </b>
          </Typography>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default PageNotFound