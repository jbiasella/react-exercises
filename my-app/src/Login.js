import React from "react"


export default class Login extends React.Component{

    state = {
        username: '',
        password: '',
        checkbox: false,
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value // se(?) il mio type è di tipo checkbox userò checked, altrimenti(:) userò value

           
        })
    }

    render(){
        return(
            <div>

                <div>
                    <input name="username"/>
                    <input name="password" type='password'/>
                    <input name="checkbox" type="checkbox"/>
                </div>

            </div>
        )
    }
}