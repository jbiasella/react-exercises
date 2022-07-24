import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";
import WelcomeDefault from "./WelcomeDefault";



export default class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome name="Manuel" age="30 (PS: non menarmi!)"/>
                
                <WelcomeDefault />
            </div>
        )
    }
}
