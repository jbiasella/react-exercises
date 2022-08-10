import React from "react";

export default class WelcomeDefault extends React.Component{
    render() {
        return <p>Hello, <em>{this.props.name}</em> </p>
    }
}

WelcomeDefault.defaultProps = {
    name: "Name not defined"
  }