
import APropos from "@/components/a-propos-component";

export default function About() {
    return (
        <>
            <header className="banner">
                <h1 >A propos</h1>
            </header>
           
            <section className="about-us-area ">
                <div className="pl-[5vw] sm:w-2/3 w-full">
                    <APropos />
                </div>
            </section>
        </>
    )
}