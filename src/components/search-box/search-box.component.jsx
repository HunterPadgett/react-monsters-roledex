import "./search-box.styles.css";

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
