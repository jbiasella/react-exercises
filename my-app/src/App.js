import React from "react";
import { HookCounter} from "./Counter";
import { GithubUser } from "./GitHubUser";
import { GithubUserList } from "./GitHubUserList";
import { LoginForm } from "./Login";
import { CustomHookCounter } from "./CounterHook";
// import {Hello} from "./Hello";
// import {Welcome} from "./Welcome";
// import {WelcomeDefault} from "./WelcomeDefault";
//import { Sum } from "./Sum";


export function App(){
    
        return (
            <div>
                <GithubUser username='jbiasella'/>
                <HookCounter initialValue={2} onCounterChange={(counter)=>{console.log(`the counter is now ${counter}`)}}/>                <LoginForm/>
                <GithubUserList />
                <CustomHookCounter />
            </div>
        )
    
}
