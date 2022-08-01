import "./App.css";
import { Component } from "react";
import Header from "./components/Header";
import HeaderSearch from './components/HeaderSearch';
import BodyCard from "./components/BodyCard";
import axios from "axios";
import * as React from 'react';





//hackathon
// testing

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfStories: [],
      category: "stories",
      searchParam: ""

    };
  }
  

  componentDidMount = () => {
    axios
      .get(
        "https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=50"
      )
      .then(res => {
        const listOfStories = res.data.hits
        this.setState({ listOfStories })
        console.log(listOfStories);
      });
  };

  componentDidUpdate = () => {
    axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.category}&hitsPerPage=50`)
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
      return axios.get(`http://hn.algolia.com/api/v1/search?tags=listOfStories,author_${this.state.searchParam}&hitsPerPage=50`).then((res) => {
        this.setState({listOfStories: res.data.hits})
      }) 
    }
    axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.searchParam}&hitsPerPage=50`).then((res) => {
      this.setState({listOfStories: res.data.hits})
    }) 
  }
  
  render() {
    return (
      <div >
        <Header
          handleSubmit={this.handleSubmit}
          setCategory={this.setCategory}
          setSearchParams={this.setSearchParams}
          category={this.category}
          searchParam={this.searchParam}
        />
        <HeaderSearch />
        
        <div>
     
        {this.state.listOfStories.map((list, index) => {
          return (
              <BodyCard
              key={index}
              index={index}
              title={list.title} 
              points={list.points} 
              author={list.author} 
              comments={list.num_comments} 
              url={list.url}
              />
          );
        })}
          </div>
     
      </div>

    );
  }
}



export default App;


