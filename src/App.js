import React, { Component } from 'react'; 
import axios from 'axios';

import './App.css';

import ListBeers from './ListBeers';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      beerList: [],
      searchTerm: ""
    }
  }

  componentDidMount(){
      axios.get('https://api.punkapi.com/v2/beers')
      .then(res => {
      const beerList = res.data
      this.setState({ beerList: beerList }) 
    })
  }

  handleChange = (e) =>{
    this.setState({
     [e.target.name]: e.target.value
    })
  }

  filterSearch(term){
    return(item) => {
      return (
        item.name.toLowerCase().includes(term.toLowerCase())
      )
    }
  }
  
  render(){ 
    return (
      <div className="App">
      <header className="App-header">
        <form>
          <label>Search:</label>
          <input name="searchTerm" type="text" placeholder="search beer" value={this.state.searchTerm} onChange={(e) => {this.handleChange(e)}}>
          </input>
        </form>
        {
        !this.state.searchTerm ?
          <ListBeers beers={this.state.beerList}/> :
          <ListBeers beers={this.state.beerList.filter(this.filterSearch(this.state.searchTerm))}/>
        }
      </header>
      </div>
    );
  }
}

export default App;
