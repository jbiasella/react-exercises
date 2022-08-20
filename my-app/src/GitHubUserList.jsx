import React from 'react'
import { useState } from "react"
import { GithubUser } from "./GitHubUser"

export function GithubUserList() {
    const [user, setUser] = useState([])
    const [input, setInput] = useState("")

    function handleInputChange(event) {
        setInput(event.target.value)
    }

    function handleAdd() {
        setUser([...user, input])
    }

    function handleRemove(){
        setUser(user.slice(0, -1))
    }

    return(
        <>
<ul>
        {user.map((value, index) => (
          <li key={value + index}>
            <GithubUser username={value} />{" "}
          </li>
        ))}
      </ul>
      <input name="username" onChange={handleInputChange}></input>
      <button onClick={handleAdd}>Add user</button>
      <button onClick={handleRemove}>Remove user</button>
        </>
    )
}