import "./search.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="search"
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    Search for location
                </span>
            </label>
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search for location"
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;