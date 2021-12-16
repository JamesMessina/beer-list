import React, { Component } from 'react'; 
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';

import ListBeers from './ListBeers';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      beerList: [],
      searchTerm: "",
      isClicked: false,
      isLoading: true
    }
  }

  componentDidMount(){
      axios.get('https://api.punkapi.com/v2/beers')
      .then(res => {
      const beerList = res.data
      this.setState({ beerList: beerList }) 
      this.setState({isLoading: false})
      console.log("loaded", this.state.beerList)
    })
  }

  handleChange = (e) =>{
    this.setState({
     [e.target.name]: e.target.value
    })
  }

  handleClick = () =>{
    if(this.state.isClicked){
      this.setState({isClicked: false}); 
    }else{
      this.setState({isClicked: true}); 
    }
  }

  handleClear = () =>{
    this.setState({searchTerm: ""}); 
    this.setState({isClicked: false})
  }

  filterSearch = (term) =>{
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
            <input name="searchTerm" type="text" placeholder="search beer" value={this.state.searchTerm} onChange={(e) => {this.handleChange(e)}}></input>
          </form>
          <br></br>
          <div style={{width: "300px", display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
            <button onClick={this.handleClick}>Search</button>
            <button onClick={this.handleClear}>Clear</button>
          </div>
          {
          !this.state.isClicked ?
            <ListBeers beers={this.state.beerList}/> :
            <ListBeers beers={this.state.beerList.filter(this.filterSearch(this.state.searchTerm))}/>
          }
        </header>
      </div>
    );
  }
}

export default App;
