import './App.css';
import {Component} from 'react';
import Header from './components/Header';
import HeaderSearch from './components/HeaderSearch';

//hackathon
//made changes

class App extends Component {
  constructor(){
    super()

    this.state = {

    }
  }


  render(){
    return (
      <div>
        <Header />
        <HeaderSearch />
      </div>
    );
}}



export default App;
