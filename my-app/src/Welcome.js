import React from "react";


export default class Welcome extends React.Component{
    render() {

        return (
            <div>
            <p>Hello, {this.props.name} </p>
            <Age name={this.props.name} 
                 age={this.props.age} />
            </div> 
        )
    }
        
}


export class Age extends React.Component{
    render(){
        
        return(
            <div> 
                {this.props.age > 18 
                && this.props.age < 65 
                && this.props.name === "Jhon"
                ? (<p>Your age is {this.props.age}</p> ) 
                : (<p>Non hai l'età giusta oppure non ti chiami Jhon</p>)}

            </div>
        )
        
    }
}

Welcome.defaultProps = {
    name: "Jonathan"
  }