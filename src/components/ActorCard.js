import React from 'react';
import Card from 'react-bootstrap/Card'
import Actor from '../models/Actor';
 

class ActorCard extends React.Component{
    constructor(props) {
        super(props);
      
    } 
    render(){
       //const firstActor = new Actor ("Shira", "Has", 1995, "https://m.media-amazon.com/images/M/MV5BN2RjMGNlNDgtMmM5Mi00NTEwLTk1MWItMDZkMGExMmM2ZmQ1XkEyXkFqcGdeQXVyNTQ4MzY4NjA@._V1_UY317_CR9,0,214,317_AL_.jpg" , "www.imdb.com/name/nm6024635/" )
       const actorObj = this.props.actor;

        //const actorFname = actorObj.fname;
        console.log (actorObj.fname);

       return ( 
           <div>
           
           <Card >
            <p>i am an actor</p>
            
            
           </Card>

           </div>
       )
    }
}

export default ActorCard;