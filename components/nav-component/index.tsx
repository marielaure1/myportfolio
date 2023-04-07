import Image from "next/image"
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { FC } from 'react';
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';

const NavComponent: FC = () =>  {
    const { data: session } = useSession()
    const router = useRouter();
    
    return (
        <>
            <nav className="w-full h-[100px] py-[20px] px-[5vw] flex justify-between fixed z-40" >
                <Link href="/" className="w-[70px]">
                    <Image src="/img/logo.svg" alt="Marie-Laure Edjour Développeuse web " width={300} height={300} className="w-full"/>
                </Link>

                <div className="menu">
                    <div className="menu-btn" id="menu-toggle" data-toggle data-target="#menu">
                        <Icon icon="quill:hamburger" className="text-cl-dark hamburger" style={{ fontSize: '30px', mixBlendMode: "difference" }}/>
                        <Icon icon="radix-icons:cross-2" className="text-cl-dark hidden cross" style={{ fontSize: '30px', mixBlendMode: "difference" }}/>
                    </div>
                </div>
                
            </nav>

            <div className="menu-content fixed w-[100vw] h-[100vh] bg-white opacity-0 -z-[1] left-0 overflow-y-scroll" id="menu">
                <ul className="pl-[10vw]">
                    <li className="menu-item">
                        <Link href="/" className={router.pathname == "/" ? "active" : ""}>Accueil</Link>
                    </li>
                    <li className="menu-item ">
                        <Link href="/a-propos" className={router.pathname == "/a-propos" ? "active" : ""}>A propos</Link>
                    </li>
                    <li className="menu-item ">
                        <Link href="/projets" className={router.pathname == "/projets" ? "active" : ""}>Projets</Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/contact" className={router.pathname == "/contact" ? "active" : ""}>Contact</Link>
                    </li>
                    
                    {session?.user && (
                        <>
                            
                            <li className="menu-item">
                                <Link href="/admin/works" className={router.pathname == "/admin/**" ? "active" : ""}>Admin</Link>
                            </li>
                            <button onClick={() => signOut()}>Se déconnecter</button>
                        </>
                    )}
                    {!session?.user && (
                        <>
                            <li className="menu-item">
                                <Link href="/api/auth/signin/credentails">Se connecter</Link>
                            </li>
                        </>
                    )}
                    
                </ul>
            </div>

            
            
        </>
    )
}

export default NavComponent;