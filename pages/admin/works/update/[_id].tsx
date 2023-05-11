import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import { Icon } from '@iconify/react';
import {  CldUploadWidget, CldImage  } from 'next-cloudinary';
import { IWork, Image } from '@/@types/work'


type Props = {
    work: IWork[];
    image: Image[];
}

type WorkEdit = {
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
    category: string;
    link: string,
    github: string,
    figma: string,
    colorbg: string;
    colortxt: string;
  }

const {NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, NEXT_PUBLIC_CLOUDINARY_API_KEY,NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET } = process.env

export default function UpdateWork(){
    const router = useRouter()
    const { _id } = router.query 

    const [ message, setMessage ] = useState("");
    const [ workEdit, setWorkEdit] = useState<WorkEdit>({ 
        title: "",
        seo: { title: "", description: "" },
        slug: "",
        coverImage: { id: "", url: "", width: 0, height: 0 },
        galerieImage: [],
        description: "",
        published: true,
        category: "",
        link: "",
        github: "",
        figma: "",
        colorbg: "",
        colortxt: ""
    })
    // useEffect(() => {
    //     if (!['true', 'false'].includes(String(workEdit.published))) {
    //       setWorkEdit(prev => ({
    //         ...prev,
    //         published: true
    //       }));
    //     }
    //   }, [workEdit.published]);

    useEffect(() => {
        if(_id){
            getWork()
        }
    }, [_id])

    

    const getWork = () => {
        fetch(`/api/works/${_id}`, { method: "GET"})
        .then(response => response.json())
        .then((json) => {
            
            setWorkEdit(json.works)
        })
        .catch((error) => {
            console.log(error);  
        })
    } 
    
    const updateWork = async () => {

        setWorkEdit((prev) => ({
            ...prev,
            coverImage: workEdit.coverImage,
            galerieImage: workEdit.galerieImage
        }));

        fetch(`/api/works/${_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workEdit),
        })
        .then((response) => response.json())
        .then((json) => {
            setWorkEdit(json.works)
            setMessage(json.message);

            if(_id){
                getWork()
            }
        })
        .catch((error) => {
            console.log(error);  
        })
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value, name } = e.target;
        setWorkEdit((prev) => ({
          ...prev,
          title: id === 'title' ? value : prev.title,
          description: id === 'description' ? value : prev.description,
          slug: id === 'slug' ? value : prev.slug,
          seo: {
            ...prev.seo,
            title: id === 'seo.title' ? value : prev.seo.title,
            description: id === 'seo.description' ? value : prev.seo.description,
          },
          published: name === 'published' ? value === 'true' : prev.published,
          category: id === 'category' ? value : prev.category,
          link: id === 'link' ? value : prev.link,
          github: id === 'github' ? value : prev.github,
          figma: id === 'figma' ? value : prev.figma,
          colorbg: id === 'colorbg' ? value : prev.colorbg,
          colortxt: id === 'colortxt' ? value : prev.colortxt
        }));
      };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateWork();
        
    };

    const onCloudinaryUpload = (e: any) => {

        const newImage = {
            id: e.info.public_id,
            url: e.info.url,
            width: e.info.width,
            height: e.info.height
        }

        setWorkEdit((prev: any) => ({
            ...prev,
            galerieImage: [...prev.galerieImage, newImage],
        }));
    }

    const onCloudinaryUploadCover = (e: any) => {

        setWorkEdit((prev: any) => ({
            ...prev,
            coverImage: {
                id: e.info.public_id,
                url: e.info.url,
                width: e.info.width,
                height: e.info.height
            },
        }));
    }
    
    if(workEdit){
        return (
            <>
                <header className="banner">
                    <h1>Modification d'un projet</h1>
                    <span className='flex '>
                    <Link href="/admin/works"  className="btn-admin"><Icon icon="material-symbols:format-list-bulleted-rounded" /></Link>
                    
                    <Link href="/admin/works/create"  className="btn-admin"><Icon icon="material-symbols:add" /></Link>
                    
                    </span>
                </header>

                {message && <p id="message">{message}</p>}

                <section className="w-full px-[5vw] pb-[5vw] grid md:grid-cols-2 grid-cols-1 gap-[50px]">

                    <form onSubmit={handleSubmit} className="flex flex-col pl-[50px]">

                        <input type="text" id="title" name="title" placeholder="Titre du projet" value={workEdit.title} onChange={handleChange} className="champs" />

                        <input type="text" id="seo.title"  placeholder="Titre seo du projet" value={workEdit.seo.title} onChange={handleChange} className="champs"  />

                        <textarea id="seo.description" placeholder="Description seo du projet" value={workEdit.seo.description} onChange={handleChange} className="champs" maxLength={160}></textarea>

                        <CldUploadWidget uploadPreset={NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET} onUpload={onCloudinaryUploadCover}>
                        {({ open }) => {
                            function handleOnClick(e: any) {
                            e.preventDefault();
                            open();
                            }
                            return (
                            <button onClick={handleOnClick} className="btn-upload">
                                Uploader une image de couverture
                            </button>
                            );
                        }}
                    </CldUploadWidget>

                    <CldUploadWidget uploadPreset={NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET} onUpload={onCloudinaryUpload}>
                        {({ open }) => {
                            function handleOnClick(e: any) {
                            e.preventDefault();
                            open();
                            }
                            return (
                            <button onClick={handleOnClick} className="btn-upload">
                                Uploader des images pour la galerie
                            </button>
                            );
                        }}
                    </CldUploadWidget>

                        <input type="text" id="slug" name="slug" placeholder="Slug du projet" value={workEdit.slug} onChange={handleChange} className="champs"  />
                       
                        <textarea name="description" id="description" placeholder="Description du projet" value={workEdit.description} onChange={handleChange} className="champs" ></textarea>

                        <input type="text" id="category" name="category" placeholder="Categorie du projet" value={workEdit.category} onChange={handleChange} className="champs"  />
                        <input type="text" id="link" name="link" placeholder="Lien du projet" value={workEdit.link} onChange={handleChange} className="champs"  />
                        <input type="text" id="github" name="github" placeholder="Github du projet" value={workEdit.github} onChange={handleChange} className="champs" />
                        <input type="text" id="figma" name="figma" placeholder="Figma du projet" value={workEdit.figma} onChange={handleChange} className="champs" />
                        <input type="text" id="colorbg" name="colorbg" placeholder="Background-color du projet" value={workEdit.colorbg} onChange={handleChange} className="champs" />
                        <input type="text" id="colortxt" name="colortxt" placeholder="Color du projet" value={workEdit.colortxt} onChange={handleChange} className="champs" />

                        <label>
                        Publié :
                        <input
                            type="radio"
                            name="published"
                            value="true"
                            checked={workEdit.published === true}
                            onChange={handleChange}
                        /> Oui
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="published"
                            value="false"
                            checked={workEdit.published === false}
                            onChange={handleChange}
                        /> Non
                    </label>

                        <button type="submit" className=" mb-[20px] w-fit h-fit py-[10px] px-[20px] bg-black text-white" >Envoyer</button>
                    </form>

                    <div className="image-projet flex flex-col aspect-square">
                    { workEdit?.coverImage?.id && <CldImage width={ workEdit.coverImage.width } height={ workEdit.coverImage.height } src={ workEdit.coverImage.id } alt="Description of my image"  className="w-full  bg-black"/> }
                </div>
                    
                </section>

                <section className="grid grid-cols-4 gap-3 px-[5vw] pb-[5vw]">
                {workEdit?.galerieImage?.map((image) => (
                    <CldImage key={ image.id } width={ image.width } height={ image.height } src={ image.id } alt="Description of my image" />
                ))}
            </section>
            </>
        )
    }
}
