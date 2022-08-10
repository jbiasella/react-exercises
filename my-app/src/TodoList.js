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

  resetList = (event) => {
    event.preventDefault()
    this.setState({
      items: [],
      name: ""
    })
  }

  removeListElement = (event) =>{
    event.preventDefault()
    let indexOfItemToRemove = this.state.items.indexOf(this.state.name)

    this.state.items.includes(this.state.name) ?
    this.state.items.splice(indexOfItemToRemove,1)
    : console.log('the input is not valid!')
    this.setState({
        items: this.state.items,
        name: ""
    })

}

  render() {
    return (
      <div>
      <ul>
        {this.props.render(this.state.items)}
      </ul>
        <form onSubmit={this.addElementToList}>
          <input type="text" name="newItem" value={this.state.name} onChange={this.handleControlledNameChange} />
          <button type="submit" name="addToList">Add to list</button>
          <button name="reset" onClick={this.resetList}>reset</button>
          
        </form>
      </div>
    )
  }
}