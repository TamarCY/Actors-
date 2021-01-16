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
        this.state ={
            enteredText:""
        };
        }
    
    

    // filterActor (event){
    //     console.log('click')
    // }
    readText (event){
        this.setState({
            enteredText: event.target.value
        });
        // console.log
        // (this.state.enteredText)
        console.log (this.actorsArr)}
//         if (
//             (this.actorsArr[0].fnmame.includs(this.state.enteredText)) ||
//          (this.actorsArr[0].fnmame.includs(this.state.enteredText)))
//          {
//              console.log('includ')
//          }
//  }
 
    render(){
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
                    <ActorCard actor={this.props.actors[0]}/>
                    <ActorCard actor={this.props.actors[1]}/>
                    <ActorCard actor={this.props.actors[0]}/>
                    <ActorCard actor={this.props.actors[1]}/>
                </CardDeck>
                

           </div>
         
       )
   
    }
}

export default ActorsView;