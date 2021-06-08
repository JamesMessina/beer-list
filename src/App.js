import React, { Component } from 'react'; 
import axios from 'axios';

import './App.css';

import BeerCard from './BeerCard'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      beerList: []
    }

  }

  componentDidMount(){
    axios.get('https://api.punkapi.com/v2/beers')
    .then(res => {
    const beerList = res.data
    this.setState({ beerList: beerList }) 
  })
  }

  render(){
    console.log('test'); 
    return (
      <div className="App">
      <header className="App-header">
      <ol>{this.state.beerList.map((beer, index) => {
        return <BeerCard key={index} name={beer.name} image={beer.image_url} first_brewed={beer.first_brewed} tagline={beer.tagline} abv={beer.abv} description={beer.description}/>
      })}</ol>
      <p>{this.props.name}</p>
      <p>{this.props.creator}</p>
      <p>{this.props.year}</p>
      </header>
      </div>
    );
  }
}

export default App;
