import React from "react"

export default class Counter extends React.Component{
    state= { count: this.props.value}

 constructor(props){
    super(props)
    setInterval(() =>{
        this.setState({
            count: this.state.count + this.props.incrementInterval
        })
    }, this.props.incrementAmount)
 }   
render(){
    return <h1>{this.state.count}</h1>
}
}