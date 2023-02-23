import "@/assets/js/main.js"
export default function Projets() {
    return (
        <>
             <header className="w-full px-[5vw] pt-[100px] flex">
                <h1 className="py-[5vw] text-7xl font-semibold uppercase">Mes projets</h1>
            </header>
            {/* card-projet */}
            <section className="w-full px-[5vw] pb-[5vw]">
                <div className="w-full box-border grid  grid-cols-3 auto-rows-[13vw] gap-[20px]">
                    <div className="card-projet row-span-3 border-b-4 border-black bg-[url('../img/1.jpg')] bg-cover bg-center bg-no-repeat"></div>
                    <div className="card-projet row-span-2 border-b-4 border-black"></div>
                    <div className="card-projet row-span-3 border-b-4 border-black"></div>
                    <div className="card-projet row-span-3 border-b-4 border-black"></div>
                    <div className="card-projet row-span-2 border-b-4 border-black"></div>
                    <div className="card-projet row-span-3 border-b-4 border-black"></div>
                    
                </div>
            </section>
        </>
    )
}