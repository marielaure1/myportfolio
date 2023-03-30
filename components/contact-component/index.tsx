import { FC } from 'react';
import {  useState } from 'react'

const ContactForm: FC = () => {
    const [ courrier, setCourrier ] = useState({
        name: "",
        phone: "",
        email: "",
        sujet: "",
        message: ""
    });

    const [ message, setMessage ] = useState("");
    const [ error, setError ] = useState({
        name: "",
        phone: "",
        email: "",
        sujet: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        
        fetch(`/api/mail`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(courrier),
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            
            if(json.error){
                setError(json.error);
            } else {
                setMessage(json.message);
                setCourrier({
                    name: "",
                    phone: "",
                    email: "",
                    sujet: "",
                    message: ""
                });
            }
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(courrier);
        
        const { id, value } = e.target;
        setCourrier((prev) => ({
          ...prev,
          name: id === 'name' ? value : prev.name,
          phone: id === 'phone' ? value : prev.phone,
          email: id === 'email' ? value : prev.email,
          sujet: id === 'sujet' ? value : prev.sujet,
          message: id === 'message-contact' ? value : prev.message,
        }));
      };

    return (
        <>
           {message && <p id="message">{message}</p>}

           <p className="content mb-5 italic times sm:mt-0 mt-10">Lorem ipsum dolor sit amet consectetur. Lectus nulla sagittis sed vestibulum et eget suspendisse pellentesque. </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:pl-[50px] pl-0">
                <input type="text" id="name" name="name" placeholder="Nom complet*" className="champs" value={courrier.name} onChange={handleChange} />
                {error?.name && <p className="courrier-error">{error.name}</p>}

                <input type="tel" id="phone" name="phone" placeholder="Téléphone*"   className="champs"  value={courrier.phone} onChange={handleChange}/>
                {error?.phone && <p className="courrier-error">{error.phone}</p>}

                <input type="email" id="email"  placeholder="Email*" className="champs" value={courrier.email} onChange={handleChange}/>
                {error?.email && <p className="courrier-error">{error.email}</p>}

                <input type="text" id="sujet"  placeholder="Sujet*" className="champs" value={courrier.sujet} onChange={handleChange}/>
                {error?.sujet && <p className="courrier-error">{error.sujet}</p>}
            
                <textarea name="message" id="message-contact" placeholder="Message*" className="champs" value={courrier.message} onChange={handleChange}></textarea>
                {error?.message && <p className="courrier-error">{error.message}</p>}

                <button type="submit" className="form-btn">Envoyer</button>
            </form>
        </>
    )
}

export default ContactForm;