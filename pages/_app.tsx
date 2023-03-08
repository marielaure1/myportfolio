import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'
import Script from "next/script"
import Head from "next/head"
import LayoutComponent from "@/components/layout-component"
// import "@/assets/js/main.js"

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '800'],
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
        <style jsx global>
            {`
            :root{
                --ft-montserrat: ${montserrat.style.fontFamily}
            }`}
        </style>
        

        <Head>

          <meta name="viewport" content="width=device-width, initial-scale=1"/>

          {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js" integrity="sha512-gmwBmiTVER57N3jYS3LinA9eb8aHrJua5iQD7yqYCKa5x6Jjc7VDVaEA0je0Lu0bP9j7tEjV3+1qUm6loO99Kw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> */}

          <script src="http://localhost:3000/js/main.js" type="module" defer></script>
          {/* <script src="http://localhost:3000/js/myAnimation/myAnimation.js" type="module" defer></script> */}
          <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
          {/* <link rel="icon" href="/favicon.ico" /> */}

        </Head>
        <LayoutComponent>
            
              <Component {...pageProps} />
        </LayoutComponent>
        
    </>
     

  )
}

export default App
