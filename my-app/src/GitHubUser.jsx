import { useState } from "react"
import { useEffect } from "react"

export function GithubUser({ username }) { 

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchGithubUser(username) {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(`http://api.github.com/users/${username}`)
            const json = await response.json()

            setData(json)

        } catch (error) {

            setError(error)
            setData(null)
        } finally {
            setLoading(false)
        }
        console.log(data)
    }

    useEffect(() => {
        fetchGithubUser(username)
        
    }, [username])

    return <div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>There has been an error</h1>}
        {data && <h1>Name: {data.name}</h1>}
        {data && <h1>Repositories: {data.public_repos}</h1>}
        
        
    </div>
}
