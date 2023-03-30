import Image from "next/image"
import Link from 'next/link'
import { FC, useEffect } from 'react';
import { Icon } from '@iconify/react';
import $ from "jquery"
import {Cursor} from "@/assets/js/myAnimation/myAnimation";


const FooterComponent: FC = () => {


        useEffect(() => {
  
            const cursor = new Cursor({
                mode: "round",
                distance: -15,
            })
        }, [])
    
    return (
        <>
            <footer className="flex w-full border-t border-solid border-black">
               <div className="sm:grid grid-cols-3 px-[5vw] w-full">
                    <div className="links py-7 flex sm:flex-row flex-col sm:mb-0 mb-4 border-r border-dashed border-black">
                        <div className="sm:w-1/2">
                            <Link href="/" className="uppercase text-sm sm:mb-3 block">Accueil</Link>
                            <Link href="/projets" className="uppercase text-sm sm:mb-3 block">Projets</Link>
                            <Link href="/a-propos" className="uppercase text-sm sm:mb-3 block">A propos</Link>
                        </div>
                        <div className="sm:w-1/2">
                            <Link href="/contact" className="uppercase text-sm sm:mb-3 block">Contact</Link>
                            <Link href="/mentions-legales" className="uppercase text-sm sm:mb-3 block">Mentions Légales</Link>
                        </div>
                    </div>
                    <div className="logo flex items-center justify-center sm:mb-0 mb-4 border-r border-dashed border-black">
                        <Link href="/">
                            <img src="./img/logo.svg" alt="Marie-Laure Edjour Développeuse web "className="w-20" /> 
                        </Link>
                    </div>
                    <div className="coords py-7 text-end">
                        <h3 className="uppercase text-sm mb-1">Coordonnées</h3>
                        <Link href="mailTo:edjour.marielaure@gmail.com" className="text-sm mb-2 block">edjour.marielaure@gmail.com</Link>
                        <span className="flex justify-end">
                            <Link href="https://github.com/marielaure1" target="_blank">
                                <Icon icon="bi:github" className="mr-2 text-xl" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/ml-edjour/" target="_blank">
                                <Icon icon="uim:linkedin-alt" className="text-[#0288D1] text-xl"/>
                            </Link>
                        </span>
                    </div>
               </div>

               
            </footer>
        </>
    )
}

export default FooterComponent