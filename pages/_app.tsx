import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script"
import Head from "next/head"
import LayoutComponent from "@/components/layout-component"
import { SessionProvider } from "next-auth/react"

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <>
        <Head>

          
          <title>Marie-Laure Edjour</title>

          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="shortcut icon" href="./img/logo.ico" type="image/x-icon" />
          <meta name="description" content="Besoin d'un développeur web freelance compétent pour créer votre site web? Avec mes compétences en HTML, CSS, JavaScript et PHP, je peux concevoir des sites performants et esthétiques. Contactez-moi dès maintenant!" />

          <meta property="og:locale" content="fr_FR" />
          <meta property="og:type" content="siteweb" />
          <meta property="og:url" content="https://marie-laure-edjour.netlify.app/" />
          <meta property="og:image" content="./img/logo.png" />
          <meta property="og:site_name" content="Marie-Laure Edjour Développeuse web" />
          <meta property="og:description" content="Besoin d'un développeur web freelance compétent pour créer votre site web? Avec mes compétences en HTML, CSS, JavaScript et PHP, je peux concevoir des sites performants et esthétiques. Contactez-moi dès maintenant!"/>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>

        </Head>
        <SessionProvider session={session}>
        <LayoutComponent>
            
            
              <Component {...pageProps} />
            
        </LayoutComponent>
        </SessionProvider>

        {/* <script src="../js/main.js" type="module" ></script> */}
        
    </>
     

  )
}

export default App
