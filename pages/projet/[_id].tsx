import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import { CldImage  } from 'next-cloudinary'
import { IWork, Image } from '@/@types/work'

type Props = {
    work: IWork[];
    image: Image[];
}

type Work = {
    title: string;
    slug: string;
    description: string;
    coverImage: {
        id: string;
        url: string;
        width: number;
        height: number;
    };
    galerieImage: Image[];
    seo: {
      title: string;
      description: string;
    };
    published: Boolean;
  }
;

export default function Projet() {
    const router = useRouter()
    const { _id } = router.query 

    const [ message, setMessage ] = useState("");
    const [work, setWork] = useState<Work>({ 
        title: "",
        seo: { title: "", description: "" },
        slug: "",
        coverImage: { id: "", url: "", width: 0, height: 0 },
        galerieImage: [],
        description: "",
        published: true
    })

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
            <section className="px-[5vw] pb-[5vw]">
            {/* <CldImage width={ work.coverImage.width } height={ work.coverImage.height } src={ work.coverImage.id } alt="Description of my image"  className="w-1/2 bg-black"/> */}
            <p>{ work.description }</p>
            </section>
        </>
    )
    }

  
}