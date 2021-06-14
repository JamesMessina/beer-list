import React, { useState } from 'react'; 

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
    const { name, first_brewed, tagline, image, abv, description, ibu, malts, yeast, hops} = props; 
    const [isHidden, setHide] = useState(true);  
    const [count, setCount] = useState(0); 

    

    return(
        <li style={{listStyle: "none"}}>
            <h2>{name}<span style={ firstBrewedDate }>{first_brewed}</span></h2>
            <button onClick={() => {isHidden ? setHide(false) : setHide(true)}}>{isHidden ? "Show Details" : "Hide Details"}</button>
            <h3 style={ taglineStyle }>{tagline}</h3>
            <img 
                style={{height: "200px"}}
                src={image} alt='beer pic'>
            </img>
            {isHidden ?
                <div></div> :
                    <div>
                        <p>Malts: {malts}</p>
                        <p>Yeast: {yeast}</p>
                        <p>Hops: {hops}</p>
                        <p>IBU: {ibu}</p>
                        <p style={ AbvStyle }>ABV: {abv} % <span style={ descriptionStyle }>{description}</span></p>
                        <button onClick={() => setCount(count + 1)}>💗Likes: {count}</button>
                    </div>
            }
        </li>
    )
}

export default BeerCard; 