import css from "./LoadMoreBtn.module.css"
export default function LoadMoreBtn ({onHandle}) {
    return (
        <div className={css.loadMoreBtnSection}>
            <button className ={css.loadMoreBtnButton} onClick={onHandle}>Download more movies</button>
        </div>
    )

}