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
    link: string;
    category: string;
}

// const SingleWorkPage: NextPage<Props> = ({ work }) => {
//     return (
//         <>
//         <h2>Slug</h2>
//         </>
//     )
// }

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
        published: true,
        link: "",
        category: ""
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
                <Head>
                    <title>{ work.seo.title }</title>
                    <meta name="description" content={ work.seo.description } />
                    <meta property="og:description" content={ work.seo.description } />
                </Head>
                <header className="banner">
                    <h1>{ work.title }</h1>
                </header>
                <section className="px-[5vw] pb-[5vw]">
                
                    <div className='w-full border-b-2 border-black border-solid pb-2 mb-20'>
                       <p className="text-end">Categorie</p>
                    </div>
                    <div className='flex'>
                        <CldImage width={ work.coverImage.width } height={ work.coverImage.height } src={ work.coverImage.id } alt="Développeuse web freelance"  className="w-2/3 bg-black"/>
                        <div className='w-1/3 pt-[60px]'>
                            
                            <p className="text-end italic mb-6">{ work.description }</p>
                            <Link href="#" target="_blank" className="form-btn float-right">Voir le site</Link>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-20'>
                        { work.galerieImage.map((img) => (
                             <CldImage key={ img.id } width={ img.width } height={ img.height } src={ img.id } alt="Développeuse web freelance" className="w-full projet-galerie"/>
                        ))}
                    </div>
                </section>
            </>
        )
    }

  
}