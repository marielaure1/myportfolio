import Link from "next/link"

export default function Error404() {
    return (
        <>
            <header className="banner">
                <h1>Erreur 404</h1>
            </header>
            <Link href="/" className="form-btn ml-[5vw] mb-20">
                    Retourner à la page d'acceuil
            </Link>
           
          
        </>
    )
}