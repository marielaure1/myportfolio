import Image from "next/image"
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { FC } from 'react';

const NavComponent: FC = () =>  {
    return (
        <>
            <nav className="w-full h-[100px] py-[20px] px-[5vw] flex justify-between fixed ">
                <div className="w-[70px]">
                    <Image src="./img/logo.svg" alt="Marie-Laure Edjour Développeuse web " width={300} height={300} className="w-full"/>
                </div>

                <div className="menu">
                    <div className="menu-btn" onClick={nav>
                        <Icon icon="quill:hamburger" className="text-cl-dark" style={{ fontSize: '30px', mixBlendMode: "difference" }}/>
                    </div>

                    <div className="menu-content hidden">
                        <ul className="">
                            <li className="menu-item">
                                <Link href="/">Accueil</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="/projets">Projets</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="/auth/signin">Panel</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavComponent;