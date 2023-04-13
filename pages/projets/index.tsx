import { GetServerSideProps } from 'next'
import { IWork } from '@/@types/work'
import Link from "next/link"
import { useEffect, useState } from 'react'
import {  CldImage  } from 'next-cloudinary';

type Props = {
    work: IWork[];
}

export default function Projets({ work }: Props){
    const [ works, setWorks ] = useState<IWork[] | null>(null);
    
    useEffect(() => {
        fetch(`/api/works`)
        .then(response => response.json())
        .then((json) => {
            
            setWorks(json.works)

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
                                    
                                        <CldImage width={ 600 } height={ 600 } src={ work.coverImage.id } sizes="(min-width: 480px ) 50vw, (min-width: 728px) 33vw, (min-width: 976px) 25vw,100vw" alt="Développeur web freelance, création de site web"  className="object-cover object-center w-full h-full" loading="lazy"/>
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

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/works`);
      const json = await response.json();
      return { props: { work: json.works } };
    } catch (error) {
      console.error(error);
      return { props: { work: null } };
    }
  };

