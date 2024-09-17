import MovieTitleAnimation from '../MovieTitleAnimation/MovieTitleAnimation';


import { NavLink, Link } from 'react-router-dom';
import { SiThemoviedatabase } from "react-icons/si";
import { GiFilmProjector } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import clsx from 'clsx';
import css from './Navigation.module.css';
export default function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.linkActive);
  };

  return (
    <header className={css.navigationSection}>
      <div className={css.navigationContainer}>
    
        <nav className={css.navigationLinks}>
        {/* <SiThemoviedatabase /> */}
        <Link to="/" className={css.buildLinkClass}>
        
      
        
        
        <BiCameraMovie className={css.buildLinkClassLogo}/>
          </Link>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
