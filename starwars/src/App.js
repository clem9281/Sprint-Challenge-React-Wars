import React, { Component } from "react";
import CharacterList from "./components/CharacterList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      previous: "",
      next: ""
    };
  }
  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }
  // // had to make a new function for this: I'm using links for my pagination, so when you click on them the page was refreshing and re mounting the component
  // pagination = (event, URL) => {
  //   event.preventDefault();
  //   this.getCharacters(URL);
  // };
  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          next: data.next || "",
          previous: data.previous || ""
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList
          data={this.state.starwarsChars}
          next={this.state.next}
          previous={this.state.previous}
          pagination={this.getCharacters}
        />
      </div>
    );
  }
}

export default App;
