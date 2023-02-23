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
            <h1 className="pb-[5vw] text-4xl font-semibold uppercase text-center">Connexion</h1>

            <form onSubmit={onSubmit} className="flex ">
                

                <label htmlFor="username" className="uppercase font-semibold text-sm">Nom d'utilisateur : </label>
                <input type="text" name="username" id="username" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value})}/>

                <label htmlFor="password" className="uppercase font-semibold text-sm">Mot de passe : </label>
                <input type="password" name="password" id="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value})}/>

                <button type="submit">Se connecter</button>
            </form>
        </>
    )
}

export default SigninPage