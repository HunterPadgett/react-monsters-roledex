import React, { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
 // define state variables for search field, monsters, and filtered monsters
 const [searchField, setSearchField] = useState("");
 const [monsters, setMonsters] = useState([]);
 const [filteredMonsters, setFilteredMonsters] = useState(monsters);

 // useEffect hook to fetch monsters from API and set initial state
 //  set dependency array to empty so this function only runs on init render
 useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
   .then((res) => res.json())
   // set monsters state variable to array of data being fetched in API call
   .then((users) => setMonsters(users));
 }, []);

 // useEffect hook to update filtered monsters whenever search field or monsters state variables change
 useEffect(() => {
  // filter monsters array based on search field value
  const newFilteredMonsters = monsters.filter((monster) => {
   return monster.name.toLocaleLowerCase().includes(searchField);
  });
  // set filtered monsters state variable to filtered monsters array
  setFilteredMonsters(newFilteredMonsters);
 }, [monsters, searchField]);

 // define onSearchChange function to handle changes to search field
 const onSearchChange = (e) => {
  // get search field value from event target
  const searchFieldStr = e.target.value.toLocaleLowerCase();
  // then set search field state variable to search field value
  setSearchField(searchFieldStr);
 };

 return (
  <div className="App">
   <h1 className="main-title">React Monsters</h1>
   <SearchBox
    className="monsters-search-box"
    // pass onSearchChange as a prop to the SearchBox component
    onChangeHandler={onSearchChange}
    placeholder="search monsters"
   />
   <CardList monsters={filteredMonsters} />
  </div>
 );
};

export default App;
