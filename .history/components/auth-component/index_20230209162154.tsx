import { FC } from 'react';

const ContactForm: FC = () => {
    return (
        <>
            <main>
                <form>
                    <label htmlFor="Username">Username</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="name">Name</label>
                    <input type="password" id="password" name="password" />
                    <button type="submit">Send</button>
                </form>
            </main>
        </>
    )
}

export default ContactForm;