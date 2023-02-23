import Image from "next/image"
import { FC } from 'react';

const FooterComponent: FC = () => {
    return (
        <>
            <footer className="flex w-full h-{100}">
                <div className="logo w-{30}">
                    {/* <img src="./img/logo.svg" alt="Marie-Laure Edjour Développeuse web " /> */}
                    {/* <Image /> */}
                </div>

                <div className="menu">
                    <div className="menu-btn">
                        {/* <iconify-icon icon="quill:hamburger"></iconify-icon> */}
                    </div>

                    <div className="menu-wrapper">
                        <ul className="menu-links">
                            <li className="menu-item">
                                <a href="index.html">Footer</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterComponent