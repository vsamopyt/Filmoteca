import css from "./SearchBar.module.css"
export default function SearchBar({onChange}) {
  function handleSubmit(event) {
    event.preventDefault();
    const form =event.target.elements;
    onChange(form.searchBar.value)
  }
  return (
    <>
      <form className={css.searchBarForm} onSubmit={handleSubmit}>
        <input className={css.searchBarInput}type="search" name="searchBar" id="searchBar" />
        <button className={css.searchBarButton} type="submit">Search</button>
      </form>
    </>
  );
}
