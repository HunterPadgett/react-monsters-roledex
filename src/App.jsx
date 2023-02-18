import React, { Component } from "react";
// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

class App extends Component {
 constructor() {
  super();

  // constructor always runs FIRST
  // in react we use the constructor to initilize the state
  this.state = {
   monsters: [],
   filteredMonArr: [],
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

 //  render runs SECOND. renders and mounts the UI
 render() {
  const { monsters, filteredMonArr } = this.state;
  const displayMonsters = filteredMonArr.length ? filteredMonArr : monsters;
  return (
   <div className="App">
    <input
     className="search-box"
     type="search"
     placeholder="search monsters"
     onChange={(e) => {
      console.log(e.target.value);
      const searchStr = e.target.value.toLocaleLowerCase();
      const filteredMonsters = this.state.monsters.filter((monster) => {
       return monster.name.toLocaleLowerCase().includes(searchStr);
      });

      this.setState(() => {
       return { filteredMonArr: filteredMonsters };
      });
      console.log(this.state);
     }}
    />
    {displayMonsters.map((monster) => {
     return (
      <div key={monster.id}>
       <h1>{monster.name}</h1>
      </div>
     );
    })}
   </div>
  );
 }
}

export default App;
