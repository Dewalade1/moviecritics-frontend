import Head from "next/head";

import Fab from "@material-ui/core/Fab";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";

import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import Tools from "../components/shared/tools";


export const siteTitle = "Moviecritics: The reliable platform for Nigerian Entertainment";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Home | MovieCritics</title>

        <meta charSet="utf-8" />
        <meta name="author" content="Ellopod Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
        <meta name="description" content="Moviecritics is an online platform that provides the latest in Nigerian Entertainment to its users." />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@moviecriticsNg" />
        <meta property="og:url" content="https://moviecritics.vercel.app/" />
        <meta property="og:image" content="https://res.cloudinary.com/hellodewa/image/upload/v1616334477/Moviecritics/images/logos/moviecritics-flavicon_se6axa.ico" />
        <meta property="og:description" content="Moviecritics is an online platform that provides the latest in Nigerian Entertainment to its users." />

        <meta property="og:site_name" content="Moviecritics" />
        <meta name="twitter:image:alt" content="Moviecritics" />

        <link rel="shortcut icon" href="https://res.cloudinary.com/hellodewa/image/upload/v1616334477/Moviecritics/images/logos/moviecritics-flavicon_se6axa.ico" />
        <link rel="icon" href="https://res.cloudinary.com/hellodewa/image/upload/v1616334477/Moviecritics/images/logos/moviecritics-flavicon_se6axa.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <div className="ml-4 pl-4 mr-4 pr-4 mt-lg-4 pt-4">
        <main className="ml-4 pl-4 mr-4 pr-4 mt-lg-4 pt-4">{children}</main>
      </div>
      <Tools/>
      <Footer />
    </>
  );
}
