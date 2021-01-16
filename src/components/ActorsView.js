import React from 'react';
import Actor from '../models/Actor';
import ActorCard from './ActorCard';

class ActorsView extends React.Component{
    constructor(props) {
        super(props);
      
    } 
    render(){
        const actprsArr = []
        actprsArr.push( new Actor ("Shira", "Has", 1995,
         "https://m.media-amazon.com/images/M/MV5BN2RjMGNlNDgtMmM5Mi00NTEwLTk1MWItMDZkMGExMmM2ZmQ1XkEyXkFqcGdeQXVyNTQ4MzY4NjA@._V1_UY317_CR9,0,214,317_AL_.jpg"
          , "www.imdb.com/name/nm6024635/" ));

       
       return ( 
           <div>
                 <h1>yeee</h1>
                <ActorCard actor={actprsArr[0]}/>
                <ActorCard/>
           </div>
         
       )
    }
}

export default ActorsView;