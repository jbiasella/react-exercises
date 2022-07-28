import React from "react";
import ClickTracker from "./ClickTracker";
import Counter from "./Counter";
import ClickCounter from "./CounterClick";
import Hello from "./Hello";
import Welcome from "./Welcome";
import WelcomeDefault from "./WelcomeDefault";
import  InteractiveWelcome from "./InteractiveWelcome";
import Login from "./forms-03";

export default class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome name="Jhon" age="25"/>
                <WelcomeDefault />
                <Counter value={0} incrementInterval={1} incrementAmount={1000}/>
                <ClickCounter />
                <ClickTracker/>
                <InteractiveWelcome/>
                <Login/>
            </div>
        )
    }
}
