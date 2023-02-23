import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'
import Script from "next/script"
import Head from "next/head"
import LayoutComponent from "@/components/layout-component"

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
          {/* <link rel="icon" href="/favicon.ico" /> */}

        </Head>
        <LayoutComponent>
            
              <Component {...pageProps} />
            </main>
        </LayoutComponent>
        
    </>
     

  )
}

export default App
