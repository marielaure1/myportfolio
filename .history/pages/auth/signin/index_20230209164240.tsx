import { log } from "console"
import {NextPage} from "next"
import { FormEvent, useState} from "react"

export const SigninPage: NextPage = () => {
    const [credentials, setCredentials] = useState({username: '', password: ''})

    const onSubmit = (e: FromEvent<HTMLFormElement>) => {
        e.preventDrfault()
        console.log("pages/auth/login/index.tsx > credentials", credentials)

    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Login</h1>

            <label htmlFor="username">Nom d'utilisateur:</label>
            <input type="text" name="username" id="username" value="{credentials.username}" onChange={(e) => setCredentials({ ...credentials, username: e.target.value})}/>

            <label htmlFor="password">Mot de passe:</label>
            <input type="password" name="password" id="password" value="{credentials.password}" onChange={(e) => setCredentials({ ...credentials, password: e.target.value})}/>
        </form>
    )
}

