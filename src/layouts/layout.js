import Head from 'next/head'


export default function Layout({ children, home }) {
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="Bams" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content="@@page-discription" />

          <link rel="shortcut icon" href="./images/favicon.png" />
          <title>MovieCritics | Landing page</title>
          <link rel="icon" href="/images/logos/moviecritics-flavicon.ico" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
        </Head>
      </>
    );
}



