import { Component } from "react";
import Search from "./components/search/Search";
import NavBar from "./components/navBar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
        <Search />
      </div>
    );
  }
}

export default App;
