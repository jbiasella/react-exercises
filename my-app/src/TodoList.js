import React from "react";

export default class TodoList extends React.Component {

  state = {
    items: ['Baku', 'Elio', 'Karim', 'Martina'],
    name: ""
  }

  handleControlledNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
    return console.log(this.state)
  }

  addElementToList = (event) => {
    event.preventDefault()

    this.setState({
      items: [...this.state.items, this.state.name],
      name: ''
    })
  }

  render() {
    return (<div>
      <ul>{this.state.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
      <form onSubmit={this.addElementToList}>
        <input type="text" name="newItem" value={this.state.name} onChange={this.handleControlledNameChange} />
        <button type="submit" name="addToList">Add to list</button>
      </form>
    </div>)
  }
}