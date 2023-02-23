import { FC } from 'react';

const ContactForm: FC = () => {
    return (
        <>
            <main>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                    <button type="submit">Send</button>
                </form>
            </main>
        </>
    )
}

export default ContactForm;