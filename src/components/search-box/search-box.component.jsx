import "./search-box.styles.css";
// SearchBox component is responsible for rendering a search input field that listens for a change event within the input field

// pass props in
const SearchBox = ({ onChangeHandler, placeholder, className }) => {
 return (
  <div>
    
   <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    // every time we type into the searchbox, this tells it to run the onSearchChange function from App.jsx
    onChange={onChangeHandler}
   />
  </div>
 );
};

export default SearchBox;
