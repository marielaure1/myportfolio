import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import {IonIcon} from "react-ion-icon";

export default function CreateWork(){
    const router = useRouter()
    const { _id } = router.query 

    const [ message, setMessage ] = useState("");
    const [workEdit, setWorkEdit] = useState({ 
        title: "",
        seo: { title: "", description: "" },
        slug: "",
        coverImage: "",
        description: "",
    });

    

    const getWork = () => {
        fetch(`/api/works/${_id}`, { method: "GET"})
        .then(response => response.json())
        .then((json) => {
            
            setWorkEdit(json.works)
        })
        .catch((error) => {
            console.log(error);  
        })
    } 

    useEffect(() => {
        if(_id){
            getWork()
        }
    }, [_id])
    
    const updateWork = async () => {
        fetch(`/api/works/${_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workEdit),
        })
        .then((response) => response.json())
        .then((json) => {
            setWorkEdit(json.works)
            setMessage(json.message);

            if(_id){
                getWork()
            }
        })
        .catch((error) => {
            console.log(error);  
        })
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setWorkEdit((prev) => ({
          ...prev,
          title: id === 'title' ? value : prev.title,
          description: id === 'description' ? value : prev.description,
          slug: id === 'slug' ? value : prev.slug,
          coverImage: id === 'coverImage' ? value : prev.coverImage,
          seo: {
            ...prev.seo,
            title: id === 'seo.title' ? value : prev.seo.title,
            description: id === 'seo.description' ? value : prev.seo.description,
          },
        }));
      };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateWork();
        
    };
    
    if(workEdit){
        return (
            <>
                <header className="w-full px-[5vw] pt-[15vw] flex justify-between items-end mb-[5vw] ">
                    <h1 className="text-7xl font-semibold uppercase w-fit">Modification d'un projet</h1>
                    <span className='flex '>
                    <Link href="/admin/works"  className="btn-admin"><IonIcon  name="list-outline"></IonIcon></Link>
                    <Link href="/admin/works/create"  className="btn-admin"><IonIcon name="add-outline"></IonIcon></Link>
                    
                    </span>
                </header>

                {message && <p id="message">{message}</p>}

                <section className="w-full px-[5vw] pb-[5vw]">

                    <form onSubmit={handleSubmit} className="flex flex-col pl-[50px]">
                        <input type="text" id="title" name="title" placeholder="Titre du projet" value={workEdit.title} onChange={handleChange} className="border-b-2 border-black mb-[20px] w-[50%] py-[10px] px-[20px]" />
                        <input type="text" id="seo.title"  placeholder="Titre seo du projet" value={workEdit.seo.title} onChange={handleChange} className="border-b-2 border-black mb-[20px] w-[50%] py-[10px] px-[20px]"  />
                        <textarea id="seo.description" placeholder="Description seo du projet" value={workEdit.seo.description} onChange={handleChange} className="border-b-2 border-black mb-[20px] w-[50%] h-fit py-[10px] px-[20px]" maxLength={160}></textarea>

                        <input type="text" id="slug" name="slug" placeholder="Slug du projet" value={workEdit.slug} onChange={handleChange} className="border-b-2 border-black mb-[20px] w-[50%] py-[10px] px-[20px]"  />
                        <input type="text" id="coverImage" name="coverImage" placeholder="Image du projet" value={workEdit.coverImage} onChange={handleChange}  className="border-b-2 border-black mb-[20px] w-[50%] py-[10px] px-[20px]" />
                        <textarea name="description" id="description" placeholder="Description du projet" value={workEdit.description} onChange={handleChange} className="border-b-2 border-black mb-[50px] w-[50%] py-[10px] px-[20px]" ></textarea>

                        <button type="submit" className=" mb-[20px] w-fit h-fit py-[10px] px-[20px] bg-black text-white" >Envoyer</button>
                    </form>
                    
                </section>
            </>
        )
    }
}
