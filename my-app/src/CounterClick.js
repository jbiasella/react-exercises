import React from "react";

export default class ClickCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 0};
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick() {
      this.setState(state => ({
        count: state.count + 1,
      }));
    }
    render() {
      return (
        <div>
          <p>Click sul pulsante: {this.state.count} </p>
          <button onClick={this.handleClick}>
            Cliccami
          </button>
        </div>
      );
    }
  }