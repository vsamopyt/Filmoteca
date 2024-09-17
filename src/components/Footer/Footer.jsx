import MovieTitleAnimation from "../MovieTitleAnimation/MovieTitleAnimation"
import css from "./Footer.module.css"
export default function Footer () {
    return (
        <footer className={css.footerSection}>
            <div className={css.footerContainer}>
            <MovieTitleAnimation style ={{}}title="FILMOTECA" rating="100%" />
                {/* <p>FILMOTECA</p> */}

            <p className={css.footerText}>Powered by TMDB</p>
            </div>
        </footer>
    )
}