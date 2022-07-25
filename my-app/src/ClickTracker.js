import React from "react";

export default class ClickTracker extends React.Component {

    state = {
        name : "-"
    }

   render(){
    return(
        <div>
            
            <button onClick={this.eventHandler}>Facebook</button>
            <button onClick={this.eventHandler}>Instagram</button>
            <button onClick={this.eventHandler}>Whatsapp</button>
            <h1>{this.state.name}</h1>
        </div>)
    }

    eventHandler = (event) => {

        this.setState(
            {name : event.target.innerText}
        )
}}