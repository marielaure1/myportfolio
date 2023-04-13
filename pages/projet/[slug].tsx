import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import { CldImage  } from 'next-cloudinary'
import { IWork, Image } from '@/@types/work'
import { NextPage } from "next"
import Head from "next/head"

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


const SingleWorkPage: NextPage<Props> = ({ work }) => {
    return (
        <>
        <h2>Slug</h2>
        </>
    )
}

export default function Projet() {
    const router = useRouter()
    const { slug } = router.query 

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
        console.log(slug);
        
        fetch(`/api/works/${slug}`, { method: "GET"})
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
        if(slug){
            getWork()
        }

        
    }, [slug])

    if (work) {
        return (
            <>
                <Head>
                    <title>{ work.seo.title }</title>
                    <meta name="description" content={ work.seo.description } />
                    <meta property="og:description" content={ work.seo.description } />
                </Head>
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