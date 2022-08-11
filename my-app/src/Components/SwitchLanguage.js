import React from "react";
import Hello from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";


export class LanguageSwitch extends React.Component {
    state = {
        language: 'en'
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
        console.log(this.state.language)
    }
    render() {
        return (
            <>
                <select value={this.state.value} onChange={this.handleLanguageChange}>
                    <option value='en'>ENGLISH</option>
                    <option value='it'>ITALIANO</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>

                    <Hello />

                </LanguageContext.Provider>
            </>
        )
    }
}