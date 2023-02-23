import "@/assets/js/main.js"
export default function Projets() {
    return (
        <>
             <header className="w-full px-[5vw] pt-[100px] flex">
                <h1 className="py-[5vw] text-7xl font-semibold uppercase">Mes projets</h1>
            </header>
            
            <section className="w-full px-[5vw] pb-[5vw]">
                <div className="w-full box-border grid grid-cols-3 auto-rows-[13vw] gap-[20px]">
                    <div className="card-projet row-span-3 border-b-4 border-black relative">
                        <img src="./img/1.jpg" alt="" className="object-cover object-center w-full h-full"/>
                        <div className="absolute bottom-0 left-0 w-full p-5 text-white bg-black/50">
                            <h2 className="uppercase font-semibold text-lg mb-2.5">Nom</h2>
                            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, tempora?</p>
                        </div>
                    </div>
                    <div className="card-projet row-span-2 border-b-4 border-black ">
                        <img src="./img/2.jpg" alt="" className="object-cover object-center w-full h-full"/>
                        <div className="absolute bottom-0 left-0 w-full p-5 text-white bg-black/50">
                            <h2 className="uppercase font-semibold text-lg mb-2.5">Nom</h2>
                            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, tempora?</p>
                        </div>
                    </div>
                    <div className="card-projet row-span-3 border-b-4 border-black">
                        <img src="./img/3.jpg" alt="" className="object-cover object-center w-full h-full"/>
                        <div className="absolute bottom-0 left-0 w-full p-5 text-white bg-black/50">
                            <h2 className="uppercase font-semibold text-lg mb-2.5">Nom</h2>
                            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, tempora?</p>
                        </div>
                    </div>
                    <div className="card-projet row-span-3 border-b-4 border-black">
                        <img src="./img/4.jpg" alt="" className="object-cover object-center w-full h-full"/>
                        <div className="absolute bottom-0 left-0 w-full p-5 text-white bg-black/50">
                            <h2 className="uppercase font-semibold text-lg mb-2.5">Nom</h2>
                            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, tempora?</p>
                        </div>
                    </div>
                    <div className="card-projet row-span-2 border-b-4 border-black">
                        <img src="./img/5.jpg" alt="" className="object-cover object-center w-full h-full"/>
                        <div className="absolute bottom-0 left-0 w-full p-5 text-white bg-black/50">
                            <h2 className="uppercase font-semibold text-lg mb-2.5">Nom</h2>
                            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, tempora?</p>
                        </div>
                    </div>
                    <div className="card-projet row-span-3 border-b-4 border-black">
                        <img src="./img/6.jpg" alt="" className="object-cover object-center w-full h-full"/>
                        <div className="absolute bottom-0 left-0 w-full p-5 text-white bg-black/50">
                            <h2 className="uppercase font-semibold text-lg mb-2.5">Nom</h2>
                            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, tempora?</p>
                        </div>
                    </div>
                    <div className="card-projet row-span-3 border-b-4 border-black">
                        <img src="./img/7.jpg" alt="" className="object-cover object-center w-full h-full"/>
                        <div className="absolute bottom-0 left-0 w-full p-5 text-white bg-black/50">
                            <h2 className="uppercase font-semibold text-lg mb-2.5">Nom</h2>
                            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, tempora?</p>
                        </div>
                    </div>
                    <div className="card-projet row-span-3 border-b-4 border-black">
                        <img src="./img/8.jpg" alt="" className="object-cover object-center w-full h-full"/>
                        <div className="absolute bottom-0 left-0 w-full p-5 text-white bg-black/50">
                            <h2 className="uppercase font-semibold text-lg mb-2.5">Nom</h2>
                            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, tempora?</p>
                        </div>
                    </div>
                    <div className="card-projet row-span-2 border-b-4 border-black">
                    <img src="./img/1.jpg" alt="" className="object-cover object-center w-full h-full"/>
                    </div>
                    

                </div>
            </section>
        </>
    )
}