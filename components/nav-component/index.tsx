import Image from "next/image"
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { FC } from 'react';

const NavComponent: FC = () =>  {
    return (
        <>
            <nav className="w-full h-[100px] py-[20px] px-[5vw] flex justify-between fixed ">
                <Link href="/" className="w-[70px]">
                    <Image src="/img/logo.svg" alt="Marie-Laure Edjour Développeuse web " width={300} height={300} className="w-full"/>
                </Link>

                <div className="menu">
                    <div className="menu-btn" id="menu-toggle" data-toggle data-target="#menu">
                        <Icon icon="quill:hamburger" className="text-cl-dark" style={{ fontSize: '30px', mixBlendMode: "difference" }}/>
                    </div>
                </div>
                
            </nav>

            <div className="menu-content fixed w-[100vw] h-[100vh] bg-white opacity-0 -z-[1] left-0" id="menu">
                    <div className="menu-btn  absolute right-[30px] top-[30px]"  data-toggle data-target="#menu">
                        <Icon icon="radix-icons:cross-2" className="text-cl-dark" style={{ fontSize: '30px' }}/>
                    </div>
                <ul className="">
                    <li className="menu-item active">
                        <Link href="/">Accueil</Link>
                    </li>
                    <li className="menu-item ">
                        <Link href="/projets">Projets</Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/admin/works">Admin</Link>
                    </li>
                </ul>
            </div>
            
        </>
    )
}

export default NavComponent;