import Head from "next/head";

import Fab from "@material-ui/core/Fab";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";

import Header from "../components/shared/header";
import Footer from "../components/shared/footer";

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
        <meta property="og:image" content="./public/briij_logo_400x400.jpg" />
        <meta property="og:description" content="Moviecritics is an online platform that provides the latest in Nigerian Entertainment to its users." />

        <meta property="og:site_name" content="Moviecritics" />
        <meta name="twitter:image:alt" content="Moviecritics" />

        <link rel="shortcut icon" href="./images/favicon.png" />
        <link rel="icon" href="/images/logos/moviecritics-flavicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <div className="ml-4 pl-4 mr-4 pr-4 mt-lg-4 pt-4">
        <main className="ml-4 pl-4 mr-4 pr-4 mt-lg-4 pt-4">{children}</main>
      </div>
      <div className="mr-4" style={{ position: "fixed", zindex: 999, bottom: "50px", right: "50px" }}>
        <Fab color="primary" aria-label="back to top" className="mr-4 mb-4" style={{ background: "#ffa600", display: "block" }}>
          <ExpandLessRoundedIcon />
        </Fab>
        <Fab color="primary" aria-label="chat" className=" mr-4 mb-3" style={{ background: "#fd7e14", display: "block" }}>
          <ForumRoundedIcon />
        </Fab>
      </div>
      <Footer />
    </>
  );
}
