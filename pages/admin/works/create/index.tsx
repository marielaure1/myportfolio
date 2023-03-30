import {  useState } from 'react'
import Link from "next/link"
import {  CldUploadWidget  } from 'next-cloudinary';
import { IWork, Image } from '@/@types/work'
// import {IonIcon} from "react-ion-icon";

type Props = {
    work: IWork[];
    image: Image[];
}
const {NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, NEXT_PUBLIC_CLOUDINARY_API_KEY,NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET } = process.env

export default function CreateWork({ image }: Props){
    const [ message, setMessage ] = useState("");
    const [workCreate, setWorkCreate] = useState({ 
        title: "",
        seo: { title: "", description: "" },
        slug: "",
        coverImage:"",
        description: "",
    });
    const [listImage, setListImage] = useState("");
    
    const postWork = () => {
        console.log(workCreate);
        // console.log(JSON.stringify({
        //             ...workCreate,
        //             coverImage: listImage
        //         }));
        // setWorkCreate((prev) => ({
        //     ...prev,
        //     coverImage: 
        // }));
        
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
        const { id, value } = e.target;
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
        }));
      };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postWork();
    };

    const onCloudinaryUpload = (e: any) => {
        console.log(e);

          setWorkCreate((prev) => ({
            ...prev,
            coverImage: e.info.url,
        }));
        
    }

        return (
            <>
                <header className="banner">
                    <h1 >Création d'un projet</h1>
                    <Link href="/admin/works" className="btn-admin"><ion-icon name="list-outline"></ion-icon></Link>
                </header>

                {message && <p id="message">{message}</p>}

                <section className="w-full px-[5vw] pb-[5vw] grid grid-cols-2 gap-[50px]">

                    <form onSubmit={handleSubmit} className="flex flex-col pl-[50px]">
                        <input type="text" id="title" name="title" placeholder="Titre du projet" value={workCreate.title} onChange={handleChange}  className="champs"/>

                        <input type="text" id="slug" name="slug" placeholder="Slug du projet" value={workCreate.slug} onChange={handleChange}  className="champs"/>

                      

                    
                        <textarea name="description" id="description" placeholder="Description du projet" value={workCreate.description} onChange={handleChange} className="champs"></textarea>

                        <CldUploadWidget uploadPreset={NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET} onUpload={onCloudinaryUpload}>
                            {({ open }) => {
                                function handleOnClick(e: any) {
                                e.preventDefault();
                                open();
                                }
                                return (
                                <button onClick={handleOnClick} className="btn-upload">
                                    Uploader une Image
                                </button>
                                );
                            }}
                        </CldUploadWidget>

                        <h2 className='my-[20px]'>SEO</h2>
                        <input type="text" id="seo.title"  placeholder="Titre seo du projet" value={workCreate.seo.title} onChange={handleChange}  className="champs"/>
                        <textarea id="seo.description" placeholder="Description seo du projet" value={workCreate.seo.description} onChange={handleChange} className="champs"></textarea>

                        <button type="submit" className="form-btn">Envoyer</button>
                    </form>

                    {/* <div className="image-projet flex flex-col aspect-square">
                        <img src={ workCreate.coverImage } alt="" className="w-full  bg-black"/>
                    </div> */}
                    
                </section>
            </>
        )
}
