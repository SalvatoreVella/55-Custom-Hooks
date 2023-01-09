import React from "react"
import { useGithubUser } from "./useGithubUser"

export default function GithubUser({ name }) {
    const [state] = useGithubUser(name);
    return (
        <div>
            <h1>Github Profile: {state.name}</h1>
            <p>User id: {state.id}</p>
            <p>Followers: {state.followers}</p>
            <p>Repos: {state.repos}</p>
        </div>
    )
}