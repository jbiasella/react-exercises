import React from "react";
import { GithubUser } from "./GithubUser";

export class App extends React.Component {
    render(){
        return(
            <div>
            <GithubUser name="jbiasella" />
            </div>
        )
    }
}