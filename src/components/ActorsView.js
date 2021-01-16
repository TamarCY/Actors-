import React from 'react';
import Actor from '../models/Actor';
import ActorCard from './ActorCard';
import CardDeck from 'react-bootstrap/Card';
import FormFile from 'react-bootstrap/FormFile'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ActorsView extends React.Component{
    constructor(props) {
        super(props);
        // this.filterActor = this.filterActor.bind(this);
        this.readText = this.readText.bind(this);
    } 
    

    // filterActor (event){
    //     console.log('click')
    // }
    readText (event){
        let inputText = event.target.value;
        const temp = "shira"
        if (temp.includes(inputText)){
            console.log("yeeee!")
        }
        else{
            console.log("booz!")

        }
 }
    render(){
        const actorsArr = []
        actorsArr.push( new Actor ("Shira", "Has", 1995,
        'https://www.imdb.com/name/nm6024635/?ref_=fn_al_nm_1'
          , "https://m.media-amazon.com/images/M/MV5BN2RjMGNlNDgtMmM5Mi00NTEwLTk1MWItMDZkMGExMmM2ZmQ1XkEyXkFqcGdeQXVyNTQ4MzY4NjA@._V1_UY317_CR9,0,214,317_AL_.jpg" ));
        actorsArr.push( new Actor ("Gila", "Almagor", 1939, "https://www.imdb.com/name/nm0021734/?ref_=fn_al_nm_1", "https://m.media-amazon.com/images/M/MV5BOGRhMjMzNTQtMGZjYS00NWJkLTkyOTItMjFhMjlmNDFhN2MxXkEyXkFqcGdeQXVyMjMyMzI4MzY@._V1_UY317_CR34,0,214,317_AL_.jpg"));
       
       return ( 
           <div>
                 <h1>ActorDB</h1>
                 <div>
                        <label>
                            Filter
                        <input type="text" onChange={this.readText}></input> 
                        {/* <Button variant="outline-secondary" onClick={this.filterActor}>Button</Button>                     */}
                        </label>
                        
                 </div>

                <CardDeck style={{display:"flex"}}>
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