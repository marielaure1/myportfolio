import { FC } from 'react';

const SigninForm: FC = () => {
    return (
        <>
            <main>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" />
                    <label htmlFor="name">Name</label>
                    <input type="password" id="password" name="password" />
                    <button type="submit">Connexion</button>
                </form>
            </main>
        </>
    )
}

export default SigninForm;