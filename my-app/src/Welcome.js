import React from "react";


export default class Welcome extends React.Component{
    render() {

        return (
            <div>
            <p>Hello, {this.props.name} </p>
            
            {this.props.age >= 18 && <Age age={this.props.age} />}
            
            </div> 
        )
    }
        
}


export class Age extends React.Component{
    render(){
        
        return(
            <div> 
                
                <p>Your age is {this.props.age}</p>
                
            </div>
        )
        
    }
}

Welcome.defaultProps = {
    name: "Jonathan"
  }