import {  useState, useEffect } from 'react'
import Link from "next/link"
import {  CldUploadWidget, CldImage  } from 'next-cloudinary';
import { IWork, Image } from '@/@types/work'
import { Icon } from '@iconify/react';

type Props = {
    work: IWork[];
    image: Image[];
}

type WorkCreate = {
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

const {NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, NEXT_PUBLIC_CLOUDINARY_API_KEY,NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET } = process.env

export default function CreateWork({ image }: Props){
    const [ message, setMessage ] = useState("")
    const [workCreate, setWorkCreate] = useState<WorkCreate>({ 
        title: "",
        seo: { title: "", description: "" },
        slug: "",
        coverImage: { id: "", url: "", width: 0, height: 0 },
        galerieImage: [],
        description: "",
        published: true
    })

    useEffect(() => {
        if (!['true', 'false'].includes(String(workCreate.published))) {
          setWorkCreate(prev => ({
            ...prev,
            published: true
          }));
        }
      }, [workCreate.published]);
    
    const postWork = () => {

        setWorkCreate((prev) => ({
            ...prev,
            coverImage: workCreate.coverImage,
            galerieImage: workCreate.galerieImage
        }));

        fetch(`/api/works`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workCreate),
        })
        .then((response) => response.json())
        .then((json) => {
            setMessage(json.message);
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value, name } = e.target;
        setWorkCreate((prev) => ({
          ...prev,
          title: id === 'title' ? value : prev.title,
          description: id === 'description' ? value : prev.description,
          slug: id === 'slug' ? value : prev.slug,
          seo: {
            ...prev.seo,
            title: id === 'seo.title' ? value : prev.seo.title,
            description: id === 'seo.description' ? value : prev.seo.description,
          },
          published: name === 'published' ? value === 'true' : prev.published
        }));
      };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postWork();
    };

    const onCloudinaryUpload = (e: any) => {

        const newImage = {
            id: e.info.public_id,
            url: e.info.url,
            width: e.info.width,
            height: e.info.height
        }

        setWorkCreate((prev: any) => ({
            ...prev,
            galerieImage: [...prev.galerieImage, newImage],
        }));
    }

    const onCloudinaryUploadCover = (e: any) => {

        setWorkCreate((prev: any) => ({
            ...prev,
            coverImage: {
                id: e.info.public_id,
                url: e.info.url,
                width: e.info.width,
                height: e.info.height
            },
        }));
    }

    return (
        <>
            <header className="banner">
                <h1 >Création d'un projet</h1>
                <Link href="/admin/works" className="btn-admin">
                <Icon icon="material-symbols:format-list-bulleted-rounded" />
                    </Link>
            </header>

            {message && <p id="message">{message}</p>}

            <section className="w-full px-[5vw] pb-[5vw] grid md:grid-cols-2 grid-cols-1 gap-[50px]">

                <form onSubmit={handleSubmit} className="flex flex-col pl-[50px]">
                    <input type="text" id="title" name="title" placeholder="Titre du projet" value={workCreate.title} onChange={handleChange}  className="champs"/>

                    <input type="text" id="slug" name="slug" placeholder="Slug du projet" value={workCreate.slug} onChange={handleChange}  className="champs"/>
                
                    <textarea name="description" id="description" placeholder="Description du projet" value={workCreate.description} onChange={handleChange} className="champs"></textarea>

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

                    <h2 className='my-[20px]'>SEO</h2>
                    <input type="text" id="seo.title"  placeholder="Titre seo du projet" value={workCreate.seo.title} onChange={handleChange}  className="champs"/>
                    <textarea id="seo.description" placeholder="Description seo du projet" value={workCreate.seo.description} onChange={handleChange} className="champs"></textarea>

                    <label>
                        Publié :
                        <input
                            type="radio"
                            name="published"
                            value="true"
                            checked={workCreate.published === true}
                            onChange={handleChange}
                        /> Oui
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="published"
                            value="false"
                            checked={workCreate.published === false}
                            onChange={handleChange}
                        /> Non
                    </label>

                    <button type="submit" className="form-btn">Envoyer</button>
                </form>

                <div className="image-projet flex flex-col aspect-square">
                    { workCreate?.coverImage?.id && <CldImage width={ workCreate.coverImage.width } height={ workCreate.coverImage.height } src={ workCreate.coverImage.id } alt="Description of my image"  className="w-full  bg-black"/> }
                </div>
                
            </section>
            {workCreate?.galerieImage && 
                 <section className="grid grid-cols-4 gap-3 px-[5vw] pb-[5vw]">
                    {workCreate?.galerieImage?.map((image) => (
                        <CldImage key={ image.id } width={ image.width } height={ image.height } src={ image.id } alt="Description of my image" />
                    ))}
                </section>
            }
           
        </>
    )
}
