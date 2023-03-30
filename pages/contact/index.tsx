
import ContactForm from "@/components/contact-component";

export default function Contact() {
    return (
        <>
            <header className="banner !mb-0">
                <h1 >Contact</h1>
            </header>
           
            <section className="contact-area border-b border-solid border-black lg:min-h-screen grid min-h-[500px] h-fit">
                <div className="flex">
                    <div className="text-container lg:w-2/3 h-full sm:pt-[5vw] sm:pr-[30px] sm:pb-[5vw] sm:pl-[10vw] sm:w-3/4 w-full py-[20px] px-[20px]">
                        <ContactForm />
                    </div>
                    <div className="img-container bg-[url('../public/img/7.jpg')] bg-cover bg-center w-1/3 h-full lg:block hidden" ></div>
                </div>
            </section>
        </>
    )
}