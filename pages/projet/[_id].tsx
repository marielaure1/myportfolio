import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"

export default function Projet() {
    const router = useRouter()
    const { _id } = router.query 

    const [ message, setMessage ] = useState("");
    const [work, setWork] = useState({ 
        title: "",
        seo: { title: "", description: "" },
        slug: "",
        coverImage: "",
        description: "",
    });

    const getWork = () => {
        console.log(_id);
        
        fetch(`/api/works/${_id}`, { method: "GET"})
        .then(response => response.json())
        .then((json) => {
            
            setWork(json.works)
            console.log(json);
            
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

    if (work) {
          return (
        <>
            <header className="banner">
                <h1>{ work.title }</h1>
            </header>
        </>
    )
    }

  
}