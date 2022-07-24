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
                ? (<p>Your age is {this.props.age}</p> ) 
                : (<p>You are very young!</p>)}
            </div>
        )
        
    }
}

Welcome.defaultProps = {
    name: "Jonathan"
  }