import { useState, useEffect } from "react"

export const useGithubUser = (name) => {
    const [state, setState] = useState({
        name: "",
        id: "",
        followers: "",
        repos: ""
    });

    useEffect(() => {
        async function fetchData(username) {
            try {
                const fetchData = await fetch(`https://api.github.com/users/${username}`);
                const data = await fetchData.json();
                setState(() => {
                    return {
                        name: data.name,
                        id: data.id,
                        followers: data.followers,
                        repos: data.public_repos
                    }
                })
            } catch (err) {
                console.log(err);
            }
        }
        fetchData(name)
    }
        , [name]);
        return [state, setState];
}