import React from "react";
import Counter from "./Counter";
import Hello from "./Hello";
import Welcome from "./Welcome";
import WelcomeDefault from "./WelcomeDefault";



export function App(){
    
        return (
            <div>
                <Hello />
                <Welcome name="Jhon" age="25"/>
                <WelcomeDefault />
                <Counter value={0} incrementInterval={1} incrementAmount={1000}/>
                
            </div>
        )
    
}
