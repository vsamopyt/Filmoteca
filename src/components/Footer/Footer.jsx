import css from "./Footer.module.css"
export default function Footer () {
    return (
        <footer className={css.footerSection}>
            <div className={css.footerContainer}>

            <p className={css.footerText}>Powered by TMDB</p>
            </div>
        </footer>
    )
}