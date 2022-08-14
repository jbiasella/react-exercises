import React from "react";


export function Sum({numbers=[3,5]}){
    let result = numbers.reduce((current, next)=> current+= next, 0)
        return(
    <>
    <h1>{result}</h1>
    </>
)
}

