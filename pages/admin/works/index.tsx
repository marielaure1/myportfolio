import { GetServerSideProps } from 'next'
import { IWork } from '@/@types/work'
import { NextPage } from "next"
import useSWR, {Fetcher} from 'swr'
import Link from "next/link"
import { useEffect, useState } from 'react'
// import "@/public/js/myAnimation/myAnimation.js"
import Script from "next/script"
// import {IonIcon} from "react-ion-icon";
import { signOut, useSession } from 'next-auth/react'

type Props = {
    work: IWork[];
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
                    <Link href="/admin/works/create"  className="btn-admin"><ion-icon name="add-outline"/></Link>
                </header>

                

                {message && <p>{message}</p>}


                <section className="w-full px-[5vw] pb-[5vw]">
                    <div className="w-full box-border grid grid-cols-3 auto-rows-[13vw] gap-[20px]">
                        {works.map((work) => (
                            <div key={work._id} className="card-projet border-b-4 border-solid border-black relative card-projet-admin" >
                                <Link href={`/admin/works/${work._id}`}>
                                    {/* <img src={work.coverImage} alt="" className="object-cover object-center w-full h-full"/> */}
                                    <div className="absolute bottom-0 left-0 w-full p-5 text-white bg-black/50 z-[5]">
                                        <h2 className="uppercase font-semibold text-lg mb-2.5">{work.title}</h2>
                                        <p className="text-sm">{work.description}</p>
                                    </div>
                                </Link>
                                <div>
                                    <Link href={`/admin/works/update/${work._id}`} className="btn-admin"><ion-icon name="pencil"></ion-icon></Link>
                                    <button onClick={() => deleteWork(work._id)} className="btn-admin"><ion-icon name="trash-bin"></ion-icon></button>
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
//     const res = await fetch(`http://localhost:3000/api/works`);
//     const { works } = await res.json();
  
//     return { props: { works } };
//   };
  
