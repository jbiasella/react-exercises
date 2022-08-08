import React from "react";

import UncontrolledLogin from "./forms-06";

export default class App extends React.Component{
    render(){
        return (
            <div>
                <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
                <UncontrolledLogin/>
            </div>
        )
    }
}
