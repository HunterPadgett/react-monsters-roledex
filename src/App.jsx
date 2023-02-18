import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
 constructor() {
  super();

  // constructor always runs FIRST
  // in react we use the constructor to initilize the state
  this.state = {
   monsters: [],
   searchField: "",
  };
 }

 //  this runs THIRD bc we wait on the API call
 // once we get the fetch we set the state and react rerenders the page with this new data
 // anytime state is changed react rerenders
 componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users")
   .then((res) => res.json())
   .then((users) =>
    this.setState(
     () => {
      // tell the monsters array to point to the fetched data
      return { monsters: users };
     },
     () => {
      // console.log(this.state);
     }
    )
   );
 }

 //  set logic for searching in a method
 onSearchChange = (e) => {
  const searchField = e.target.value.toLocaleLowerCase();
  this.setState(() => {
   return { searchField };
  });
 };

 //  render runs SECOND. renders and mounts the UI
 render() {
  // destructure the state and methods to our code more readable
  const { monsters, searchField } = this.state;
  const { onSearchChange } = this;
  const filteredMonsters = monsters.filter((monster) => {
   return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
   <div className="App">
    <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='search monsters' />
    <CardList monsters={filteredMonsters} />
   </div>
  );
 }
}

export default App;
