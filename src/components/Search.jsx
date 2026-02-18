const Search = ({ searchText, setSearchText }) => {
  return (
    <div>
      <span>Search for: </span>
      <input
        placeholder="Enter Name"
        type="text"
        name="search"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
    </div>
  );
};
export default Search;
