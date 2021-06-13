import React from 'react'; 

import BeerCard from './BeerCard'

function ListBeers(props){
    return(
        <ol>
            {props.beers.map((beer, index) =>{
                return (
                    <BeerCard 
                    key={index} 
                    index={index} 
                    yeast={beer.ingredients.yeast} 
                    ibu={beer.ibu} name={beer.name} 
                    image={beer.image_url} 
                    first_brewed={beer.first_brewed} 
                    tagline={beer.tagline} 
                    abv={beer.abv} 
                    description={beer.description}/>
                )
            })}
        </ol>
    )
}

export default ListBeers; 