import { GetServerSideProps } from 'next'
import { IWork } from '@/@types/work'
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

             console.log(json)
        })
    }, [])
    
    return (
        <>
        
            <header className="banner">
                <h1>Mes projets</h1>
            </header>

            <section className="w-full md:px-[5vw] px-0 pb-[5vw]">
                <div className="w-full box-border grid md:grid-cols-3 grid-cols-2 auto-rows-[13vw] md:gap-[20px] gap-[10px]">
                    {works?.map((work) => (
                        <div key={work._id} className="card-projet border-b-4 border-black relative hoverable-text" data-text={ work.title } >
                            <Link href={`/projet/${work._id}`}>
                                <img src={work.coverImage} alt="Développeur web freelance, création de site web" className="object-cover object-center w-full h-full"/>
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


