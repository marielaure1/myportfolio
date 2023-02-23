import { log } from "console"
import {NextPage} from "next"
import { FormEvent, useState} from "react"

const SigninPage: NextPage = () => {
    const [credentials, setCredentials] = useState({username: '', password: ''})

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("pages/auth/login/index.tsx > credentials", credentials)
    }

    return (
        <>  
            <h1 className="upper">Connexion</h1>

            <form onSubmit={onSubmit}>
                

                <label htmlFor="username">Nom d'utilisateur:</label>
                <input type="text" name="username" id="username" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value})}/>

                <label htmlFor="password">Mot de passe:</label>
                <input type="password" name="password" id="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value})}/>

                <button type="submit">Connexion</button>
            </form>
        </>
    )
}

export default SigninPage