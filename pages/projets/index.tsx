import { GetServerSideProps } from 'next'
import { IWork } from '@/@types/work'
import useSWR, {Fetcher} from 'swr'
import Link from "next/link"
import { useEffect, useState } from 'react'
import {  CldImage  } from 'next-cloudinary';

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

             console.log(json)
        })
    }, [])
    
    return (
        <>
        
            <header className="banner">
                <h1>Mes projets</h1>
            </header>

            <section className="w-full px-[5vw] pb-[5vw]">
                <div className="w-full box-border grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 auto-rows-[13vw] md:gap-[20px] gap-[10px]">
                    {works?.map((work) => {
                        if(work.published) {
                            return (
                    
                                <div key={work._id} className="card-projet border-b-4 border-black relative hoverable-text" data-text={ work.title } >
                                    <Link href={`/projet/${work._id}`}>
                                    
                                        <CldImage width={ work.coverImage.width } height={ work.coverImage.height } src={ work.coverImage.id } sizes="(max-width: 600px) 100vw, 600px" alt="Développeur web freelance, création de site web"  className="object-cover object-center w-full h-full"/>
                                        <div className="absolute bottom-0 left-0 w-full p-5 text-white bg-black/50">
                                            <h2 className="uppercase font-semibold text-lg mb-2.5">{work.title}</h2>
                                            <p className="text-sm">{work.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }

                        return null

                    })}
                </div>
            </section>

        </>
    )
}


