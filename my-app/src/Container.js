import React from "react";

export class Container extends React.Component{
    render(){
        return(
            <div className="border-red">
                <div className="container-title">
                    {this.props.title}
                </div>
                {this.props.children}

            </div>
        )
    }
}