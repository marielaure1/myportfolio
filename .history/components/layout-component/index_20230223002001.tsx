import Image from "next/image"
import { FC } from 'react';
import FooterComponent from '@/components/footer-component';
import NavComponent from '@/components/nav-component';

interface Props{
    children: JSX.Element
}

const LayoutComponent: FC<Props> = ({ children }) => {
    return (
        <>
            <NavComponent />
            <main className="px-[5vw] py-[5vw]">{children}</main>
            <FooterComponent />
        </>
    )
}

export default LayoutComponent;