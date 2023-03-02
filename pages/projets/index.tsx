import "@/assets/js/main.js"

import { GetServerSideProps } from 'next'
import { IWork } from '@/@types/work'
import { NextPage } from "next"
import useSWR, {Fetcher} from 'swr'
import Link from "next/link"
import { useEffect, useState } from 'react'



type Props = {
    work: IWork[];
}

export default function Projets({ work }: Props){
    const [ works, setWorks ] = useState<IWork[] | null>(null);
    const [ isLoading, setIsLoading ] = useState(false);
    


    
    useEffect(() => {
        fetch(`/api/works`)
        .then(response => response.json())
        .then((json) => {
            
            setWorks(json.works)
            setIsLoading(false)
        })
    }, [])

    const deleteWork = async(id: string) => {
            fetch(`/api/works/${id}`)
            .then(response => response.json())
            .then((json) => {
                
                setWorks(json.works)
                setIsLoading(false)
            })

        
    }

    // if(!isLoading){
    //     return <> <h2>Chargement</h2></>
    // }

    
    if(works){
        return (
            <>
                <header className="w-full px-[5vw] pt-[50px] flex">
                    <h1 className="pb-[5vw] text-7xl font-semibold uppercase">Mes projets</h1>
                </header>

                <section className="w-full px-[5vw] pb-[5vw]">
                    <div className="w-full box-border grid grid-cols-3 auto-rows-[13vw] gap-[20px]">
                        {works.map((work) => (
                            <div className="card-projet border-b-4 border-black relative">
                                <Link href={`/projet/${work._id}`}>
                                    <img src={"/img/works/" + work.coverImage} alt="" className="object-cover object-center w-full h-full"/>
                                    <div className="absolute bottom-0 left-0 w-full p-5 text-white bg-black/50">
                                        <h2 className="uppercase font-semibold text-lg mb-2.5">{work.title}</h2>
                                        <p className="text-sm">{work.description}</p>
                                    </div>
                                </Link>
                            </div>
                         ))}
                    </div>
                </section>
    
            </>
        )
    }
}
