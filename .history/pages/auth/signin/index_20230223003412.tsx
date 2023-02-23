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

            <form onSubmit={onSubmit} className="flex flex-col items-center">
                
                <input type="text" name="username" id="username" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value})} className="border-black border-b-2 h-[35px] w-[300px] outline-none uppercase font-semibold text-sm mb-5 py-2 px-4" placeholder="Nom d'utilisateur"/>

                <input type="password" name="password" id="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value})} className="border-black border-b-2 h-[35px] w-[300px] outline-none uppercase font-semibold text-sm mb-10 py-2 px-4" placeholder="Mot de passe"/>

                <button type="submit" className="">Se connecter</button>
            </form>
        </>
    )
}

export default SigninPage