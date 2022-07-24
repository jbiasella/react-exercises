import React from "react";


export default class Welcome extends React.Component{
    render() {

        return (
            <div>
            <p>Hello, {this.props.name} </p>
            <Age age={this.props.age} />
            </div> 
        )
    }
        
}


export class Age extends React.Component{
    render(){
        
        return(
            <div> 
                {this.props.age
                ? (<p>Your age is {this.props.age}</p> ) 
                : (<p>Non ho un parametro valido</p>)}
            </div>
        )
        
    }
}

Welcome.defaultProps = {
    name: "Jonathan"
  }