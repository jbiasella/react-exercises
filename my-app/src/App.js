import React from "react";
// import {Counter} from "./Counter";
// import {Hello} from "./Hello";
// import {Welcome} from "./Welcome";
// import {WelcomeDefault} from "./WelcomeDefault";
import { Sum } from "./Sum";


export function App(){
    
        return (
            <div>
                {/* <Hello />
                <Welcome name="Jhon" age="25"/>
                <WelcomeDefault />
                <Counter value={0} incrementInterval={1} incrementAmount={1000}/> */}
                <Sum numbers={[1,2,3,4,5]}/>
            </div>
        )
    
}
