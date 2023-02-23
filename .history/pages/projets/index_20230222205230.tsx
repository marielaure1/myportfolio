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
                    <div className="card-projet bg-red-800 row-span-3"></div>
                    <div className="card-projet bg-red-800 row-span-2"></div>
                    <div className="card-projet bg-red-800 row-span-3"></div>
                    <div className="card-projet bg-red-800 row-span-3"></div>
                    <div className="card-projet bg-red-800 row-span-2"></div>
                    <div className="card-projet bg-red-800 row-span-3"></div>
                    
                </div>
            </section>
        </>
    )
}