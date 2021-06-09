import React from 'react'; 

const firstBrewedDate = {
    color: "yellow",
    fontSize: "20px",
    fontStyle: "italic",
    padding: "15px"
}

const taglineStyle = {
    fontFamily: "garamond",
    color: "#2CBAC6",
    fontSize: "30px"
}

const AbvStyle = {
    color: "white",
    fontStyle: "italic",
    fontSize: "20px"
}

const descriptionStyle = {
    color: "lightgreen",
    font: "sans serif",
    fontSize: "30px"
}

function BeerCard(props){
    const { name, first_brewed, tagline, image, abv, description, beerWasLiked, index } = props; 
    return(
        <li style={{listStyle: "none"}}>
            <h2>{name}<span style={ firstBrewedDate }>{first_brewed}</span></h2>
            <h3 style={ taglineStyle }>{tagline}</h3>
            <img style={{height: "200px"}}src={image} alt="beer bottle pic"></img>
            <p style={ AbvStyle }>ABV: {abv} % <span style={ descriptionStyle }>{description}</span></p>
            <button onClick ={() => {beerWasLiked(index, name)}}>💗Like </button>
        </li>
    )
}

export default BeerCard; 