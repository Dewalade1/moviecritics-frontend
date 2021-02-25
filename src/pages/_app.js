import {Fragment} from 'react';
import '../../styles/globals.css';
import Head from 'next/head';




export default function MyApp({ Component, pageProps }) {
  return(
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Bams" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="@@page-discription" />

        <link rel="shortcut icon" href="./images/favicon.png" />
        <title>Movie Site | Landing page</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
      </Head>

    
      <Component {...pageProps} />
    </Fragment>

  ); 
  
  
  
  
}


