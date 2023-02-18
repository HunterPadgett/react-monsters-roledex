import React, { Component } from "react";
// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

class App extends Component {
 constructor() {
  // super call the Component
  super();

  this.state = {
   monsters: [],
  };
 }

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
      console.log(this.state);
     }
    )
   );
 }

 render() {
  return (
   <div className="App">
    {this.state.monsters.map((monster) => {
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
