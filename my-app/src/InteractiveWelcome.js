import React from "react"

export default class InteractiveWelcome extends React.Component{

    state ={
        username: ''
    }

    handleInputChange = (event) => {
        const value = event.target.value

        this.setState({
            name : value
        })
    }
    render(){
        return(
            <div>

            
            <div>Welcome <strong>{this.state.name}</strong>!!</div>
            <div>
                <input name="username" type='text' placeholder="Inserisci qualcosa" value={this.state.text} onChange={this.handleInputChange}/>
            </div>
            </div>
        )
    }
}


