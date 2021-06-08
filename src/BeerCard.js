import React from 'react'; 

const firstBrewed = {
    color: "yellow",
    fontSize: "20px",
    fontStyle: "italic",
    padding: "15px"
}

const tagline = {
    fontFamily: "garamond",
    color: "#2CBAC6",
    fontSize: "30px"
}

const AbvStyle = {
    color: "white",
    fontStyle: "italic",
    fontSize: "20px"
}

const description = {
    color: "lightgreen",
    font: "sans serif",
    fontSize: "30px"
}

function BeerCard(props){
    return(
        <li style={{listStyle: "none"}}>
            <h2>{props.name}<span style={ firstBrewed }>{props.first_brewed}</span></h2>
            <h3 style={ tagline }>{props.tagline}</h3>
            <img style={{height: "200px"}}src={props.image} alt="beer bottle pic"></img>
            <p style={ AbvStyle }>ABV: {props.abv} % <span style={ description }>{props.description}</span></p>
        </li>
    )
}

export default BeerCard; 