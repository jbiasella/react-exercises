import React from "react";
import Counter from "./Counter";




export default class App extends React.Component{
    render(){
        return (
            <div>

                <Counter value={0} incrementInterval={1000} incrementAmount={1}/>
            </div>
        )
    }
}
