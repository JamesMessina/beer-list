import React from 'react'; 

//import BeerCard from './BeerCard';
import MaterialUIBeerCard from './MaterialUIBeerCard'; 


function ListBeers(props){

    return(
        <ol>
            {props.beers.map((beer, index) =>{
                return (
                    <MaterialUIBeerCard 
                    key={index} 
                    index={index} 
                    yeast={beer.ingredients.yeast} 
                    ibu={beer.ibu} 
                    name={beer.name} 
                    image={beer.image_url} 
                    first_brewed={beer.first_brewed} 
                    tagline={beer.tagline} 
                    abv={beer.abv} 
                    description={beer.description}
                    malts={beer.ingredients.malt.map((maltItem) =>{
                        return maltItem.name.concat(' ').concat(', ');
                    })}
                    hops={beer.ingredients.hops.map((hop, index) =>{
                        return hop.name.concat(' ').concat(', ');
                    })}/>
               )
            })}
        </ol>
    )
}

export default ListBeers; 