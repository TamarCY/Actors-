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
        this.readText = this.readText.bind(this);
        this.hasLetters = this.readText.bind(this);
      
        this.state ={
            enteredText:"",
            cardsArr:[<ActorCard actor={this.props.actors[0]}/>,
                    <ActorCard actor={this.props.actors[1]}/>,
                    <ActorCard actor={this.props.actors[0]}/>,
                    <ActorCard actor={this.props.actors[1]}/>]
        };
        }
    
        // var str = "Hello world, welcome to the universe.";
        // var n = str.includes("world");
    
    hasLetters (object){
        // if((object.fname.toLowerCase().includes(this.state.enteredText))||
        //  (object.lname.toLowerCase().includes(this.state.enteredText))){
        //     console.log('cooooool!')
        //     return true}
        console.log(object)
        return false
        }
         
    
  
    readText (event){
       
        // console.log(event.target)
        if (this.props.actors[0].fname.includes(this.event.target)){
            console.log('cooooool')
        }
        // const filteredArr = this.props.actors.filter(this.hasLetters)

        // const filteredArr = this.props.actors.filter(this.hasLetters)
        const filteredArr =  [<ActorCard actor={this.props.actors[1]}/>]
       
        this.setState({
            cardsArr: filteredArr
        })
        
        this.setState({
            enteredText: event.target.value.toLowerCase()
        })

         console.log
        (this.state.enteredText)
    };
       


        
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
                    {this.state.cardsArr}
                </CardDeck>
                

           </div>
         
       )
   
    }
    }


export default ActorsView;