import searchIcon from "assets/header/search.svg"

export function SearchBar() {
    return (<div class="searchBar">
        <img src={searchIcon} alt="Search" id="search" />
        <input
          type="text"
          placeholder="Search"
          class="searchBarInput hideMobile"
        />
      </div>)
}