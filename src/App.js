import "./App.css";
import { Component } from "react";
import Header from "./components/Header";

import BodyCard from "./components/BodyCard";


//hackathon
// testing

class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }


  render() {
    return (
      <div>
        <Header
          handleSubmit={this.handleSubmit}
          setCategory={this.setCategory}
          setSearchParams={this.setSearchParams}
          category={this.category}
          searchParam={this.searchParam}
        />
        <BodyCard

        />
      </div>

    );
  }
}

export default App;

