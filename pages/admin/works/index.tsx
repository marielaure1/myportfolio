import { GetServerSideProps } from 'next'
import { IWork, Image } from '@/@types/work'
import { NextPage } from "next"
import useSWR, {Fetcher} from 'swr'
import Link from "next/link"
import { useEffect, useState } from 'react'
// import "@/public/js/myAnimation/myAnimation.js"
import Script from "next/script"
// import {IonIcon} from "react-ion-icon";
import { signOut, useSession } from 'next-auth/react'
import { Icon } from '@iconify/react';
import { CldImage  } from 'next-cloudinary';

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
    github: string;
    figma: string;
    colorbg: string;
    colortxt: string;
  }

export default function Works({ work }: Props){
    const [ message, setMessage ] = useState("");
    const [ works, setWorks ] = useState<IWork[] | null>(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const { data: session } = useSession()
    
    useEffect(() => {
        fetch(`/api/works`)
        .then(response => response.json())
        .then((json) => {
            
            setWorks(json.works)
            setIsLoading(false)
        })
    }, [])

    const deleteWork = async(id: string) => {
        fetch(`/api/works/${id}`, { method: "DELETE"})
        .then(response => response.json())
        .then((json) => {
            console.log(json);
            
            setWorks(json.works)
            setMessage(json.message)  
            setIsLoading(false)
        })
    }

    // if(!isLoading){
    //     return <> <h2>Chargement</h2></>
    // }

    
    if(works){
        return (
            <>
                <header className="banner">
                <h2>Bienvenue {session?.user?.name}</h2>
                    <h1 className="hoverable-difference animation animation-bounce-letter">Mes travaux</h1>
                    <Link href="/admin/works/create"  className="btn-admin">
                    <Icon icon="material-symbols:add" />
                        </Link>
                </header>

                {message && <p id="message">{message}</p>}

                <section className="w-full px-[5vw] pb-[5vw]">
                    <div className="w-full box-border grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  auto-rows-[13vw] gap-[20px]">
                        {works.map((work) => (
                            <div key={work._id} className="card-projet border-b-4 border-solid border-black relative card-projet-admin" >
                                <Link href={`/admin/works/${work._id}`}>
                                    <CldImage width={ work.coverImage.width } height={ work.coverImage.height } src={ work.coverImage.id } alt="Description of my image"  className="object-cover object-center w-full h-full"/>
                                    <div className="absolute bottom-0 left-0 w-full p-5 text-white bg-black/50 z-[5]">
                                        <h2 className="uppercase font-semibold text-lg mb-2.5">{work.title}</h2>
                                        <p className="text-sm">{work.description}</p>
                                    </div>
                                </Link>
                                <div>
                                    <Link href={`/admin/works/update/${work._id}`} className="btn-admin">
                                    <Icon icon="mdi:pencil" className="text-white"/>
                                        </Link>
                                    <button onClick={() => deleteWork(work._id)} className="btn-admin">
                                    <Icon icon="mdi:bin-empty" className="text-white"/>
                                        </button>
                                </div>
                            </div>
                         ))}
                    </div>
                </section>

            </>
        )
    }
}

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//     const res = await fetch(`/api/works`);
//     const { works } = await res.json();
  
//     return { props: { works } };
//   };
  
