import React from "react"
import { LanguageContext } from "./LanguageContext"




const Strings = {
    en: {
        TEXT: "Hello, World!"
    },
    it: {
        TEXT: "Ciao, Mondo!"
    }
}
export default class Hello extends React.Component {
    render() {
        return (
            <div>
                <LanguageContext.Consumer>
                    {language => {
                        return (
                            <div>
                                <h1>  {Strings[language].TEXT} </h1>
                            </div>
                        )
                    }}

                </LanguageContext.Consumer>

            </div>
        )
    }
}