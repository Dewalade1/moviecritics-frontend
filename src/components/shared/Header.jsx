import React, { Fragment,  useContext } from 'react';
import Link from 'next/link';
import { routes } from '../../routes';

const websiteRoutes = [
    { name: 'Home', route: routes.entry.path },
    { name: 'Watch', route: routes.aboutUs.path },
    { name: 'Community', route: routes.howItWorks.path },
    { name: 'Blog', route: routes.contactUs.path },
    { name: 'Resources', route: routes.faqs.path },
  ];
  
export default function Header() {
    const [isActive] = useActiveRoute();
    const [pwwState] = useContext(PwwContext);
    const { showNavbar } = pwwState;
  
    const Routes = () => (
      <Fragment>
        {websiteRoutes.map(({ name, route }) => (
          <Link key={name} href={route}>
            <a href={route} className={isActive(route)}>{name}</a>
          </Link>
        ))}
  
        <Link href={routes.auth.pickup.path}>
          <button type="button" className="btn btn-outline-success btn-lg">LOGIN</button>
        </Link>

        <Link href={routes.auth.pickup.path}>
          <button type="button" className="btn btn-outline-success btn-lg">REGISTER</button>
        </Link>
      </Fragment>
    );
  return (
    <>
    <div className="movie-header-wrapper">
    <div className="d-flex justify-content-between align-items-center">
      <Link href={routes.entry.path}>
        <a href={routes.entry.path} className="name">
          <img className="logo" src="/imgs/logo.png" alt="pww logo" />
        </a>
      </Link>

      <div className="routes-wrapper">
        <Routes />
      </div>

      <div className="navbar p-0">
        <Hamburger />
      </div>
    </div>

    <div className={`routes-wrapper routes-wrapper-mobile ${showNavbar && 'show'}`}>
      <Routes />
    </div>
  </div>

    </>
  );
}
