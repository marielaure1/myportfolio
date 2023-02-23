import { log } from "console"
import {NextPage} from "next"
import { FormEvent, useState} from "react"

export const SigninPage: NextPage = () => {
    const [credentials, setCredentials] = useState({username: '', password: ''})

    const onSubmit = (e: FromEvent<HTMLFormElement>) => {
        e.preventDrfault()
        console.log("pages/auth/login")
    }
}

