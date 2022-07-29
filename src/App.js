import "./App.css";
import { Component } from "react";
import Header from "./components/Header";
import axios from "axios";

//hackathon

class App extends Component {
  constructor() {
    super();

    this.state = {
      listOfStories: [],
      category: "stories",
      searchParam: "",
    };
  }

  componentDidMount = () => {
    axios
      .get(
        "https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=50"
      )
      .then((res) => {
        console.log(res);
        this.setState({listOfStories: res.data.hits});
      });
  };

  componentDidUpdate = () => {
    // axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.category}&hitsPerPage=50`)
    console.log(this.state);
  };

  setCategory = (input) => {
    this.setState({category: input});
  };

  setSearchParams = (input) => {
    this.setState({searchParam: input});
  };

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.category === "author") {
      return axios.get(`http://hn.algolia.com/api/v1/search?tags=story,author_${this.state.searchParam}&hitsPerPage=50`).then((res) => {
        this.setState({listOfStories: res.data.hits})
      }) 
    }
    axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.searchParam}&hitsPerPage=50`).then((res) => {
      this.setState({listOfStories: res.data.hits})
    }) 
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
      </div>
    );
  }
}

export default App;
