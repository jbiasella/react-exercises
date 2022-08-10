import React from "react";
import Counter from "./Counter";
import Hello from "./Hello";
import Welcome from "./Welcome";
import WelcomeDefault from "./WelcomeDefault";
import { Container } from "./Container";
import TodoList from "./TodoList";


export default class App extends React.Component{
    render(){
        return (
            <Container title="My Awesome Container">
                <Hello />
                <Welcome name="Jhon" age="25"/>
                <WelcomeDefault />
                <Counter value={0} incrementInterval={1} incrementAmount={1000}/>
                <TodoList render={(array) => array.map((item, index) => <div><li key={index}>{item}</li><button onClick={(event) => {
                    event.preventDefault()
                    array.splice(index, 1)
                    this.setState({
                        items: array,
                        name: ""
                    })
                }}>remove {item}</button></div>)} />
            </Container>
        )
    }
}
