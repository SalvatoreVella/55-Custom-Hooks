import React, { useState } from "react"
import GithubUser from "./GithubUser";


export default function GithubUserList({ names }) {
    const [state, setState] = useState(names);

        const users = state.map((item) => {
        return <GithubUser name={item}/>
        })

       const handleList = (event) => {
            event.preventDefault();
            setState((prev) => [
                ...prev, 
                event.target.elements.name.value])
        }

        return (
        <div>
            <form onSubmit={handleList}>
                <p>Search a Github User</p>
                <input type="text" name="name"></input>
                <button>Search</button>
            </form>
            {users}
        </div>
        )
    }

