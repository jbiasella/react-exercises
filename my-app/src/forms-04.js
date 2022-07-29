import React from "react"


export default class Login extends React.Component{

    state = {
        username: '',
        password: '',
        compiled: false,
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        

        this.setState({
            [name]: value, // se(?) il mio type è di tipo checkbox userò checked, altrimenti(:) userò value
            compiled: this.state.username !== "" && this.state.password !== "" ? true : false,
            
            
        })



        }

        resetState = () => {
            
            this.setState({
                username: '',
                password: '',
                compiled: false,

            })
       
    }




    

    render(){
        return(
            <div>

                <div>
                    <input name="username" type ='text' value={this.state.username} onChange={this.handleInputChange}/>
                    <input name="password" type='password' value={this.state.password} onChange={this.handleInputChange}/>

                    <button disabled = {!this.state.compiled}>LOGIN</button>
                    <button type="reset" name="reset" onClick={this.resetState}>RESET</button>           
                </div>

            </div>
        )
    }
}