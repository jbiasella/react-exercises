import React from "react";


export function Sum({numbers}){
    let result = numbers.reduce((current, next)=> current+= next, 0)
    
    return(
    <>
    <h1>{result}</h1>
    </>
)
}