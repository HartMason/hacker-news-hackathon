import './App.css';
import {Component} from 'react';
import HeaderSearch from './components/HeaderSearch';

//hackathon
//made changes

class App extends Component {
  constructor(){
    super()
  }


  render(){
    return (
      <div className="body-container" style={{display: "flex", width: "100vw", maxWidth: "1200px", minWidth:"900px", margin: "auto"}}>
        <HeaderSearch />
      </div>
    );
}}



export default App;
