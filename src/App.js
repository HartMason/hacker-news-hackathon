import "./App.css";
import { Component } from "react";
import Header from "./components/Header";
import HeaderSearch from './components/HeaderSearch';
import BodyCard from "./components/BodyCard";
import Pagination from "./components/Pagination";
import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "1",
      setCurrentPage: "1",
      recordsPerPage: "10",
      setListofStories: [],
      listOfStories: [],
      category: "story",
      searchInput: "",
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

  handleChange = (event) => {
    this.setState({searchInput: event.target.value})
    this.setState({searchParam: event.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.category === "author") {
      return axios.get(`http://hn.algolia.com/api/v1/search?tags=story,author_${this.state.searchParam}&hitsPerPage=50`).then((res) => {
        this.setState({listOfStories: res.data.hits})
      }) 
    };
    if (this.state.category === "comments") {
      return axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.searchParam}&tags=comment&hitsPerPage=50`).then((res) => {
        this.setState({listOfStories: res.data.hits})
      }) 
    };
    axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.searchParam}&hitsPerPage=50`).then((res) => {
      this.setState({listOfStories: res.data.hits})
    }) 
  }
  
  render() {
    return (

      <div className="app-root">
        <HeaderSearch handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Header
          handleSubmit={this.handleSubmit}
          setCategory={this.setCategory}
          setSearchParams={this.setSearchParams}
          category={this.category}
          searchParam={this.searchParam}
        />
        <ul>{this.state.listOfStories.map(
        (story, index)=>(
        <BodyCard key={index} title={story.title} storyTitle={story.story_title} url={story.url} storyUrl={story.story_url} author={story.author} points={story.points} timePosted={story.created_at} comments={story.num_comments}/>
        ))}
        </ul>
        <Pagination currentPage={this.state.currentPage} setCurrentPage={this.state.setCurrentPage} recordsPerPage={this.state.recordsPerPage} setListofStories={this.state.setListofStories} listOfStories={this.state.listOfStories} />      
      
      </div>

    );
  }
}



export default App;


