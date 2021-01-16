import React from 'react';
import Actor from '../models/Actor';
import ActorCard from './ActorCard';
import CardDeck from 'react-bootstrap/Card';


class ActorsView extends React.Component{
    constructor(props) {
        super(props);
      
    } 
    render(){
        const actorsArr = []
        actorsArr.push( new Actor ("Shira", "Has", 1995,
         "https://m.media-amazon.com/images/M/MV5BN2RjMGNlNDgtMmM5Mi00NTEwLTk1MWItMDZkMGExMmM2ZmQ1XkEyXkFqcGdeQXVyNTQ4MzY4NjA@._V1_UY317_CR9,0,214,317_AL_.jpg"
          , "https://m.media-amazon.com/images/M/MV5BN2RjMGNlNDgtMmM5Mi00NTEwLTk1MWItMDZkMGExMmM2ZmQ1XkEyXkFqcGdeQXVyNTQ4MzY4NjA@._V1_UY317_CR9,0,214,317_AL_.jpg" ));
        actorsArr.push( new Actor ("Gila", "Almagor", 1939, "https://www.imdb.com/name/nm0021734/?ref_=fn_al_nm_1", "https://m.media-amazon.com/images/M/MV5BOGRhMjMzNTQtMGZjYS00NWJkLTkyOTItMjFhMjlmNDFhN2MxXkEyXkFqcGdeQXVyMjMyMzI4MzY@._V1_UY317_CR34,0,214,317_AL_.jpg"));
       
       return ( 
           <div>
                 <h1>ActorDB</h1>
                 <div>
                     
                 </div>
                <CardDeck>
                    <ActorCard actor={actorsArr[0]}/>
                    <ActorCard actor={actorsArr[1]}/>
                    <ActorCard actor={actorsArr[0]}/>
                    <ActorCard actor={actorsArr[1]}/>
                </CardDeck>
                

           </div>
         
       )
    }
}

export default ActorsView;