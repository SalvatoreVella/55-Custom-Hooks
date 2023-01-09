import React, { useState } from "react"
import GithubUser from "./GithubUser";


export default function GithubUserList({ names }) {
    const [state, setState] = useState(names);

        const users = state.map((item) => {
        return <GithubUser name={item}/>
        })

       const handleList = (event) => {
            event.preventDefault();
            if (event.target.elements.name.value) {
                setState((prev) => [
                    ...prev, 
                    event.target.elements.name.value])
            }
        }

        return (
        <div>
            <form onSubmit={handleList}>
                <h1>Add a Github User</h1>
                <input type="text" name="name"></input>
                <button>Add User</button>
            </form>
            {users}
        </div>
        )
    }

