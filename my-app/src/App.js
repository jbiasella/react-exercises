import React from "react";
import { HookCounter} from "./Counter";
import { LoginForm } from "./Login";
// import {Hello} from "./Hello";
// import {Welcome} from "./Welcome";
// import {WelcomeDefault} from "./WelcomeDefault";
//import { Sum } from "./Sum";


export function App(){
    
        return (
            <div>
                
                <HookCounter initialValue={2} onCounterChange={(counter)=>{console.log(`the counter is now ${counter}`)}}/>                <LoginForm/>
            </div>
        )
    
}
