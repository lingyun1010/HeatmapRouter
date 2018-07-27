import React, { Component } from 'react';
import './App.css';
import SearchForm from './searchForm';
import {Link,Switch, Route, withRouter} from 'react-router-dom';
import SwitchDemo from './SwitchDemo';
import { Button } from 'evergreen-ui';


const URL = 'http://localhost:8080/gxa/sc/search?q=';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      value: ''     
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(val){
    this.setState({
      value : val
    })
  }


  render() {
    return (
      
      <div className="App">
        <SearchForm handleSubmit={this.handleSubmit}/> 
        <SwitchDemo value = {this.state.value}/>
      </div>
    );
  }
}

export default App;
